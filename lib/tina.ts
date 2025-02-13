import { createClient, type TinaClient } from "tinacms/dist/client"
import { queries } from "../tina/__generated__/types"

export const client = createClient({
  url: process.env.NEXT_PUBLIC_TINA_BRANCH || "master",
  token: process.env.TINA_TOKEN!,
  queries,
}) as TinaClient<typeof queries>

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

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsResponse = await client.queries.postConnection()
  return (
    postsResponse.data.postConnection.edges?.map((edge: any) => {
      const node = edge?.node
      return {
        _sys: { filename: node?._sys.filename },
        id: node?._sys.filename,
        title: node?.title ?? "",
        slug: node?._sys.filename,
        excerpt: node?.excerpt ?? "",
        featuredImage: node?.featuredImage ?? "",
        category: node?.category ?? "",
        publishDate: node?.publishDate ?? "",
        body: node?.body ?? "",
        author: node?.author ?? "",
        tags: node?.tags ?? [],
        content: node?.body ?? "",
      } as BlogPost
    }) ?? []
  )
}

export async function getBlogPost(relativePath: string): Promise<BlogPost | null> {
  const postResponse = await client.queries.post({
    relativePath: `${relativePath}.md`,
  })
  const post = postResponse.data.post
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

