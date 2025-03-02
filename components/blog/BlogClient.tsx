"use client";
import { useEffect, useState } from "react";
import BlogPage from "@/components/blog/BlogPage";
import { useCmsData } from "@/components/CmsDataProvider";
import { LoadingFallback } from "@/components/loading";
import { getImageUrl } from "@/lib/db";

// Update the BlogPost interface based on the one from BlogPage component
// and add the missing properties
export interface BlogPost {
  _sys: {
    filename: string;
    basename: string;
    breadcrumbs: string[];
    path: string;
    relativePath: string;
    extension: string;
  };
  id: string;
  title: string;
  author: string;
  slug: string;
  content: string; // This exists in the API response
  excerpt: string;
  featuredImage: string;
  category: string;
  tags: string[]; // Add this missing property
  publishDate: string;
  Description: string;
}

export default function BlogClient({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  const { blogPosts, loading } = useCmsData();
  const [processedData, setProcessedData] = useState<{
    currentPosts: BlogPost[];
    categories: string[];
    tags: { id: string; name: string }[];
    totalPages: number;
    currentPage: number;
    searchQuery: string;
  } | null>(null);

  useEffect(() => {
    // Only process data when blog posts are loaded
    if (!blogPosts.length && !loading) {
      return;
    }

    const pageParam = searchParams?.page;
    const searchParam = searchParams?.search;
    const categoryParam = searchParams?.category;
    const page = pageParam ? Number.parseInt(pageParam as string, 10) : 1;
    const search = (searchParam as string) || "";
    const category = (categoryParam as string) || "";
    const postsPerPage = 9;

    // Transform Strapi posts to match the BlogPost interface
    const posts: BlogPost[] = blogPosts.map((post) => {
      const featuredImage = getImageUrl(post.image);
      return {
        _sys: {
          filename: post.slug,
          basename: post.slug,
          breadcrumbs: [post.slug],
          path: `/blog/${post.slug}`,
          relativePath: `blog/${post.slug}`,
          extension: "md",
        },
        id: post.id.toString(),
        title: post.Title,
        author: post.Author || "Anonymous",
        slug: post.slug,
        content: post.content,
        excerpt: post.Description || post.content?.substring(0, 160) + "...",
        Description: post.Description || "",
        featuredImage,
        category: post.blog_category?.Type || "General",
        tags: [], // Initialize with empty array, could be populated from API data if available
        publishDate: post.publishdate || post.publishedAt,
      };
    });

    let filteredPosts = [...posts];

    // Apply search filter if provided
    if (search) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter if provided and not "All"
    if (category && category !== "All") {
      filteredPosts = filteredPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      );
    }

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const currentPosts = filteredPosts.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage
    );

    const categories: string[] = Array.from(
      new Set(posts.map((post) => post.category))
    );

    const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).map(
      (tag, index) => ({
        id: `tag-${index}`,
        name: tag,
      })
    );

    setProcessedData({
      currentPosts,
      categories,
      tags,
      totalPages,
      currentPage: page,
      searchQuery: search,
    });
  }, [blogPosts, searchParams, loading]);

  if (loading || !processedData) {
    return <LoadingFallback />;
  }

  return (
    <BlogPage
      posts={processedData.currentPosts}
      categories={processedData.categories}
      tags={processedData.tags}
      totalPages={processedData.totalPages}
      currentPage={processedData.currentPage}
      searchQuery={processedData.searchQuery}
    />
  );
}
