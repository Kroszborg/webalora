import React from "react";
import { notFound } from "next/navigation";
import { SocialShare } from "@/components/blog/SocialShare";
import BlogContent from "@/components/blog/BlogContent";
import { Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import { getBlogPost, getRelatedPosts, getImageUrl } from "@/lib/db";
import { Suspense } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

type PageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: PageProps) {
  const strapiPost = await getBlogPost(params.slug);

  if (!strapiPost) {
    notFound();
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
  }/blog/${params.slug}`;

  // Start fetching related posts but don't wait for them
  const relatedPostsPromise = getRelatedPosts(params.slug).then(posts =>
    posts.map(post => ({
      ...post,
      id: post.id.toString(),
      Description: post.Description || undefined,
      image: getImageUrl(post.image),
    }))
  );

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

        <Suspense
          fallback={
            <div className="border-t border-gray-100 pt-12 animate-pulse h-48"></div>
          }
        >
          <RelatedPostsSection
            slug={params.slug}
            relatedPostsPromise={relatedPostsPromise}
          />
        </Suspense>
      </article>
    </div>
  );
}

// Separate component for related posts to leverage Suspense
async function RelatedPostsSection({
  relatedPostsPromise,
}: {
  slug: string;
  relatedPostsPromise: Promise<{
    id: string;
    Title: string;
    Author?: string;
    slug: string;
    Description?: string;
    content: string;
    image: string;
    blog_category?: { Type: string };
    publishdate?: string;
    publishedAt?: string;
  }[]>;
}) {
  const relatedPosts = await relatedPostsPromise;

  const transformedRelatedPosts = relatedPosts.map((relatedPost) => ({
    id: relatedPost.id.toString(),
    title: relatedPost.Title,
    author: relatedPost.Author || "Anonymous",
    slug: relatedPost.slug,
    excerpt:
      relatedPost.Description || relatedPost.content.substring(0, 160) + "...",
    Description: relatedPost.Description || "",
    featuredImage: getImageUrl(relatedPost.image),
    category: relatedPost.blog_category?.Type || "General",
    publishDate: relatedPost.publishdate || relatedPost.publishedAt || "",
    content: relatedPost.content,
    tags: [],
  }));

  if (!transformedRelatedPosts.length) return null;

  return (
    <div className="border-t border-gray-100 pt-12">
      <RelatedPosts posts={transformedRelatedPosts} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const strapiPost = await getBlogPost(params.slug);

  if (!strapiPost) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: strapiPost.Title,
    description:
      strapiPost.Description || strapiPost.content.substring(0, 160) + "...",
  };
}
