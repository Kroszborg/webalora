import type { BlogPost } from "@/lib/tina";
import {BlogGrid} from "./BlogGrid";
import {BlogHero} from "./BlogHero";
import {CategoryFilter} from "./CategoryFilter";
import {Newsletter} from "./Newsletter";
import {Pagination} from "./Pagination";
import {PopularTags} from "./PopularTags";

interface BlogPageProps {
  posts: BlogPost[];
  categories: string[];
  tags: { id: string; name: string }[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
}

export default function BlogPage({
  posts,
  categories,
  tags,
  totalPages,
  currentPage,
  searchQuery,
}: BlogPageProps) {
  console.log("BlogPage received posts:", posts);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <CategoryFilter categories={categories} />
            {posts.length > 0 ? (
              <BlogGrid posts={posts} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  No posts found
                </h3>
                <p className="text-gray-600 mt-2">
                  {searchQuery
                    ? "Try adjusting your search criteria"
                    : "Check back soon for new content"}
                </p>
              </div>
            )}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
          <div className="space-y-8">
            <PopularTags tags={tags} />
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
}
