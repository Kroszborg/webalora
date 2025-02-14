import { createClient } from "tinacms/dist/client"
import { queries } from "../tina/__generated__/types"

export const client = createClient({
  url:
    process.env.NODE_ENV === "production"
      ? `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${process.env.NEXT_PUBLIC_TINA_BRANCH}`
      : "http://localhost:4001/graphql",
  token: process.env.TINA_TOKEN,
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

// Updated type to exactly match TinaCMS generated type
type PostConnectionEdge = {
  __typename?: "PostConnectionEdges"
  cursor: string
  node?: {
    __typename: "Post"
    _sys: {
      filename: string
    }
    id: string
    title: string
    excerpt: string
    featuredImage?: string | null
    category: string
    publishDate: string
    body?: string | null
    author: string
    tags?: (string | null)[] | null
  } | null
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("Fetching blog posts...")
    const postsResponse = await client.queries.postConnection()
    console.log("Raw posts response:", postsResponse)

    if (!postsResponse.data?.postConnection?.edges) {
      console.error("No posts found in response")
      return []
    }

    const edges = postsResponse.data.postConnection.edges as PostConnectionEdge[]
    
    return edges
      .filter((edge): edge is PostConnectionEdge => 
        Boolean(edge?.node)
      )
      .map((edge) => {
        const node = edge.node!
        return {
          _sys: { filename: node._sys.filename },
          id: node.id,
          title: node.title ?? "",
          slug: node._sys.filename,
          excerpt: node.excerpt ?? "",
          featuredImage: node.featuredImage ?? "",
          category: node.category ?? "",
          publishDate: node.publishDate ?? "",
          body: node.body ?? "",
          author: node.author ?? "",
          tags: node.tags?.filter((tag): tag is string => 
            typeof tag === 'string'
          ) ?? [],
          content: node.body ?? "",
        }
      })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export async function getBlogPost(relativePath: string): Promise<BlogPost | null> {
  try {
    console.log("Fetching blog post:", relativePath)
    const postResponse = await client.queries.post({
      relativePath: `${relativePath}.md`,
    })
    console.log("Raw post response:", postResponse)

    const post = postResponse.data?.post
    if (!post) {
      console.error("Post not found:", relativePath)
      return null
    }

    return {
      _sys: { filename: post._sys.filename },
      id: post.id,
      title: post.title ?? "",
      slug: post._sys.filename,
      excerpt: post.excerpt ?? "",
      featuredImage: post.featuredImage ?? "",
      category: post.category ?? "",
      publishDate: post.publishDate ?? "",
      body: post.body ?? "",
      author: post.author ?? "",
      tags: post.tags?.filter((tag): tag is string => 
        typeof tag === 'string'
      ) ?? [],
      content: post.body ?? "",
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}