// app/blog/[slug]/page.tsx
"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { SocialShare } from "@/components/blog/SocialShare";
import BlogContent from "@/components/blog/BlogContent";
import { Calendar, User } from "lucide-react";
import { useBlogPost, useBlogPosts, prefetchBlogPosts } from "@/lib/hooks/useBlogData";
import { getImageUrl } from "@/lib/db";
import { OptimizedImage } from "@/components/OptimizedImage";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { LoadingFallback } from "@/components/loading";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Use cached data hook
  const { post: strapiPost, isLoading, isError } = useBlogPost(slug);

  // Prefetch blog posts listing when viewing a detail page for faster "back" navigation
  useEffect(() => {
    prefetchBlogPosts();
  }, []);

  // Handle loading and error states
  if (isLoading) {
    return <LoadingFallback />;
  }

  if (isError || !strapiPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <button
          onClick={() => router.push("/blog")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const post = {
    id: strapiPost.id.toString(),
    title: strapiPost.Title,
    author: strapiPost.Author || "Anonymous",
    slug: strapiPost.slug,
    body: strapiPost.content,
    content: strapiPost.content,
    excerpt:
      strapiPost.Description || strapiPost.content.substring(0, 160) + "...",
    Description: strapiPost.Description || "",
    featuredImage: getImageUrl(strapiPost.image),
    category: strapiPost.blog_category?.Type || "General",
    publishDate: strapiPost.publishdate || strapiPost.publishedAt,
  };

  const postUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/blog/${slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <article className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <OptimizedImage
              src={post.featuredImage}
              fallbackSrc="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        <SocialShare url={postUrl} title={post.title} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <BlogContent content={post.body} />
        </div>

        {/* We'll simplify related posts for now - can add back the async behavior */}
        <ClientRelatedPosts slug={slug} />
      </article>
    </div>
  );
}

// Client-side related posts component
function ClientRelatedPosts({ slug }: { slug: string }) {
  const { posts, isLoading } = useBlogPosts();

  if (isLoading || !Array.isArray(posts) || !posts.length) {
    return (
      <div className="border-t border-gray-100 pt-12 animate-pulse h-48"></div>
    );
  }

  // Get 3 related posts
  const relatedPosts = posts
    .filter((post) => post.slug !== slug)
    .slice(0, 3)
    .map((post) => ({
      id: post.id.toString(),
      title: post.Title,
      author: post.Author || "Anonymous",
      slug: post.slug,
      excerpt: post.Description || post.content.substring(0, 160) + "...",
      Description: post.Description || "",
      featuredImage: getImageUrl(post.image),
      category: post.blog_category?.Type || "General",
      publishDate: post.publishdate || post.publishedAt || "",
      content: post.content,
      tags: [],
    }));

  if (!relatedPosts.length) return null;

  return (
    <div className="border-t border-gray-100 pt-12">
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}
