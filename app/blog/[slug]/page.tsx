"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SocialShare } from "@/components/blog/SocialShare";
import BlogContent from "@/components/blog/BlogContent";
import { Calendar, User } from "lucide-react";
import {
  useBlogPost,
  useBlogPosts,
  prefetchBlogPosts,
} from "@/lib/hooks/useBlogData";
import { getImageUrl } from "@/lib/db";
import { OptimizedImage } from "@/components/OptimizedImage";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { LoadingFallback } from "@/components/loading";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  // Track if we should show the error UI
  const [hasError, setHasError] = useState(false);

  // Use cached data hook with timeout handling
  const { post: strapiPost, isLoading, isError } = useBlogPost(slug);

  // Set up a timeout for the loading state
  useEffect(() => {
    // If already loaded or errored, don't set up timeout
    if (!isLoading || isError) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setHasError(true);
    }, 10000); // 10 second timeout - increase since the server might be slow

    return () => clearTimeout(timeoutId);
  }, [isLoading, isError]);

  // Prefetch blog posts listing when viewing a detail page for faster "back" navigation
  // But only after the main content has loaded to prioritize current page content
  useEffect(() => {
    if (!isLoading && strapiPost) {
      try {
        // Use setTimeout to delay non-critical prefetching
        const timeoutId = setTimeout(() => {
          prefetchBlogPosts();
        }, 2000); // Delay prefetching by 2 seconds

        return () => clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error prefetching blog posts:", error);
      }
    }
  }, [isLoading, strapiPost]);

  // Handle loading state
  if (isLoading && !hasError) {
    return <LoadingFallback />;
  }

  // Handle error states
  if (isError || hasError || !strapiPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 text-center px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Post Not Available
          </h1>
          <p className="text-gray-600 mb-6">
            We&apos;re having trouble retrieving this post. This could be due to a
            network issue or the post may no longer exist.
          </p>
          <button
            onClick={() => router.push("/blog")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // If we have data, format it for display
  const post = {
    id: strapiPost.id.toString(),
    title: strapiPost.Title,
    author: strapiPost.Author || "Anonymous",
    slug: strapiPost.slug,
    body: strapiPost.content,
    content: strapiPost.content,
    excerpt:
      strapiPost.Description || strapiPost.content?.substring(0, 160) + "...",
    Description: strapiPost.Description || "",
    featuredImage: getImageUrl(strapiPost.image),
    category: strapiPost.blog_category?.Type || "General",
    publishDate: strapiPost.publishdate || strapiPost.publishedAt,
  };

  const postUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/blog/${slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <article className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <OptimizedImage
              src={post.featuredImage}
              fallbackSrc="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        <SocialShare url={postUrl} title={post.title} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <BlogContent content={post.body || ""} />
        </div>

        {/* Related posts with error handling */}
        <ErrorBoundaryClient>
          <ClientRelatedPosts slug={slug} />
        </ErrorBoundaryClient>
      </article>
    </div>
  );
}

// Client-side related posts component with timeout handling
function ClientRelatedPosts({ slug }: { slug: string }) {
  const { posts, isLoading } = useBlogPosts();
  const [hasTimedOut, setHasTimedOut] = useState(false);

  // Set up a timeout for the loading state
  useEffect(() => {
    if (!isLoading) return;

    const timeoutId = setTimeout(() => {
      setHasTimedOut(true);
    }, 8000); // 8 second timeout - increased to allow more time for slow connections

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  if ((isLoading && !hasTimedOut) || !Array.isArray(posts)) {
    return (
      <div className="border-t border-gray-100 pt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse h-64 bg-gray-100 rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // If we've timed out or have no posts, don't show the section
  if (hasTimedOut || !posts.length) {
    return null;
  }

  // Get 3 related posts, safely handling the data
  const relatedPosts = posts
    .filter((post) => post?.slug && post.slug !== slug)
    .slice(0, 3)
    .map((post) => ({
      id: post.id?.toString() || Math.random().toString(),
      title: post.Title || "Untitled Post",
      author: post.Author || "Anonymous",
      slug: post.slug || "",
      excerpt:
        post.Description ||
        post.content?.substring(0, 160) + "..." ||
        "No description available",
      Description: post.Description || "",
      featuredImage: getImageUrl(post.image),
      category: post.blog_category?.Type || "General",
      publishDate:
        post.publishdate || post.publishedAt || new Date().toISOString(),
      content: post.content || "",
      tags: [],
    }));

  if (!relatedPosts.length) return null;

  return (
    <div className="border-t border-gray-100 pt-12">
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}

// Simple error boundary wrapper for client components
function ErrorBoundaryClient({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.error("Error caught by error boundary:", event.error);
      setHasError(true);
      // Prevent the error from propagating
      event.preventDefault();
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return null; // Return nothing if there's an error
  }

  return <>{children}</>;
}
