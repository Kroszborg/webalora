// lib/hooks/useBlogData.ts
import useSWR from 'swr';
import { getBlogPost, getBlogPosts, type StrapiPost } from '@/lib/db';
import { fallbackBlogPosts, getFallbackBlogPost } from '@/lib/offlineFallbacks';

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const REQUEST_TIMEOUT = 8000; // 8 seconds timeout

// Helper to add timeout to promises
const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  let timeoutId: NodeJS.Timeout;
  
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, ms);
  });

  return Promise.race([
    promise,
    timeoutPromise,
  ]).finally(() => {
    clearTimeout(timeoutId);
  }) as Promise<T>;
};

// Define more specific fetchers to fix type issues
const postsFetcher = async (): Promise<StrapiPost[]> => {
  try {
    const result = await withTimeout(getBlogPosts(), REQUEST_TIMEOUT);
    // Ensure it's always an array
    return Array.isArray(result) && result.length > 0 ? result : fallbackBlogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return fallback data instead of empty array for better UX
    return fallbackBlogPosts;
  }
};

const postFetcher = async (slug: string): Promise<StrapiPost | null> => {
  try {
    const result = await withTimeout(getBlogPost(slug), REQUEST_TIMEOUT);
    // If we get a valid result, return it
    if (result) {
      return result;
    }
    // Try to get a fallback post if API call returns nothing
    return getFallbackBlogPost(slug);
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    // Try to get a fallback post if API call fails
    return getFallbackBlogPost(slug);
  }
};

// Hook to get all blog posts
export function useBlogPosts() {
  const { data, error, isLoading } = useSWR<StrapiPost[]>(
    '/api/blog/posts', 
    () => postsFetcher(),
    {
      dedupingInterval: CACHE_TIME,
      revalidateOnFocus: false,
      revalidateIfStale: false,
      errorRetryCount: 2,
      refreshInterval: 0, // Disable automatic polling
      suspense: false,
    }
  );

  return {
    posts: data || [],
    isLoading,
    isError: error,
  };
}

// Hook to get a single blog post
export function useBlogPost(slug: string) {
  const { data, error, isLoading } = useSWR<StrapiPost | null>(
    slug ? `/api/blog/post/${slug}` : null,
    () => slug ? postFetcher(slug) : null,
    {
      dedupingInterval: CACHE_TIME,
      revalidateOnFocus: false,
      revalidateIfStale: false,
      errorRetryCount: 2,
      refreshInterval: 0, // Disable automatic polling
      suspense: false,
    }
  );

  return {
    post: data,
    isLoading,
    isError: error,
  };
}

// For prefetching, we need to implement manual prefetching
// that can handle timeouts and errors gracefully
export function prefetchBlogPost(slug: string) {
  try {
    // Start fetching in the background by simply calling the fetcher
    if (typeof slug === 'string' && slug) {
      // This creates a cache entry that future useSWR calls will use
      postFetcher(slug).catch(error => {
        console.error(`Error prefetching blog post "${slug}":`, error);
        // We swallow the error here since prefetching is optional
      });
    }
  } catch (error) {
    // Additional safety in case the entire prefetch mechanism fails
    console.error(`Failed to initiate prefetch for "${slug}":`, error);
  }
}

// Prefetch all blog posts
export function prefetchBlogPosts() {
  try {
    // Start fetching in the background
    postsFetcher().catch(error => {
      console.error('Error prefetching blog posts:', error);
      // We swallow the error here since prefetching is optional
    });
  } catch (error) {
    // Additional safety in case the entire prefetch mechanism fails
    console.error('Failed to initiate prefetch for blog posts:', error);
  }
}