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

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const serializedContent = await getSerializedContent(post.content);
  const relatedPosts = await getRelatedPosts(post);
  const postUrl = `https://webalora.com/blog/${params.slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 pt-24">
      <article className="max-w-4xl mx-auto px-4">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-6 mb-8 text-white">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.publishDate}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Social Share */}
        <SocialShare url={postUrl} title={post.title} />

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <BlogContent serializedContent={serializedContent} />
        </div>

        {/* Tags */}
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

        {/* Related Posts */}
        <div className="border-t border-gray-100 pt-12">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </article>
    </div>
  );
}
