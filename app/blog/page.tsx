import BlogPage from "@/components/blog/BlogPage";
import { getBlogPosts, type BlogPost } from "@/lib/tina";

export default async function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams.page
    ? Number.parseInt(searchParams.page as string, 10)
    : 1;
  const search = (searchParams.search as string) || "";
  const category = (searchParams.category as string) || "";
  const postsPerPage = 9;

  let posts: BlogPost[] = await getBlogPosts();

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
