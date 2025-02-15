import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

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
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      _sys: { filename: slug },
      id: slug,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      category: data.category,
      publishDate: data.publishDate,
      body: content,
      author: data.author,
      tags: data.tags || [],
      content,
    } as BlogPost
  })

  return allPostsData.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    _sys: { filename: slug },
    id: slug,
    slug,
    title: data.title,
    excerpt: data.excerpt,
    featuredImage: data.featuredImage,
    category: data.category,
    publishDate: data.publishDate,
    body: content,
    author: data.author,
    tags: data.tags || [],
    content,
  } as BlogPost
}

