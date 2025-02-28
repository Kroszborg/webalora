"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();
  const pathname = usePathname();

  // Determine if we're in the resource section
  const isResourcePage = pathname.startsWith("/resource");
  const basePath = isResourcePage ? "/resource" : "/blog";

  // When the component mounts, check URL parameters to set the active category
  useEffect(() => {
    // Extract category from the URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      router.push(basePath); // Go to the resource or blog base path
    } else {
      router.push(`${basePath}?category=${encodeURIComponent(category)}`);
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
