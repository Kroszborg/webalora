import { StrapiPost } from "./db";

// Fallback blog posts in case the API is unavailable
export const fallbackBlogPosts: StrapiPost[] = [
  {
    id: 1,
    documentId: "fallback-1",
    Title: "The Future of Cloud Computing",
    Author: "WebAlora Team",
    slug: "future-of-cloud-computing",
    content: "Cloud computing continues to evolve at a rapid pace. In this article, we explore the latest trends and innovations that are shaping the future of cloud technology.",
    publishdate: "2023-05-15",
    createdAt: "2023-05-15T10:00:00Z",
    updatedAt: "2023-05-15T10:00:00Z",
    publishedAt: "2023-05-15T10:00:00Z",
    Description: "Explore the latest advancements in cloud technology and how they're shaping the future of IT infrastructure.",
    image: {
      data: {
        attributes: {
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        }
      }
    },
    blog_category: {
      id: 1,
      Type: "Cloud Computing"
    }
  },
  {
    id: 2,
    documentId: "fallback-2",
    Title: "Cybersecurity Best Practices for Remote Work",
    Author: "WebAlora Security Team",
    slug: "cybersecurity-best-practices-remote-work",
    content: "With the rise of remote work, organizations face new cybersecurity challenges. Learn essential practices to protect your business data when your team works from anywhere.",
    publishdate: "2023-06-02",
    createdAt: "2023-06-02T10:00:00Z",
    updatedAt: "2023-06-02T10:00:00Z",
    publishedAt: "2023-06-02T10:00:00Z",
    Description: "Learn how to protect your organisation's data and systems in an increasingly remote work environment.",
    image: {
      data: {
        attributes: {
          url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=2070"
        }
      }
    },
    blog_category: {
      id: 2,
      Type: "Cybersecurity"
    }
  },
  {
    id: 3,
    documentId: "fallback-3",
    Title: "The Rise of AI in Business Intelligence",
    Author: "WebAlora Analytics Team",
    slug: "rise-of-ai-in-business-intelligence",
    content: "Artificial Intelligence is transforming how businesses analyze data and make decisions. Discover how AI-powered BI tools are providing deeper insights and driving better outcomes.",
    publishdate: "2023-07-10",
    createdAt: "2023-07-10T10:00:00Z",
    updatedAt: "2023-07-10T10:00:00Z",
    publishedAt: "2023-07-10T10:00:00Z",
    Description: "Discover how artificial intelligence is transforming business intelligence and decision-making processes.",
    image: {
      data: {
        attributes: {
          url: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=2069"
        }
      }
    },
    blog_category: {
      id: 3,
      Type: "Artificial Intelligence"
    }
  }
];

// Get a fallback blog post by slug
export function getFallbackBlogPost(slug: string): StrapiPost | null {
  return fallbackBlogPosts.find(post => post.slug === slug) || null;
}

// Get related fallback posts
export function getFallbackRelatedPosts(currentSlug: string): StrapiPost[] {
  return fallbackBlogPosts.filter(post => post.slug !== currentSlug);
}