import { BlogHero } from "./BlogHero";
import { FeaturedPosts } from "./FeaturedPosts";
import { BlogGrid } from "./BlogGrid";
import { CategoryFilter } from "./CategoryFilter";
import { Newsletter } from "./Newsletter";
import { PopularTags } from "./PopularTags";

export function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHero />
      <FeaturedPosts />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <CategoryFilter />
            <BlogGrid />
          </div>
          <div className="lg:w-1/4 space-y-8">
            <Newsletter />
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
}
