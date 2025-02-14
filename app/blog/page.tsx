import BlogPage from "@/components/blog/BlogPage";
import { getBlogPosts, type BlogPost } from "@/lib/tina";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Blog({ searchParams }: { searchParams: any }) {
  const params = searchParams;
  const page = params.page ? Number.parseInt(params.page as string, 10) : 1;
  const search = (params.search as string) || "";
  const category = (params.category as string) || "";
  const postsPerPage = 9;

  console.log("Fetching blog posts in page.tsx...");
  let posts: BlogPost[] = await getBlogPosts();
  console.log("Retrieved posts:", posts);

  if (search) {
    posts = posts.filter(
      (post) =>
        post.title?.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(search.toLowerCase()) ||
        post.body?.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    posts = posts.filter((post) => post.category === category);
  }

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  );
  const tags = Array.from(
    new Set(posts.flatMap((post) => post.tags || []))
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
