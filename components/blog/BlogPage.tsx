import { BlogHero } from "./BlogHero";
import { BlogGrid } from "./BlogGrid";
import { CategoryFilter } from "./CategoryFilter";
import { Newsletter } from "./Newsletter";
import { PopularTags } from "./PopularTags";
import { Pagination } from "./Pagination";
import type { BlogPost } from "@/lib/blogposts";

interface Tag {
  id: string;
  name: string;
}

interface BlogPageProps {
  posts: BlogPost[];
  categories: string[];
  tags: Tag[];
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHero />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            {searchQuery && (
              <h2 className="text-2xl font-bold mb-4">
                Search results for: {searchQuery}
              </h2>
            )}
            <CategoryFilter categories={categories} />
            <BlogGrid posts={posts} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
          <div className="lg:w-1/4 space-y-8">
            <Newsletter />
            <PopularTags tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
