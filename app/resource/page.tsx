import BlogPage from "@/components/resource/BlogPage";
import { getResources, type StrapiPost, type BlogPost, getImageUrl } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Resource({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  const pageParam = searchParams?.page;
  const searchParam = searchParams?.search;
  const categoryParam = searchParams?.category;

  const page = pageParam ? Number.parseInt(pageParam as string, 10) : 1;
  const search = (searchParam as string) || "";
  const category = (categoryParam as string) || "";
  const postsPerPage = 9;

  console.log("Fetching resources...");
  const strapiPosts = await getResources();
  console.log("Received Strapi posts:", strapiPosts);
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://webaloracms-production-9e8b.up.railway.app';

  // Transform Strapi posts to match the BlogPost interface
  const posts: BlogPost[] = strapiPosts.map((post: StrapiPost) => ({
    _sys: {
      filename: post.slug,
      basename: post.slug,
      breadcrumbs: [post.slug],
      path: `/resource/${post.slug}`,
      relativePath: `resource/${post.slug}`,
      extension: 'md'
    },
    id: post.id.toString(),
    title: post.Title,
    author: post.Author || "Anonymous",
    slug: post.slug,
    body: post.content,
    content: post.content,
    excerpt: post.Description || post.content?.substring(0, 160) + "...",
    Description: post.Description || "",
    featuredImage: getImageUrl(post.image?.[0]?.url),
    category: post.blog_category?.Type || "General",
    tags: [],
    publishDate: post.publishdate || post.publishedAt
  }));

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

  const categories: string[] = Array.from(
    new Set(posts.map((post) => post.category))
  );

  const tags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).map((tag, index) => ({
    id: `tag-${index}`,
    name: tag,
  }));

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