import { blogPosts, searchPosts } from "@/lib/blogposts";
import BlogPage from "@/components/blog/BlogPage";

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

  let filteredPosts = search ? searchPosts(search) : blogPosts;
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );
  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map(
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
