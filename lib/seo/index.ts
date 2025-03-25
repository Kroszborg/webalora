// lib/seo/index.ts
import type { Metadata } from 'next';

export interface SeoProps {
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
  noIndex?: boolean;
  noFollow?: boolean;
  alternateLanguages?: Record<string, string>;
}

/**
 * Generate comprehensive metadata for Next.js pages
 */
export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/logos/logobg.jpg',
  ogType = 'website',
  articleDetails,
  noIndex = false,
  noFollow = false,
  alternateLanguages = {},
}: SeoProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webalora.com';
  const url = `${baseUrl}${path}`;
  
  // Ensure image URLs are absolute
  const absoluteImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  // Build robots directive (removed unused variable)
  
  // Base metadata
  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
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
          url: absoluteImageUrl,
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
      images: [absoluteImageUrl],
      creator: '@WebAlora',
      site: '@WebAlora',
    },
    other: {
      'msapplication-TileColor': '#0069ff',
      'theme-color': '#ffffff',
    },
  };

  // Add article-specific metadata if provided
  if (ogType === 'article' && articleDetails) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: articleDetails.publishedTime,
      modifiedTime: articleDetails.modifiedTime || articleDetails.publishedTime,
      authors: articleDetails.author ? [articleDetails.author] : undefined,
      section: articleDetails.section,
      tags: articleDetails.tags,
    };
  }

  return metadata;
}

/**
 * Safely truncates a string to a specified length and adds ellipsis if needed
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (!text) {
    return '';
  }
  
  // Remove HTML tags
  const plainText = text.replace(/<[^>]*>/g, '');
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // Find the last space before maxLength
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
}

/**
 * Generate schema.org JSON-LD structured data
 */
export function generateStructuredData<T extends Record<string, unknown>>(type: string, data: T): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
  
  return JSON.stringify(structuredData);
}

/**
 * Generate breadcrumb schema markup
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): string {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url,
  }));
  
  return generateStructuredData('BreadcrumbList', { itemListElement });
}