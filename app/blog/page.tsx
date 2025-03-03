// app/blog/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogPage from "@/components/blog/BlogPage";
import { useBlogPosts, prefetchBlogPost } from "@/lib/hooks/useBlogData";
import { getImageUrl } from "@/lib/db";
import { LoadingFallback } from "@/components/loading";
import type { StrapiPost } from "@/lib/db";

export default function Blog() {
  // Get search params the client-side way
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const postsPerPage = 9;

  // Use the cached data hook
  const { posts: strapiPosts, isLoading } = useBlogPosts();

  // Important: Place useEffect before any conditional returns
  useEffect(() => {
    if (strapiPosts && Array.isArray(strapiPosts) && strapiPosts.length > 0) {
      const postsToPreload = strapiPosts.slice(0, 5);
      postsToPreload.forEach((post) => {
        if (post && post.slug) {
          prefetchBlogPost(post.slug);
        }
      });
    }
  }, [strapiPosts]);

  // After the hook, we can add conditional returns
  if (isLoading) {
    return <LoadingFallback />;
  }

  if (!Array.isArray(strapiPosts)) {
    return <div>Error loading blog posts</div>;
  }

  // Transform Strapi posts to match the BlogPost interface
  const posts = strapiPosts.map((post: StrapiPost) => {
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
      body: post.content,
      content: post.content,
      excerpt: post.Description || post.content?.substring(0, 160) + "...",
      Description: post.Description || "",
      featuredImage,
      category: post.blog_category?.Type || "General",
      tags: [] as string[],
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

  // Get unique categories for the filter
  const categories: string[] = Array.from(
    new Set(posts.map((post) => post.category))
  );

  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).map(
    (tag: string, index) => ({
      id: `tag-${index}`,
      name: tag,
    })
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
