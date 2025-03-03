"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogPage from "@/components/blog/BlogPage";
import { prefetchBlogPost } from "@/lib/hooks/useBlogData";

interface BlogClientContentProps {
  posts: { title: string; content: string; slug: string; category: string; _sys: { filename: string }; excerpt: string; featuredImage: string; publishDate: string; Description: string }[];
  categories: string[];
  tags: { id: string; name: string }[];
}

export default function BlogClientContent({
  posts,
  categories,
  tags,
}: BlogClientContentProps) {
  // Get search params the client-side way
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const postsPerPage = 9;

  // Important: Prefetch blog posts for faster navigation
  useEffect(() => {
    if (posts && Array.isArray(posts) && posts.length > 0) {
      const postsToPreload = posts.slice(0, 5);
      postsToPreload.forEach((post) => {
        if (post && post.slug) {
          prefetchBlogPost(post.slug);
        }
      });
    }
  }, [posts]);

  let filteredPosts = [...posts];

  // Apply search filter if provided
  if (search) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply category filter if provided - use case-insensitive comparison
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

  return (
    <BlogPage
      posts={currentPosts}
      categories={categories}
      tags={tags}
      totalPages={totalPages}
      currentPage={page}
      searchQuery={search}
    />
  );
}
