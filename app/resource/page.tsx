import BlogPage from "@/components/resource/BlogPage";
import {
  getResources,
  getAllResourceCategories,
} from "@/lib/db";
import { Metadata } from "next";
import { transformStrapiPosts } from "@/lib/data-transformers";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "IT Resources & Guides | Technical Knowledge Base – WebAlora",
  description:
    "Access WebAlora's comprehensive IT resource library featuring practical guides, white papers, checklists, and valuable insights designed to help your business leverage technology effectively and securely.",
  path: "/resource",
  keywords: [
    "IT Resources",
    "Technology Guides",
    "IT Knowledge Base",
    "White Papers",
    "Technical Guides",
    "Business IT Resources",
    "Technology Best Practices",
    "IT Strategy",
  ],
  ogImage: "/images/resources/resources-og.jpg",
});


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
