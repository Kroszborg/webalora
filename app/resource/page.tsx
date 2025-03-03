import BlogPage from "@/components/resource/BlogPage";
import {
  getResources,
  getAllResourceCategories,
} from "@/lib/db";
import { Metadata } from "next";
import { transformStrapiPosts } from "@/lib/data-transformers";

export const metadata: Metadata = {
  title: "Resources | WebAlora IT Knowledge Base & Insights",
  description:
    "Access WebAlora's comprehensive IT resource library. Find guides, white papers, and valuable insights to help your business leverage technology effectively.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Resource({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  // Process search parameters
  const page = searchParams?.page
    ? Number.parseInt(searchParams.page as string, 10)
    : 1;

  const search = searchParams?.search ? (searchParams.search as string) : "";

  const category = searchParams?.category
    ? (searchParams.category as string)
    : "";

  const postsPerPage = 9;

  // Await data fetching first
  const strapiPosts = await getResources();
  const allCategories = getAllResourceCategories();

  // Transform posts
  const posts = transformStrapiPosts(strapiPosts);

  // Filter data
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

  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).map(
    (tag, index) => ({
      id: `tag-${index}`,
      name: tag,
    })
  );

  return (
    <BlogPage
      posts={currentPosts}
      categories={allCategories}
      tags={tags}
      totalPages={totalPages}
      currentPage={page}
      searchQuery={search}
    />
  );
}
