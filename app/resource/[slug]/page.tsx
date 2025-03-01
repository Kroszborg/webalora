import { notFound } from "next/navigation";
import Image from "next/image";
import { RelatedPosts } from "@/components/resource/RelatedPosts";
import { SocialShare } from "@/components/resource/SocialShare";
import BlogContent from "@/components/blog/BlogContent";
import { Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import { getImageUrl } from "@/lib/db";

// Update the getResourcePost function to fetch data from the API endpoint
async function getResourcePost(slug: string) {
  const res = await fetch(`https://webaloracms-production-9e8b.up.railway.app/api/resources/?populate=*&filters[slug][$eq]=${slug}`);
  const data = await res.json();
  return data.data[0];
}

// Update the getRelatedResources function to fetch related resources
async function getRelatedResources(slug: string) {
  const res = await fetch(`https://webaloracms-production-9e8b.up.railway.app/api/resources/?populate=*`);
  const data = await res.json();
  return data.data.filter((post) => post.slug !== slug);
}

type PageProps = {
  params: { slug: string };
};

export default async function ResourcePage({ params }: PageProps) {
  const decodedSlug = decodeURIComponent(params.slug);
  const strapiPost = await getResourcePost(decodedSlug);

  if (!strapiPost) {
    notFound();
  }

  const post = {
    id: strapiPost.id.toString(),
    title: strapiPost.Title,
    author: strapiPost.Author,
    slug: strapiPost.slug,
    body: strapiPost.Content,
    content: strapiPost.Content,
    excerpt: strapiPost.Description || strapiPost.Content.substring(0, 160) + "...",
    Description: strapiPost.Description || "",
    featuredImage: getImageUrl(strapiPost.image?.[0]?.url),
    category: strapiPost.resource_category?.Type || "General",
    publishDate: strapiPost.publishdate || strapiPost.publishedAt,
  };

  const postUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/resource/${decodedSlug}`;
  const relatedPosts = await getRelatedResources(decodedSlug);

  const transformedRelatedPosts = relatedPosts.map((relatedPost) => ({
    id: relatedPost.id.toString(),
    title: relatedPost.Title,
    author: relatedPost.Author,
    slug: relatedPost.slug,
    excerpt: relatedPost.Description || relatedPost.Content.substring(0, 160) + "...",
    Description: relatedPost.Description || "",
    featuredImage: getImageUrl(relatedPost.image?.[0]?.url),
    category: relatedPost.resource_category?.Type || "General",
    publishDate: relatedPost.publishdate || relatedPost.publishedAt,
    content: relatedPost.Content,
    tags: [],
    _sys: {
      path: `/resource/${relatedPost.slug}`
    }
  }));

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
              src={post.featuredImage}
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

        {transformedRelatedPosts.length > 0 && (
          <div className="border-t border-gray-100 pt-12">
            <RelatedPosts posts={transformedRelatedPosts} />
          </div>
        )}
      </article>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug);
  const strapiPost = await getResourcePost(decodedSlug);

  if (!strapiPost) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: strapiPost.Title,
    description: strapiPost.Description || 
      (strapiPost.Content ? strapiPost.Content.substring(0, 160) + "..." : ""),
  };
}
