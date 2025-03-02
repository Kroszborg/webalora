"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Initialize activeCategory from URL or default to "All"
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  // Update activeCategory when URL changes
  useEffect(() => {
    setActiveCategory(categoryParam || "All");
  }, [categoryParam]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    // Preserve existing search parameters
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
      params.delete("page"); // Reset to first page when changing category
      router.push(params.toString() ? `/blog?${params.toString()}` : "/blog");
    } else {
      params.set("category", category);
      params.delete("page"); // Reset to first page when changing category
      router.push(`/blog?${params.toString()}`);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          onClick={() => handleCategoryChange("All")}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
