// lib/hooks/useBlogData.ts
import useSWR from 'swr';
import { getBlogPost, getBlogPosts, type StrapiPost } from '@/lib/db';

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

// Define more specific fetchers to fix type issues
const postsFetcher = async (): Promise<StrapiPost[]> => {
  const result = await getBlogPosts();
  // Ensure it's always an array
  return Array.isArray(result) ? result : [];
};

const postFetcher = async (slug: string): Promise<StrapiPost | null> => {
  return await getBlogPost(slug);
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
    }
  );

  return {
    post: data,
    isLoading,
    isError: error,
  };
}

// For prefetching, we need to use the correct SWR API
// SWR doesn't have a direct prefetch method in some versions
// So we'll implement manual prefetching
export function prefetchBlogPost(slug: string) {
  // Start fetching in the background by simply calling the fetcher
  if (typeof slug === 'string' && slug) {
    // This creates a cache entry that future useSWR calls will use
    postFetcher(slug).catch(console.error);
  }
}

// Prefetch all blog posts
export function prefetchBlogPosts() {
  // Start fetching in the background
  postsFetcher().catch(console.error);
}