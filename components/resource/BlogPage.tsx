"use client";

import { useState, useEffect } from "react";
import { BlogGrid } from "./BlogGrid";
import { BlogHero } from "./BlogHero";
import { Pagination } from "./Pagination";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface BlogPageProps {
  posts: BlogPost[];
  categories: string[];
  tags: { id: string; name: string }[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
}

export interface BlogPost {
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

export default function BlogPage({
  posts,
  categories,
  totalPages,
  currentPage,
  searchQuery,
}: BlogPageProps) {
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (category === "") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    
    // Reset to page 1 when changing category
    params.set("page", "1");
    
    router.push(`/resource?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHero />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Resources
          </h1>
          
          <Button
            variant="outline"
            className="flex items-center gap-2 md:self-end"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {showFilters && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={currentCategory === "" ? "default" : "outline"}
                className="text-sm"
                onClick={() => handleCategoryClick("")}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={currentCategory === category ? "default" : "outline"}
                  className="text-sm"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="w-full">
          {posts.length > 0 ? (
            <BlogGrid posts={posts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900">
                No posts found
              </h3>
              <p className="text-gray-600 mt-2">
                {searchQuery
                  ? "Try adjusting your search criteria"
                  : "Check back soon for new content"}
              </p>
            </div>
          )}

          <div className="mt-12">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
