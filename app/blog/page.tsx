import BlogPage from "@/components/blog/BlogPage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface StrapiBlog {
  id: number;
  documentId: string;
  Title: string;
  Author: string;
  slug: string;
  content: string;
  publishdate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse {
  data: StrapiBlog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface BlogPost {
  _sys: {
    filename: string;
    basename: string;
    breadcrumbs: string[];
    path: string;
    relativePath: string;
    extension: string;
  };
  id: string;
  title: string;
  author: string;
  slug: string;
  body: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  tags: string[];
  publishDate: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching blogs...');
    const response = await fetch('http://127.0.0.1:1337/api/blogs', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StrapiResponse = await response.json();
    console.log('Received data:', data);

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid data format received');
    }

    console.log('Blogs fetched:', data.data.length, 'items');

    return data.data.map(post => ({
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
      author: post.Author,
      slug: post.slug,
      body: post.content,
      content: post.content,
      excerpt: post.content.substring(0, 160) + '...',
      featuredImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
      category: 'General',
      tags: [],
      publishDate: post.publishdate
    }));
  } catch (error) {
    console.error('Detailed error:', error);
    return [];
  }
}

export default async function Blog({ 
  searchParams 
}: { 
  searchParams: Record<string, string | string[]> 
}) {
  const pageParam = searchParams?.page;
  const searchParam = searchParams?.search;
  const categoryParam = searchParams?.category;

  const page = pageParam ? Number.parseInt(pageParam as string, 10) : 1;
  const search = (searchParam as string) || "";
  const category = (categoryParam as string) || "";
  const postsPerPage = 9;

  let posts = await getBlogPosts();

  if (search) {
    posts = posts.filter(
      (post) =>
        post.title?.toLowerCase().includes(search.toLowerCase()) ||
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
