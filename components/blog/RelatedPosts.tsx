import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogposts";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  // Default fallback image
  const fallbackImage = "/placeholder.svg";

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg "
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.featuredImage || fallbackImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {typeof post.publishDate === "string"
                    ? new Date(post.publishDate).toLocaleDateString()
                    : "Unknown date"}
                </span>
                <span className="text-blue-600 flex items-center text-sm font-medium">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
