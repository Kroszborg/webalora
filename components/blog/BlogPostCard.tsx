// components/blog/BlogPostCard.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { prefetchBlogPost } from "@/lib/hooks/useBlogData";

interface BlogPostCardProps {
  post: {
    _sys: {
      filename: string;
      path?: string;
    };
    title: string;
    featuredImage: string;
    category: string;
    publishDate: string;
    slug: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const fallbackImage =
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";
  const [imageError, setImageError] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Prefetch this post's data when the user hovers
    if (typeof prefetchBlogPost === "function") {
      prefetchBlogPost(post.slug);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Use fallback if there's an error or if featuredImage is empty
  const imageSource =
    imageError || !post.featuredImage ? fallbackImage : post.featuredImage;

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/blog/${post.slug}`} prefetch={isHovered}>
        <div className="relative h-48 sm:h-56 md:h-64">
          <Image
            src={imageSource}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-300 ${
              isHovered ? "scale-105" : ""
            }`}
            onError={handleImageError}
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {new Date(post.publishDate).toLocaleDateString()}
            </span>
            <span
              className={`text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-300`}
            >
              Read More
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
