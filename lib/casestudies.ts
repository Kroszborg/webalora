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

export function getCaseStudyImageUrl(caseStudy: StrapiCaseStudy): string {
  if (caseStudy.image?.data?.attributes?.url) {
    return `${STRAPI_URL}${caseStudy.image.data.attributes.url}`;
  }
  return DEFAULT_CASE_STUDY_IMAGE;
}

