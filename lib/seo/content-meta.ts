import { generateMetadata } from './index';
import { type Metadata } from 'next';
import type { StrapiPost } from '@/lib/db';
import { getImageUrl } from '@/lib/db';

/**
 * Extract key terms from a piece of content
 * Used to generate relevant keywords for SEO
 */
function extractKeyTerms(content: string, limit: number = 5): string[] {
  if (!content){ return [];}
  
  // Remove HTML tags
  const plainContent = content.replace(/<[^>]*>/g, '');
  
  // Dictionary of common words to exclude
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 
    'in', 'of', 'with', 'this', 'that', 'these', 'those',
    'it', 'its', 'they', 'them', 'their', 'we', 'our', 'you', 'your'
  ]);
  
  // Split by non-word characters and filter
  const words = plainContent.split(/\W+/)
    .filter(word => 
      word.length > 3 && 
      !stopWords.has(word.toLowerCase()) && 
      /^[a-zA-Z0-9]+$/.test(word)
    );
  
  // Count occurrences
  const wordCounts: Record<string, number> = {};
  for (const word of words) {
    const lowerWord = word.toLowerCase();
    wordCounts[lowerWord] = (wordCounts[lowerWord] || 0) + 1;
  }
  
  // Sort by count and get top terms
  return Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word[0].toUpperCase() + word.slice(1));
}

/**
 * Generate clean meta description from content
 */
function generateCleanDescription(content: string, maxLength: number = 160): string {
  if (!content){ return '';}
  
  // Remove HTML tags
  const plainText = content.replace(/<[^>]*>/g, '');
  
  // If already short enough, use as is
  if (plainText.length <= maxLength){ return plainText.trim();}
  
  // Find the last period before maxLength to create a complete sentence
  const excerpt = plainText.substring(0, maxLength);
  const lastPeriod = excerpt.lastIndexOf('.');
  
  if (lastPeriod > maxLength / 2) {
    return excerpt.substring(0, lastPeriod + 1).trim();
  }
  
  // Fall back to word boundary if period not found
  const lastSpace = excerpt.lastIndexOf(' ');
  return excerpt.substring(0, lastSpace).trim() + '...';
}

/**
 * Generate metadata for a blog post
 */
export function generateBlogPostMetadata(post: StrapiPost, slug: string): Metadata {
  // Get clean description
  const description = post.Description || generateCleanDescription(post.content);
  
  // Extract keywords from content
  const extractedKeywords = extractKeyTerms(post.content);
  
  // Get category and use it for keywords
  const categoryKeyword = post.blog_category?.Type || 'General';
  
  // Combine keywords and ensure uniqueness
  const combinedKeywords = [
    'WebAlora Blog', 
    categoryKeyword,
    'IT Insights',
    ...extractedKeywords
  ];
  
  // Create unique set of keywords
  const uniqueKeywords = Array.from(new Set(combinedKeywords));
  
  return generateMetadata({
    title: `${post.Title} | WebAlora Blog`,
    description,
    path: `/blog/${slug}`,
    keywords: uniqueKeywords,
    ogImage: getImageUrl(post.image),
    ogType: 'article',
    articleDetails: {
      publishedTime: post.publishdate || post.publishedAt,
      modifiedTime: post.updatedAt,
      author: post.Author || 'WebAlora Team',
      section: post.blog_category?.Type || 'General',
      tags: extractedKeywords,
    },
  });
}

/**
 * Generate metadata for a resource page
 */
export function generateResourceMetadata(resource: StrapiPost, slug: string): Metadata {
  // Get clean description
  const description = resource.Description || generateCleanDescription(resource.content);
  
  // Extract keywords from content
  const extractedKeywords = extractKeyTerms(resource.content);
  
  // Get category name
  const categoryName = resource.blog_category?.Type || 'IT Resource';
  
  // Create resource-specific pre-keywords
  const resourceKeywords = [
    'WebAlora Resources',
    categoryName,
    'IT Guide',
    'Technology Resource',
    'Business IT',
  ];
  
  // Combine keywords and ensure uniqueness
  const uniqueKeywords = Array.from(new Set([...resourceKeywords, ...extractedKeywords]));
  
  return generateMetadata({
    title: `${resource.Title} | WebAlora Resources`,
    description,
    path: `/resource/${slug}`,
    keywords: uniqueKeywords,
    ogImage: getImageUrl(resource.image),
    ogType: 'article',
    articleDetails: {
      publishedTime: resource.publishdate || resource.publishedAt,
      modifiedTime: resource.updatedAt,
      author: resource.Author || 'WebAlora Team',
      section: categoryName,
      tags: extractedKeywords,
    },
  });
}

/**
 * Extract a snippet for social sharing or search results
 */
export function extractContentSnippet(content: string, maxLength: number = 120): string {
  if (!content){ return '';}
  // Remove HTML tags and extra spaces
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (cleanContent.length <= maxLength) {return cleanContent;}
  
  // Try to find a complete sentence
  const periodIndex = cleanContent.indexOf('.', maxLength / 2);
  if (periodIndex > 0 && periodIndex <= maxLength) {
    return cleanContent.substring(0, periodIndex + 1);
  }
  
  // Fall back to word boundary
  const excerpt = cleanContent.substring(0, maxLength);
  const lastSpace = excerpt.lastIndexOf(' ');
  
  return excerpt.substring(0, lastSpace) + '...';
}

/**
 * Generate canonical URL with proper formatting
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webalora.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}