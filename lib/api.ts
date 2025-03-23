// lib/api.ts
import type { StrapiPost } from '@/lib/db';
import type { StrapiCaseStudy } from '@/lib/casestudies';
import { fallbackBlogPosts, getFallbackBlogPost } from '@/lib/offlineFallbacks';
import { CircuitBreaker } from '@/lib/circuit-breaker';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cms.webalora.com';
const CACHE_TIME = 300; // 5 minutes in seconds
const REQUEST_TIMEOUT = 8000; // 8 seconds

// Create circuit breakers for different API endpoints
const blogBreaker = new CircuitBreaker({
  failureThreshold: 3,
  resetTimeout: 60000 // 1 minute
});

const resourceBreaker = new CircuitBreaker({
  failureThreshold: 3,
  resetTimeout: 60000
});

const caseStudyBreaker = new CircuitBreaker({
  failureThreshold: 3,
  resetTimeout: 60000
});

// Enhanced fetch with timeout, error handling, and logging
async function fetchWithTimeout<T>(
  url: string, 
  options: RequestInit & { timeout?: number } = {}
): Promise<T> {
  const { timeout = REQUEST_TIMEOUT, ...fetchOptions } = options;
  
  const controller = new AbortController();
  const { signal } = controller;
  
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      // Try to get more detailed error information
      const errorText = await response.text().catch(() => 'Could not read response text');
      console.error(`API Error: ${response.status} ${response.statusText}`, { 
        url, 
        errorText: errorText.substring(0, 500) // Truncate long error messages
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    
    // Handle timeout errors
    if (error instanceof DOMException && error.name === 'AbortError') {
      console.error(`Request to ${url} timed out after ${timeout}ms`);
      throw new Error(`Request to ${url} timed out after ${timeout}ms`);
    }
    
    // Add more context to error logging
    console.error('Fetch error:', error instanceof Error ? error.message : String(error), { 
      url,
      method: options.method || 'GET'
    });
    
    throw error;
  }
}

// Helper function to add cache headers to fetch options
const getCacheOptions = () => ({
  next: { revalidate: CACHE_TIME }
});

// Blog APIs
export async function getBlogPosts(): Promise<StrapiPost[]> {
  return blogBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiPost[] }>(
          `${STRAPI_URL}/api/blogs?populate=*`,
          getCacheOptions()
        );
        return data.data;
      } catch (error) {
        console.error('Error in getBlogPosts:', error);
        throw error; // Re-throw to let circuit breaker handle it
      }
    },
    async () => {
      console.log('Circuit open: Using fallback blog posts');
      return fallbackBlogPosts;
    }
  );
}

export async function getBlogPost(slug: string): Promise<StrapiPost | null> {
  return blogBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiPost[] }>(
          `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
          getCacheOptions()
        );
        return data.data[0] || null;
      } catch (error) {
        console.error(`Error in getBlogPost for slug ${slug}:`, error);
        throw error;
      }
    },
    async () => {
      console.log(`Circuit open: Using fallback blog post for slug ${slug}`);
      return getFallbackBlogPost(slug);
    }
  );
}

export async function getRelatedPosts(currentSlug: string): Promise<StrapiPost[]> {
  return blogBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiPost[] }>(
          `${STRAPI_URL}/api/blogs?filters[slug][$ne]=${encodeURIComponent(currentSlug)}&pagination[limit]=3&populate=*`,
          getCacheOptions()
        );
        return data.data;
      } catch (error) {
        console.error(`Error in getRelatedPosts for slug ${currentSlug}:`, error);
        throw error;
      }
    },
    async () => {
      console.log(`Circuit open: Using fallback related posts for slug ${currentSlug}`);
      return fallbackBlogPosts.filter(post => post.slug !== currentSlug).slice(0, 3);
    }
  );
}

// Resource APIs
export async function getResources(): Promise<StrapiPost[]> {
  return resourceBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiPost[] }>(
          `${STRAPI_URL}/api/resources?populate=*`,
          getCacheOptions()
        );
        return data.data;
      } catch (error) {
        console.error('Error in getResources:', error);
        throw error;
      }
    },
    async () => {
      console.log('Circuit open: Using fallback resources');
      // You would need to create fallback resources similar to fallbackBlogPosts
      return [];
    }
  );
}

export async function getResourcePost(slug: string): Promise<StrapiPost | null> {
  return resourceBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiPost[] }>(
          `${STRAPI_URL}/api/resources?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
          getCacheOptions()
        );
        return data.data[0] || null;
      } catch (error) {
        console.error(`Error in getResourcePost for slug ${slug}:`, error);
        throw error;
      }
    },
    async () => {
      console.log(`Circuit open: Using fallback resource for slug ${slug}`);
      return null;
    }
  );
}

export async function getRelatedResources(currentSlug: string): Promise<StrapiPost[]> {
  return resourceBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiPost[] }>(
          `${STRAPI_URL}/api/resources?filters[slug][$ne]=${encodeURIComponent(currentSlug)}&pagination[limit]=3&populate=*`,
          getCacheOptions()
        );
        return data.data;
      } catch (error) {
        console.error(`Error in getRelatedResources for slug ${currentSlug}:`, error);
        throw error;
      }
    },
    async () => {
      console.log(`Circuit open: Using fallback related resources for slug ${currentSlug}`);
      return [];
    }
  );
}

// Case Studies APIs
export async function getCaseStudies(): Promise<StrapiCaseStudy[]> {
  return caseStudyBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiCaseStudy[] }>(
          `${STRAPI_URL}/api/case-studies?populate=*`,
          getCacheOptions()
        );
        
        // Add category IDs (temp solution until API provides them)
        return data.data.map((study, index) => {
          const categoryId = 3 + ((index % 7) * 2);
          return {
            ...study,
            categoryId
          };
        });
      } catch (error) {
        console.error('Error in getCaseStudies:', error);
        throw error;
      }
    },
    async () => {
      console.log('Circuit open: Using fallback case studies');
      return [];
    }
  );
}

export async function getCaseStudy(slug: string): Promise<StrapiCaseStudy | null> {
  return caseStudyBreaker.execute(
    async () => {
      try {
        const data = await fetchWithTimeout<{ data: StrapiCaseStudy[] }>(
          `${STRAPI_URL}/api/case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
          getCacheOptions()
        );
        
        if (data.data[0]) {
          const study = data.data[0];
          const categoryId = 3 + ((study.id % 7) * 2);
          return {
            ...study,
            categoryId
          };
        }
        
        return null;
      } catch (error) {
        console.error(`Error in getCaseStudy for slug ${slug}:`, error);
        throw error;
      }
    },
    async () => {
      console.log(`Circuit open: Using fallback case study for slug ${slug}`);
      return null;
    }
  );
}

// Unified image URL helper
interface ImageData {
  data?: {
    attributes?: {
      url?: string;
    };
  };
  url?: string;
}

export function getImageUrl(image: ImageData | ImageData[] | string | null): string {
  // Default fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";
  
  if (!image) {
    return fallbackImage;
  }
  
  try {
    // Standard Strapi v4 format
    if (typeof image === 'object' && 'data' in image && image.data?.attributes?.url) {
      const imageUrl = image.data.attributes.url;
      return imageUrl.startsWith('http') ? imageUrl : `${STRAPI_URL}${imageUrl}`;
    }
    
    // Direct URL string
    if (typeof image === 'string') {
      return image.startsWith('http') ? image : `${STRAPI_URL}${image}`;
    }
    
    // Array format
    if (Array.isArray(image) && image.length > 0 && image[0]?.url) {
      const imageUrl = image[0].url;
      return imageUrl.startsWith('http') ? imageUrl : `${STRAPI_URL}${imageUrl}`;
    }
    
    // Object with URL property
    if (typeof image === 'object' && 'url' in image && image.url) {
      const imageUrl = image.url;
      return imageUrl.startsWith('http') ? imageUrl : `${STRAPI_URL}${imageUrl}`;
    }
  } catch (error) {
    console.error('Error parsing image data:', error);
  }
  
  return fallbackImage;
}

// Health check function for monitoring
export async function checkApiHealth(): Promise<{
  status: 'healthy' | 'degraded' | 'unhealthy';
  services: Record<string, 'connected' | 'disconnected'>;
}> {
  try {
    // Check main CMS availability with a simple HEAD request
    const cmsResponse = await fetch(`${STRAPI_URL}/api/health`, {
      method: 'HEAD',
      cache: 'no-store',
    }).then(res => res.ok).catch(() => false);
    
    return {
      status: cmsResponse ? 'healthy' : 'degraded',
      services: {
        cms: cmsResponse ? 'connected' : 'disconnected'
      }
    };
  } catch (error) {
    console.error('API health check failed:', error);
    return {
      status: 'unhealthy',
      services: {
        cms: 'disconnected'
      }
    };
  }
}