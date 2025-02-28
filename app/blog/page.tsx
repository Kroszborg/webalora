import BlogPage from "@/components/blog/BlogPage";
import {
  getBlogPosts,
  type StrapiPost,
  type BlogPost,
  getImageUrl,
} from "@/lib/db";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebAlora Blog | IT Insights, Trends & Expert Advice",
  description:
    "Stay updated with WebAlora's blog. Get expert insights on IT trends, cybersecurity, cloud computing, and technology best practices for businesses.",
};

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

  // console.log("Fetching blog posts...");
  const strapiPosts = await getBlogPosts();
  // console.log("Received Strapi posts:", strapiPosts.length);

  // Debug: Log the first post's image structure
  // if (strapiPosts.length > 0) {
  //   console.log(
  //     "First post image structure:",
  //     JSON.stringify(strapiPosts[0].image, null, 2)
  //   );
  // }

  // Transform Strapi posts to match the BlogPost interface
  const posts: BlogPost[] = strapiPosts.map((post: StrapiPost) => {
    const featuredImage = getImageUrl(post.image);
    // console.log(`Post ${post.slug} featured image URL:`, featuredImage);

    return {
      _sys: {
        filename: post.slug,
        basename: post.slug,
        breadcrumbs: [post.slug],
        path: `/blog/${post.slug}`,
        relativePath: `blog/${post.slug}`,
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
      category: post.blog_category?.Type || "General",
      tags: [],
      publishDate: post.publishdate || post.publishedAt,
    };
  });

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
