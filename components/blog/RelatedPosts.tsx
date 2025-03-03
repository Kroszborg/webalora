"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OptimizedImage, optimizeImageUrl } from "@/components/OptimizedImage";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author?: string;
  publishDate: string | Date;
  category: string;
  featuredImage: string;
}

interface RelatedPostsProps {
  posts: BlogPost[];
  type?: "blog" | "resource" | "case-study";
  title?: string;
  className?: string;
}

// Use memo to prevent unnecessary re-renders
const RelatedPostItem = memo(
  ({
    post,
    type = "blog",
  }: {
    post: BlogPost;
    type?: "blog" | "resource" | "case-study";
  }) => {
    // Default fallback image
    const fallbackImage = "/placeholder.svg";
    // Optimize image URL for better performance
    const optimizedImage = optimizeImageUrl(
      post.featuredImage || fallbackImage,
      600
    );
    // Generate URL based on content type
    const url =
      type === "blog"
        ? `/blog/${post.slug}`
        : type === "resource"
        ? `/resource/${post.slug}`
        : `/case-studies/${post.slug}`;

    return (
      <Link
        key={post.id}
        href={url}
        className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={optimizedImage}
            fallbackSrc={fallbackImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {typeof post.publishDate === "string"
                ? new Date(post.publishDate).toLocaleDateString()
                : post.publishDate instanceof Date
                ? post.publishDate.toLocaleDateString()
                : "Unknown date"}
            </span>
            <span className="text-blue-600 flex items-center text-sm font-medium">
              Read More
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    );
  }
);

RelatedPostItem.displayName = "RelatedPostItem";

export function RelatedPosts({
  posts,
  type = "blog",
  title = "Related Articles",
  className,
}: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={cn("mb-16", className)}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <RelatedPostItem key={post.id} post={post} type={type} />
        ))}
      </div>
    </section>
  );
}

// Export a loading placeholder version
export function RelatedPostsSkeleton() {
  return (
    <section className="mb-16 animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-64 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
