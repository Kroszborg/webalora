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
    url: string;
    formats: {
      large: { url: string };
      medium: { url: string };
      small: { url: string };
      thumbnail: { url: string };
    };
  }[];
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

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://webaloracms-production-9e8b.up.railway.app';

export async function getBlogPosts(): Promise<StrapiPost[]> {
  try {
    console.log('Fetching from:', `${STRAPI_URL}/api/blogs`);
    
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
      `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}`,
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
      `${STRAPI_URL}/api/blogs?filters[slug][$ne]=${currentSlug}&pagination[limit]=3`,
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

export async function getResourcePost(slug: string): Promise<StrapiPost | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/resources?filters[slug][$eq]=${slug}`,
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
export async function getRelatedResources(currentSlug: string): Promise<StrapiPost[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/resources?filters[slug][$ne]=${currentSlug}&pagination[limit]=3`,
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
export function getImageUrl(imageUrl: string): string {
  if (!imageUrl) return "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d";
  
  if (imageUrl.startsWith('http')) return imageUrl;
  
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://webaloracms-production-9e8b.up.railway.app';
  return `${STRAPI_URL}${imageUrl}`;
}

export async function getResources(): Promise<StrapiPost[]> {
  try {
    console.log('Fetching from:', `${STRAPI_URL}/api/resources`);
    
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