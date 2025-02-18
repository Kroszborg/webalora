import { notFound } from "next/navigation";
import Image from "next/image";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { SocialShare } from "@/components/blog/SocialShare";
import BlogContent from "@/components/blog/BlogContent";
import { Calendar, User } from "lucide-react";
import type { Metadata } from "next";

interface StrapiBlog {
  id: number;
  documentId: string;
  Title: string;
  Author: string;
  slug: string;
  content: string;
  publishdate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse {
  data: StrapiBlog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

async function getBlogPost(slug: string) {
  try {
    const response = await fetch(`http://127.0.0.1:1337/api/blogs?filters[slug][$eq]=${slug}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    
    if (!data.data || data.data.length === 0) {
      return null;
    }

    const post = data.data[0];
    
    return {
      id: post.id.toString(),
      title: post.Title,
      author: post.Author,
      slug: post.slug,
      body: post.content,
      content: post.content,
      excerpt: post.content.substring(0, 160) + '...',
      featuredImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
      category: 'General',
      publishDate: post.publishdate,
      tags: []
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

async function getRelatedPosts(currentSlug: string) {
  try {
    const response = await fetch('http://127.0.0.1:1337/api/blogs', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    
    return data.data
      .filter(post => post.slug !== currentSlug)
      .slice(0, 3)
      .map(post => ({
        id: post.id.toString(),
        title: post.Title,
        author: post.Author,
        slug: post.slug,
        content: post.content,
        excerpt: post.content.substring(0, 160) + '...',
        featuredImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
        category: 'General',
        publishDate: post.publishdate,
        tags: []
      }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

type PageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://webalora.com/blog/${params.slug}`;
  const relatedPosts = await getRelatedPosts(params.slug);

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
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <SocialShare url={postUrl} title={post.title} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <BlogContent content={post.body} />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-100 pt-12">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </article>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}