// app/resource/[slug]/page.tsx
import { notFound } from "next/navigation";
import { RelatedPosts } from "@/components/resource/RelatedPosts";
import { SocialShare } from "@/components/resource/SocialShare";
import { ResourceContent } from "@/components/resource/ResourceContent";
import { Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import {
  getResourcePost,
  getRelatedResources,
  getImageUrl,
  getResourceCategory,
} from "@/lib/db";
import { ResourceImage } from "@/components/resource/ResourceImage";

type PageProps = {
  params: { slug: string };
};

export default async function ResourcePage({ params }: PageProps) {
  const decodedSlug = decodeURIComponent(params.slug);

  // Fetch the resource
  const strapiPost = await getResourcePost(decodedSlug);

  if (!strapiPost) {
    notFound();
  }

  // Debug output to help troubleshoot content issues
  console.log("*** RESOURCE DEBUG ***");
  console.log("Resource slug:", decodedSlug);
  console.log("Strapi Post content:", {
    exists: Boolean(strapiPost.content),
    length: strapiPost.content?.length || 0,
    preview: strapiPost.content?.substring(0, 100),
    type: typeof strapiPost.content,
  });

  // Use the helper function to get the category
  const categoryName = getResourceCategory(strapiPost);

  // Build the post object
  const post = {
    id: strapiPost.id.toString(),
    title: strapiPost.Title || "Untitled Resource",
    author: strapiPost.Author || "WebAlora Team",
    slug: strapiPost.slug,
    body: strapiPost.content || "",
    content: strapiPost.content || "",
    excerpt:
      strapiPost.Description ||
      (strapiPost.content ? strapiPost.content.substring(0, 160) + "..." : ""),
    Description: strapiPost.Description || "",
    featuredImage: getImageUrl(strapiPost.image),
    category: categoryName,
    publishDate:
      strapiPost.publishdate ||
      strapiPost.publishedAt ||
      new Date().toISOString(),
  };

  const postUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  }/resource/${decodedSlug}`;

  const relatedPosts = await getRelatedResources(decodedSlug);

  const transformedRelatedPosts = relatedPosts.map((relatedPost) => {
    return {
      id: relatedPost.id.toString(),
      title: relatedPost.Title,
      author: relatedPost.Author || "WebAlora Team",
      slug: relatedPost.slug,
      excerpt:
        relatedPost.Description ||
        (relatedPost.content
          ? relatedPost.content.substring(0, 160) + "..."
          : ""),
      Description: relatedPost.Description || "",
      featuredImage: getImageUrl(relatedPost.image),
      category: getResourceCategory(relatedPost),
      publishDate:
        relatedPost.publishdate ||
        relatedPost.publishedAt ||
        new Date().toISOString(),
      content: relatedPost.content || "",
      tags: [],
      _sys: {
        path: `/resource/${relatedPost.slug}`,
      },
    };
  });

  // Default fallback image
  const fallbackImage =
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <article className="max-w-4xl mx-auto px-4">
        {/* Category */}
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author and date */}
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

        {/* Featured image */}
        <div className="mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <ResourceImage
              src={post.featuredImage}
              fallbackSrc={fallbackImage}
              alt={post.title}
              fill
              className="object-cover"
              priority={true}
            />
          </div>
        </div>

        {/* Social share */}
        <SocialShare url={postUrl} title={post.title} />

        {/* Main content - simplified to match BlogContent approach */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <ResourceContent content={post.content} />
        </div>

        {/* Related posts */}
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
    title: `${strapiPost.Title} | WebAlora Resources`,
    description:
      strapiPost.Description ||
      (strapiPost.content
        ? strapiPost.content.substring(0, 160) + "..."
        : "WebAlora resources and insights"),
  };
}
