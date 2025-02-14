import { createClient } from "tinacms/dist/client"
import { queries } from "../tina/__generated__/types"

// Create the client with authentication
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

interface TinaPost {
  __typename?: "Post"
  _sys: {
    filename: string
  }
  id: string
  title: string
  excerpt: string
  featuredImage?: string | null
  category: string
  publishDate: string
  body?: any
  author: string
  tags?: (string | null)[] | null
}

interface TinaEdge {
  __typename?: "PostConnectionEdges"
  cursor: string
  node?: TinaPost | null
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Log environment information
    console.log("Environment:", process.env.NODE_ENV)
    console.log("Tina Client ID:", process.env.NEXT_PUBLIC_TINA_CLIENT_ID)
    console.log("Tina Branch:", process.env.NEXT_PUBLIC_TINA_BRANCH)
    console.log("Has Token:", !!process.env.TINA_TOKEN)

    console.log("Fetching blog posts...")

    const postsResponse = await client.queries.postConnection()

    console.log(
      "Raw posts response structure:",
      JSON.stringify(
        {
          hasData: !!postsResponse.data,
          hasConnection: !!postsResponse.data?.postConnection,
          hasEdges: !!postsResponse.data?.postConnection?.edges,
          edgeCount: postsResponse.data?.postConnection?.edges?.length,
        },
        null,
        2,
      ),
    )

    if (!postsResponse.data?.postConnection?.edges) {
      console.error("No posts found in response")
      return []
    }

    const posts = postsResponse.data.postConnection.edges
      .filter((edge): edge is NonNullable<typeof edge> => {
        if (!edge?.node) {
          console.warn("Found an edge without a node")
          return false
        }
        return true
      })
      .map((edge) => {
        const node = edge.node!
        console.log("Processing post:", node.title)

        return {
          _sys: { filename: node._sys.filename },
          id: node.id,
          title: node.title,
          slug: node._sys.filename,
          excerpt: node.excerpt,
          featuredImage: node.featuredImage ?? "",
          category: node.category,
          publishDate: node.publishDate,
          body: node.body ?? "",
          author: node.author,
          tags: node.tags?.filter((tag): tag is string => tag !== null) ?? [],
          content: node.body ?? "",
        } as BlogPost
      })

    console.log(`Successfully processed ${posts.length} posts`)
    return posts
  } catch (error) {
    console.error("Error fetching blog posts:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    })
    return []
  }
}

export async function getBlogPost(relativePath: string): Promise<BlogPost | null> {
  try {
    console.log("Fetching blog post:", relativePath)

    const postResponse = await client.queries.post({
      relativePath: `${relativePath}.md`,
    })

    console.log(
      "Raw post response structure:",
      JSON.stringify(
        {
          hasData: !!postResponse.data,
          hasPost: !!postResponse.data?.post,
        },
        null,
        2,
      ),
    )

    const post = postResponse.data.post
    if (!post) {
      console.error("Post not found:", relativePath)
      return null
    }

    return {
      _sys: { filename: post._sys.filename },
      id: post.id,
      title: post.title,
      slug: post._sys.filename,
      excerpt: post.excerpt,
      featuredImage: post.featuredImage ?? "",
      category: post.category,
      publishDate: post.publishDate,
      body: post.body ?? "",
      author: post.author,
      tags: post.tags?.filter((tag): tag is string => tag !== null) ?? [],
      content: post.body ?? "",
    } as BlogPost
  } catch (error) {
    console.error("Error fetching blog post:", {
      relativePath,
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    })
    return null
  }
}

