"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  _sys: {
    filename: string;
  };
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishDate: string;
  Description: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  // Default fallback image using direct Unsplash link
  const fallbackImage =
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";

  // State to track image loading errors
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (postId: string) => {
    console.error(
      `Failed to load image for post: ${postId}`,
      posts.find((p) => p._sys.filename === postId)?.featuredImage
    );
    setImageErrors((prev) => ({
      ...prev,
      [postId]: true,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        // Use fallback if there's an error or if featuredImage is empty
        const imageSource =
          imageErrors[post._sys.filename] || !post.featuredImage
            ? fallbackImage
            : post.featuredImage;

        return (
          <div
            key={post._sys.filename}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <Link href={`/blog/${post._sys.filename}`}>
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={imageSource}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onError={() => handleImageError(post._sys.filename)}
                  unoptimized={true} // Skip Next.js image optimization
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.Description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                  <span className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
