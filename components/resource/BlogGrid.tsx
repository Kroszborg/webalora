"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResourceImage } from "./ResourceImage";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  _sys: {
    filename: string;
    path: string;
  };
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishDate: string;
  Description: string;
  slug: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

// Add new constant for categories
const RESOURCE_CATEGORIES = [
  { id: "all", name: "All Categories" },
  { id: "1", name: "Backup & Disaster Recovery" },
  { id: "3", name: "Cloud Solutions & Migration" },
  { id: "5", name: "Cybersecurity Solutions" },
  { id: "7", name: "IT Consultancy & Strategy" },
  { id: "9", name: "Managed IT Services" },
  { id: "11", name: "Network Infrastructure" },
  { id: "13", name: "VOIP Solutions" }
];

export function BlogGrid({ posts }: BlogGridProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div
          key={post._sys.filename}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
          <Link href={post._sys.path || `/resource/${post.slug}`}>
            <div className="relative h-48 sm:h-56 md:h-64">
              <ResourceImage
                src={post.featuredImage}
                fallbackSrc={fallbackImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={false}
              />
            </div>
            <div className="p-6">
              {post.category && (
                <Badge variant="outline" className="mb-2">
                  {post.category}
                </Badge>
              )}
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
      ))}
    </div>
  );
}
