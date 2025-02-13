import { createClient, type Entry, type EntryCollection } from "contentful"

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export interface BlogPostFields {
  title: string
  slug: string
  content: any
  excerpt: string
  featuredImage: {
    fields: {
      file: {
        url: string
      }
    }
  }
  publishDate: string
  author: {
    fields: {
      name: string
    }
  }
  category: {
    fields: {
      name: string
    }
  }
}

export interface CategoryFields {
  name: string
}

export interface TagFields {
  name: string
}

export type BlogPost = Entry<BlogPostFields>
export type Category = Entry<CategoryFields>
export type Tag = Entry<TagFields>

export type BlogPostCollection = EntryCollection<BlogPostFields>
export type CategoryCollection = EntryCollection<CategoryFields>
export type TagCollection = EntryCollection<TagFields>

