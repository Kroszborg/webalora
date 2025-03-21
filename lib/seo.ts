// lib/seo.ts
import type { Metadata } from 'next';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  articleDetails?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/logos/logobg.jpg',
  ogType = 'website',
  articleDetails,
}: SeoProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webalora.com';
  const url = `${baseUrl}${path}`;
  
  // Base metadata
  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'WebAlora',
      locale: 'en_GB',
      type: ogType,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
  };

  // Add article-specific metadata if provided
  if (ogType === 'article' && articleDetails) {
    metadata.openGraph = {
      ...metadata.openGraph,
      article: {
        publishedTime: articleDetails.publishedTime,
        modifiedTime: articleDetails.modifiedTime,
        authors: articleDetails.author ? [articleDetails.author] : undefined,
        section: articleDetails.section,
        tags: articleDetails.tags,
      },
    };
  }

  return metadata;
}