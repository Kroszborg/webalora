// lib/data-transformers.ts
import {
  type StrapiPost,
  type BlogPost,
  getImageUrl,
  getResourceCategory,
} from "@/lib/db";

export function transformStrapiPosts(strapiPosts: StrapiPost[]): BlogPost[] {
  return strapiPosts.map((post: StrapiPost) => {
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
}