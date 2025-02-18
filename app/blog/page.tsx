import BlogPage from "@/components/blog/BlogPage";
import { getBlogPosts, type StrapiPost, type BlogPost } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Blog({
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

  console.log("Fetching blog posts...");
  const strapiPosts = await getBlogPosts();
  console.log("Received Strapi posts:", strapiPosts);

  // Transform Strapi posts to match the BlogPost interface
  const posts: BlogPost[] = strapiPosts.map((post: StrapiPost) => ({
    _sys: {
      filename: post.slug,
      basename: post.slug,
      breadcrumbs: [post.slug],
      path: `/blog/${post.slug}`,
      relativePath: `blog/${post.slug}`,
      extension: 'md'
    },
    id: post.id.toString(),
    title: post.Title,
    author: post.Author || "Anonymous",
    slug: post.slug,
    body: post.content,
    content: post.content,
    excerpt: post.content?.substring(0, 160) + "..." || "",
    featuredImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    category: "General",
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