// app/resource/ResourcePageContent.tsx
import { use } from "react";
import BlogPage from "@/components/resource/BlogPage";
import {
  getResources,
  type StrapiPost,
  type BlogPost,
  getImageUrl,
  getResourceCategory,
  getAllResourceCategories,
} from "@/lib/db";

export default function ResourcePageContent({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  // Access searchParams directly here, it will be correctly awaited by Next.js
  const pageParam = searchParams?.page;
  const searchParam = searchParams?.search;
  const categoryParam = searchParams?.category;

  // Process the data
  const page = pageParam ? Number.parseInt(pageParam as string, 10) : 1;
  const search = (searchParam as string) || "";
  const category = (categoryParam as string) || "";
  const postsPerPage = 9;

  // Get all resources data (use it to wrap in a proper NextJS async data fetching pattern)
  const resourcesData = use(getResourcesData());

  // Use derived data (all of this is now synchronous after the async operation)
  const { posts, allCategories } = resourcesData;

  let filteredPosts = [...posts];

  if (search) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category && category !== "All") {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  // Use all possible categories instead of just the ones that appear in posts
  const categories = allCategories;

  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).map(
    (tag, index) => ({
      id: `tag-${index}`,
      name: tag,
    })
  );

  return (
    <BlogPage
      posts={currentPosts}
      categories={categories}
      tags={tags}
      totalPages={totalPages}
      currentPage={page}
      searchQuery={search}
    />
  );
}

// Helper function to fetch and process resources data
async function getResourcesData() {
  // Fetch resources
  const strapiPosts = await getResources();

  // Get all possible categories
  const allCategories = getAllResourceCategories();

  // Transform Strapi posts to match the BlogPost interface
  const posts: BlogPost[] = strapiPosts.map((post: StrapiPost) => {
    // Get image URL
    const featuredImage = getImageUrl(post.image);

    // Get resource category using the helper function
    const categoryName = getResourceCategory(post);

    return {
      _sys: {
        filename: post.slug,
        basename: post.slug,
        breadcrumbs: [post.slug],
        path: `/resource/${post.slug}`,
        relativePath: `resource/${post.slug}`,
        extension: "md",
      },
      id: post.id.toString(),
      title: post.Title,
      author: post.Author || "Anonymous",
      slug: post.slug,
      body: post.content,
      content: post.content,
      excerpt: post.Description || post.content?.substring(0, 160) + "...",
      Description: post.Description || "",
      featuredImage,
      category: categoryName,
      tags: [],
      publishDate: post.publishdate || post.publishedAt,
    };
  });

  return { posts, allCategories };
}
