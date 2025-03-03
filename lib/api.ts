// lib/api.ts
import type { StrapiPost } from '@/lib/db';
import type { StrapiCaseStudy } from '@/lib/casestudies';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cms.webalora.com';
const CACHE_TIME = 300; // 5 minutes in seconds

// Helper function to add cache headers to fetch options
const getCacheOptions = () => ({
  next: { revalidate: CACHE_TIME }
});

// Helper function for API requests
async function fetchAPI<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      ...getCacheOptions()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

// Blog APIs
export async function getBlogPosts(): Promise<StrapiPost[]> {
  try {
    const data = await fetchAPI<{ data: StrapiPost[] }>('blogs?populate=*');
    return data.data;
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<StrapiPost | null> {
  try {
    const data = await fetchAPI<{ data: StrapiPost[] }>(`blogs?filters[slug][$eq]=${slug}&populate=*`);
    return data.data[0] || null;
  } catch (error) {
    console.error(`Error in getBlogPost for slug ${slug}:`, error);
    return null;
  }
}

export async function getRelatedPosts(currentSlug: string): Promise<StrapiPost[]> {
  try {
    const data = await fetchAPI<{ data: StrapiPost[] }>(`blogs?filters[slug][$ne]=${currentSlug}&pagination[limit]=3&populate=*`);
    return data.data;
  } catch (error) {
    console.error(`Error in getRelatedPosts for slug ${currentSlug}:`, error);
    return [];
  }
}

// Resource APIs
export async function getResources(): Promise<StrapiPost[]> {
  try {
    const data = await fetchAPI<{ data: StrapiPost[] }>('resources?populate=*');
    return data.data;
  } catch (error) {
    console.error('Error in getResources:', error);
    return [];
  }
}

export async function getResourcePost(slug: string): Promise<StrapiPost | null> {
  try {
    const data = await fetchAPI<{ data: StrapiPost[] }>(`resources?filters[slug][$eq]=${slug}&populate=*`);
    return data.data[0] || null;
  } catch (error) {
    console.error(`Error in getResourcePost for slug ${slug}:`, error);
    return null;
  }
}

export async function getRelatedResources(currentSlug: string): Promise<StrapiPost[]> {
  try {
    const data = await fetchAPI<{ data: StrapiPost[] }>(`resources?filters[slug][$ne]=${currentSlug}&pagination[limit]=3&populate=*`);
    return data.data;
  } catch (error) {
    console.error(`Error in getRelatedResources for slug ${currentSlug}:`, error);
    return [];
  }
}

// Case Studies APIs
export async function getCaseStudies(): Promise<StrapiCaseStudy[]> {
  try {
    const data = await fetchAPI<{ data: StrapiCaseStudy[] }>('case-studies?populate=*');
    
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
    return [];
  }
}

export async function getCaseStudy(slug: string): Promise<StrapiCaseStudy | null> {
  try {
    const data = await fetchAPI<{ data: StrapiCaseStudy[] }>(`case-studies?filters[slug][$eq]=${slug}&populate=*`);
    
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
    return null;
  }
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