import {
  blogPosts,
  getRelatedPosts,
  getSerializedContent,
} from "@/lib/blogposts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { SocialShare } from "@/components/blog/SocialShare";
import BlogContent from "@/components/blog/BlogContent";
import { Calendar, User } from "lucide-react";
import type { Metadata } from "next";

type PageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const serializedContent = await getSerializedContent(post.content);
  const relatedPosts = await getRelatedPosts(post);
  const postUrl = `https://webalora.com/blog/${params.slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] w-full">
        <Image
          src={post.featuredImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-purple-900" />

        <div className="absolute bottom-0 left-0 right-0 px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-lg">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">{post.publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 -mt-12 relative z-10">
        {/* Social Share */}
        <div className="mb-8">
          <SocialShare url={postUrl} title={post.title} />
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-16 lg:p-20 mb-12">
          <BlogContent serializedContent={serializedContent} />
        </div>

        {/* Tags */}
        <div className="mb-16">
          <h3 className="text-white text-lg font-semibold mb-4">
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="border-t border-white/10 pt-16 pb-24">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || "/placeholder.svg"],
    },
  };
}
