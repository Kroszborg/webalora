import { BlogGrid } from "./BlogGrid";
import { BlogHero } from "./BlogHero";
import { CategoryFilter } from "./CategoryFilter";
import { Pagination } from "./Pagination";

interface BlogPageProps {
  posts: BlogPost[];
  categories: string[];
  tags: { id: string; name: string }[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
}

export interface BlogPost {
  _sys: {
    filename: string;
    path: string;
  };
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishDate: string;
  Description: string;
  slug: string;
}

export default function BlogPage({
  posts,
  categories,
  totalPages,
  currentPage,
  searchQuery,
}: BlogPageProps) {
  console.log("BlogPage received posts:", posts);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHero />

      <div className="container mx-auto px-4 py-12">
        <div className="w-full">
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

          <div className="mt-12">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
