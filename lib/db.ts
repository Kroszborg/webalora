export interface BlogPost {
  _sys: {
    filename: string;
    basename: string;
    breadcrumbs: string[];
    path: string;
    relativePath: string;
    extension: string;
  };
  id: string;
  title: string;
  author: string;
  slug: string;
  body: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  tags: string[];
  publishDate: string;
  Description: string;
}

export interface StrapiPost {
  id: number;
  documentId: string;
  Title: string;
  Author: string;
  slug: string;
  content: string;
  publishdate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Description: string | null;
  image: {
    data?: {
      attributes?: {
        url: string;
        formats?: {
          large?: { url: string };
          medium?: { url: string };
          small?: { url: string };
          thumbnail?: { url: string };
        };
      };
    };
  };
  blog_category?: {
    id: number;
    Type: string;
  };
}

export interface StrapiResponse {
  data: StrapiPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cms.webalora.com';

export async function getBlogPosts(): Promise<StrapiPost[]> {
  try {
    // console.log('Fetching from:', `${STRAPI_URL}/api/blogs`);
    
    const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 10 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<StrapiPost | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        next: { revalidate: 10 }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getRelatedPosts(currentSlug: string): Promise<StrapiPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blogs?filters[slug][$ne]=${currentSlug}&pagination[limit]=3&populate=*`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        next: { revalidate: 10 }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export async function getResourcePost(slug: string) {
  try {
    const response = await fetch(
      `https://cms.webalora.com/api/resources?filters[slug]=${slug}&populate=*`
    );
    const data = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching resource post:', error);
    return null;
  }
}

export async function getRelatedResources(currentSlug: string): Promise<StrapiPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/resources?filters[slug][$ne]=${currentSlug}&pagination[limit]=3&populate=*`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        next: { revalidate: 10 }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export function getImageUrl(strapiImage: { data?: { attributes?: { url?: string; formats?: { large?: { url: string }; medium?: { url: string }; small?: { url: string }; thumbnail?: { url: string } } } } } | string | { url?: string; provider?: string; name?: string } | Array<{ url?: string }> | null): string {
  // Default fallback image - using the Unsplash image directly since we know it works
  const fallbackImage = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cms.webalora.com';
  
  // Handle null/undefined case
  if (!strapiImage) {
    console.log('No image data, using fallback');
    return fallbackImage;
  }
  
  try {
    // Debug the image object structure to console
    // console.log('Strapi image data structure:', JSON.stringify(strapiImage, null, 2));
    
    // Case 1: Strapi v4 format
    if (typeof strapiImage === 'object' && 'data' in strapiImage && strapiImage.data?.attributes?.url) {
      const imageUrl = strapiImage.data.attributes.url;
      
      // Handle absolute URLs
      if (imageUrl.startsWith('http')){ return imageUrl};
      
      // Handle relative URLs
      return `${STRAPI_URL}${imageUrl}`;
    }
    
    // Case 2: Handle direct URL strings
    if (typeof strapiImage === 'string') {
      if (strapiImage.startsWith('http')){ return strapiImage};
      return `${STRAPI_URL}${strapiImage}`;
    }
    
    // Case 3: Handle array format from older code
    if (Array.isArray(strapiImage) && strapiImage.length > 0) {
      if (strapiImage[0]?.url) {
        const imageUrl = strapiImage[0].url;
        if (imageUrl.startsWith('http')) { return imageUrl};
        return `${STRAPI_URL}${imageUrl}`;
      }
    }
    
    // Case 4: Direct URL property
    if ('url' in strapiImage && strapiImage.url) {
      const imageUrl = strapiImage.url;
      if (imageUrl.startsWith('http')) { return imageUrl};
      return `${STRAPI_URL}${imageUrl}`;
    }
    
    // Case 5: For development, if we have a filename in uploads, construct the URL
    if (typeof strapiImage === 'object' && 'provider' in strapiImage && strapiImage.provider === 'local' && strapiImage.name) {
      return `${STRAPI_URL}/uploads/${strapiImage.name}`;
    }
    
    // Case 6: Look for any URL property at any level
    const findUrlInObject = (obj: { [key: string]: unknown } | Array<{ [key: string]: unknown }>): string | null => {
      if (!obj || typeof obj !== 'object') { return null};
      
      // Handle array case
      if (Array.isArray(obj)) {
        for (const item of obj) {
          const url = findUrlInObject(item);
          if (url) { return url; }
        }
        return null;
      }
    
      // Check direct url property
      if (obj.url && typeof obj.url === 'string') {
        return obj.url.startsWith('http') ? obj.url : `${STRAPI_URL}${obj.url}`;
      }
      
      // Check all properties
      for (const key in obj) {
        if (key === 'url' && typeof obj[key] === 'string') {
          return obj[key].startsWith('http') ? obj[key] : `${STRAPI_URL}${obj[key]}`;
        }
        
        // Recursively check nested objects, but not arrays to prevent circular references
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          const nestedUrl = findUrlInObject(obj[key] as { [key: string]: unknown });
          if (nestedUrl) { return nestedUrl;}
        }
      }
      
      return null;
    };
    
    const foundUrl = findUrlInObject(strapiImage);
    if (foundUrl) { return foundUrl;}
    
  } catch (error) {
    console.error('Error parsing image data:', error);
  }
  
  // If all else fails, return the fallback image
  return fallbackImage;
} 

export async function getResources(): Promise<StrapiPost[]> {
  try {
    // console.log('Fetching from:', `${STRAPI_URL}/api/resources`);
    
    const response = await fetch(`${STRAPI_URL}/api/resources?populate=*`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 10 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}

export function getAllResourceCategories() {
  return [
    "Backup & Disaster Recovery",
    "Cloud Solutions & Migration",
    "Cybersecurity Solutions",
    "IT Consultancy & Strategy",
    "Managed IT Services",
    "Network Infrastructure",
    "VOIP Solutions"
  ];
}

export function getResourceCategory(post: StrapiPost): string {
  // Map resource IDs to categories based on the screenshot
  const categoryMap: Record<number, string> = {
    1: "Backup & Disaster Recovery",
    3: "Cloud Solutions & Migration",
    5: "Cybersecurity Solutions",
    7: "IT Consultancy & Strategy",
    9: "Managed IT Services",
    11: "Network Infrastructure",
    13: "VOIP Solutions"
  };
  
  // If the post has a blog_category with an id, use the mapping
  if (post.blog_category?.id) {
    return categoryMap[post.blog_category.id] || "Uncategorized";
  }
  
  // If no category ID is available, use the Type if available
  if (post.blog_category?.Type) {
    return post.blog_category.Type;
  }
  
  // Fallback to assigning a category based on post ID
  if (post.id) {
    // Cycle through the categories based on post ID
    const categoryIds = Object.keys(categoryMap).map(Number);
    const categoryId = categoryIds[post.id % categoryIds.length];
    return categoryMap[categoryId] || "Uncategorized";
  }
  
  return "Uncategorized";
}