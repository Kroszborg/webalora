// components/blog/BlogGrid.tsx
"use client";

import { BlogPostCard } from "./BlogPostCard";

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
  slug: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogPostCard key={post._sys.filename} post={post} />
      ))}
    </div>
  );
}
