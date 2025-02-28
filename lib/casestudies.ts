import { serialize } from "next-mdx-remote/serialize"

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client: string
  industry: string
  services: string[]
  challenge: string
  solution: string
  results: string[]
  content: string
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  featuredImage: string
}

export interface StrapiCaseStudy {
  id: number;
  documentId: string;
  Title: string;
  Author: string;
  slug: string;
  Content: string;
  publishdate: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Description: string | null;
  image?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
}

interface StrapiResponse {
  data: StrapiCaseStudy[];
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

export const DEFAULT_CASE_STUDY_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069";

export async function getCaseStudies(): Promise<StrapiCaseStudy[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/case-studies?populate=*`, {
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
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getCaseStudy(slug: string): Promise<StrapiCaseStudy | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/case-studies?filters[slug][$eq]=${slug}&populate=*`,
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
    console.error('Error fetching case study:', error);
    return null;
  }
}

export async function getRelatedCaseStudies(currentStudy: StrapiCaseStudy, limit = 2): Promise<StrapiCaseStudy[]> {
  try {
    const allCaseStudies = await getCaseStudies();
    return allCaseStudies
      .filter(study => study.id !== currentStudy.id)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching related case studies:', error);
    return [];
  }
}

export async function searchCaseStudies(query: string): Promise<StrapiCaseStudy[]> {
  try {
    const allCaseStudies = await getCaseStudies();
    const lowercaseQuery = query.toLowerCase();
    return allCaseStudies.filter(
      (study: StrapiCaseStudy) =>
        study.Title.toLowerCase().includes(lowercaseQuery) ||
        study.Content.toLowerCase().includes(lowercaseQuery) ||
        study.Author.toLowerCase().includes(lowercaseQuery) ||
        (study.Description?.toLowerCase() || '').includes(lowercaseQuery)
    );
  } catch (error) {
    console.error('Error searching case studies:', error);
    return [];
  }
}

export async function getSerializedContent(content: string) {
  return await serialize(content)
}

// lib/casestudies.ts - Replace the getCaseStudyImageUrl function

export function getCaseStudyImageUrl(caseStudy: StrapiCaseStudy): string {
  // Use your provided default as fallback
  const DEFAULT_CASE_STUDY_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069";
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://webaloracms-production-9e8b.up.railway.app';
  
  console.log("🔍 Getting case study image for:", caseStudy.Title);
  
  try {
    
    // Special case - if you know the exact URL format for a specific case study
    // This is useful for debugging specific cases
    if (caseStudy.slug === "first") {
      const directURL = `${STRAPI_URL}/uploads/pexels_peter_olexa_2214257_3875821_56b4e377dc.jpg`;
      console.log("✅ Using direct URL for first case study:", directURL);
      return directURL;
    }
    
    // Log the full case study object to inspect all properties
    console.log("📦 Full case study object:", JSON.stringify(caseStudy, null, 2));
    
    // Try to find image URL in caseStudy.image
    if (caseStudy.image) {
      console.log("🖼️ Case study has image property:", JSON.stringify(caseStudy.image, null, 2));
      
      // Case 1: Standard Strapi v4 format
      if (caseStudy.image.data?.attributes?.url) {
        const imageUrl = caseStudy.image.data.attributes.url;
        const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${STRAPI_URL}${imageUrl}`;
        console.log("✅ Found standard Strapi v4 image URL:", fullUrl);
        return fullUrl;
      }
      
      // Case 2: Direct URL in the image object
      if (typeof caseStudy.image === 'string') {
        const fullUrl = caseStudy.image.startsWith('http') ? caseStudy.image : `${STRAPI_URL}${caseStudy.image}`;
        console.log("✅ Found direct string URL:", fullUrl);
        return fullUrl;
      }
    }
    
    // Case 3: Look in other common properties
    const commonProperties = ['image', 'coverImage', 'featured_image', 'featured', 'thumbnail', 'photo'];
    for (const prop of commonProperties) {
      if (caseStudy[prop as keyof StrapiCaseStudy]) {
        const propValue = caseStudy[prop as keyof StrapiCaseStudy];
        console.log(`🔍 Checking property ${prop}:`, propValue);
        
        if (typeof propValue === 'string' && propValue.includes('/uploads/')) {
          console.log(`✅ Found URL in ${prop}:`, propValue);
          return propValue.startsWith('http') ? propValue : `${STRAPI_URL}${propValue}`;
        }
      }
    }
    
    // Case 4: Deep search for URL patterns in the entire object
    const findUrlsInObject = (obj: any): string[] => {
      const urls: string[] = [];
      
      const search = (o: any, path: string = '') => {
        if (!o || typeof o !== 'object') return;
        
        Object.entries(o).forEach(([key, value]) => {
          const currentPath = path ? `${path}.${key}` : key;
          
          if (typeof value === 'string' && value.includes('/uploads/')) {
            console.log(`🔍 Found URL pattern at ${currentPath}:`, value);
            urls.push(value.startsWith('http') ? value : `${STRAPI_URL}${value}`);
          } else if (value && typeof value === 'object' && !Array.isArray(value)) {
            search(value, currentPath);
          } else if (Array.isArray(value)) {
            value.forEach((item, index) => {
              search(item, `${currentPath}[${index}]`);
            });
          }
        });
      };
      
      search(obj);
      return urls;
    };
    
    const foundUrls = findUrlsInObject(caseStudy);
    if (foundUrls.length > 0) {
      console.log("✅ Found URL patterns in deep search:", foundUrls[0]);
      return foundUrls[0];
    }
    
    // Hardcoded fallback for when all else fails
    if (caseStudy.slug) {
      // Example of using a pattern based on the slug
      const fallbackPattern = `${STRAPI_URL}/uploads/${caseStudy.slug.replace(/-/g, '_')}_image.jpg`;
      console.log("⚠️ Using generated pattern URL:", fallbackPattern);
      return fallbackPattern;
    }
    
  } catch (error) {
    console.error("❌ Error extracting image URL:", error);
  }
  
  console.log("⚠️ No image found, using default fallback");
  return DEFAULT_CASE_STUDY_IMAGE;
}