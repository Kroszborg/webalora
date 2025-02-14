import { createClient } from "tinacms/dist/client"
import { queries } from "../tina/__generated__/types"

export const client = createClient({
  url:
    process.env.NODE_ENV === "production"
      ? `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${process.env.NEXT_PUBLIC_TINA_BRANCH}`
      : "http://localhost:4001/graphql",
  token: process.env.TINA_TOKEN!,
  queries,
})

export interface BlogPost {
  _sys: {
    filename: string
  }
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  category: string
  publishDate: string
  body: string
  author: string
  tags: string[]
  content: string
}

type PostNode = {
  _sys: {
    filename: string
  }
  title?: string
  excerpt?: string
  featuredImage?: string
  category?: string
  publishDate?: string
  body?: string
  author?: string
  tags?: string[]
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsResponse = await client.queries.postConnection()
  return (
    postsResponse.data.postConnection.edges?.map((edge) => {
      const node = edge?.node as PostNode
      return {
        _sys: { filename: node._sys.filename },
        id: node._sys.filename,
        title: node.title ?? "",
        slug: node._sys.filename,
        excerpt: node.excerpt ?? "",
        featuredImage: node.featuredImage ?? "",
        category: node.category ?? "",
        publishDate: node.publishDate ?? "",
        body: node.body ?? "",
        author: node.author ?? "",
        tags: node.tags ?? [],
        content: node.body ?? "",
      } as BlogPost
    }) ?? []
  )
}

export async function getBlogPost(relativePath: string): Promise<BlogPost | null> {
  const postResponse = await client.queries.post({
    relativePath: `${relativePath}.md`,
  })
  const post = postResponse.data.post as PostNode | null
  if (!post) {
    return null
  }

  return {
    _sys: { filename: post._sys.filename },
    id: post._sys.filename,
    title: post.title ?? "",
    slug: post._sys.filename,
    excerpt: post.excerpt ?? "",
    featuredImage: post.featuredImage ?? "",
    category: post.category ?? "",
    publishDate: post.publishDate ?? "",
    body: post.body ?? "",
    author: post.author ?? "",
    tags: post.tags ?? [],
    content: post.body ?? "",
  } as BlogPost
}

