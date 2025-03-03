"use client";
import { Suspense } from "react";
import { useBlogPosts } from "@/lib/hooks/useBlogData";
import { getImageUrl } from "@/lib/db";
import { LoadingFallback } from "@/components/loading";
import type { StrapiPost } from "@/lib/db";
import BlogClientContent from "@/components/blog/BlogClientContent";

export default function Blog() {
  // Use the cached data hook
  const { posts: strapiPosts, isLoading } = useBlogPosts();

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
    <Suspense fallback={<LoadingFallback />}>
      <BlogClientContent posts={posts} categories={categories} tags={tags} />
    </Suspense>
  );
}
