import { serialize } from "next-mdx-remote/serialize"

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client: string
  industry: string
  services: string[]
  challenge: string
  solution: string
  results: string[]
  content: string
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  featuredImage: string
}

export interface StrapiCaseStudy {
  id: number
  documentId: string
  Title: string
  Author: string
  slug: string
  Content: string
  publishdate: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  Description: string | null
  image?: {
    data?: {
      attributes?: {
        url: string
      }
    }
  }
  categoryId?: number
}

interface StrapiResponse {
  data: StrapiCaseStudy[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.webalora.com"

export async function getCaseStudies(): Promise<StrapiCaseStudy[]> {
  try {
    // First, get the first page to determine total pages
    const initialResponse = await fetch(
      `${STRAPI_URL}/api/case-studies?populate=*&pagination[page]=1&pagination[pageSize]=100`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 },
      },
    )

    if (!initialResponse.ok) {
      throw new Error(`HTTP error! status: ${initialResponse.status}`)
    }

    const initialData: StrapiResponse = await initialResponse.json()
    let allCaseStudies = [...initialData.data]

    const { pageCount } = initialData.meta.pagination

    // If there are more pages, fetch them
    if (pageCount > 1) {
      const remainingPagesPromises = []

      for (let currentPage = 2; currentPage <= pageCount; currentPage++) {
        const promise = fetch(
          `${STRAPI_URL}/api/case-studies?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=100`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            next: { revalidate: 10 },
          },
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
          })
          .then((data: StrapiResponse) => data.data)

        remainingPagesPromises.push(promise)
      }

      const remainingPagesResults = await Promise.all(remainingPagesPromises)
      remainingPagesResults.forEach((pageData) => {
        allCaseStudies = [...allCaseStudies, ...pageData]
      })
    }

    // Assign mock category IDs based on the case study index
    // This is a temporary solution until the API supports categories
    const caseStudiesWithCategories = allCaseStudies.map((study, index) => {
      // Cycle through the 7 category IDs (3, 5, 7, 9, 11, 13, 15)
      const categoryId = 3 + (index % 7) * 2
      return {
        ...study,
        categoryId,
      }
    })

    console.log(`Fetched ${caseStudiesWithCategories.length} case studies in total`)
    return caseStudiesWithCategories
  } catch (error) {
    console.error("Error fetching case studies:", error)
    return []
  }
}

export async function getCaseStudy(slug: string) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/case-studies?filters[slug]=${slug}&populate=*`)
    const data = await response.json()

    if (data.data && data.data[0]) {
      // Assign a mock category ID (this would be replaced with real data in production)
      const study = data.data[0]
      // Use the ID to generate a consistent category ID
      const categoryId = 3 + (study.id % 7) * 2
      return {
        ...study,
        categoryId,
      }
    }

    return null
  } catch (error) {
    console.error("Error fetching case study:", error)
    return null
  }
}

export async function getRelatedCaseStudies(currentStudy: StrapiCaseStudy, limit = 2): Promise<StrapiCaseStudy[]> {
  try {
    const allCaseStudies = await getCaseStudies()
    return allCaseStudies.filter((study) => study.id !== currentStudy.id).slice(0, limit)
  } catch (error) {
    console.error("Error fetching related case studies:", error)
    return []
  }
}

export async function searchCaseStudies(query: string): Promise<StrapiCaseStudy[]> {
  try {
    const allCaseStudies = await getCaseStudies()
    const lowercaseQuery = query.toLowerCase()
    return allCaseStudies.filter(
      (study: StrapiCaseStudy) =>
        study.Title.toLowerCase().includes(lowercaseQuery) ||
        study.Content.toLowerCase().includes(lowercaseQuery) ||
        study.Author.toLowerCase().includes(lowercaseQuery) ||
        (study.Description?.toLowerCase() || "").includes(lowercaseQuery),
    )
  } catch (error) {
    console.error("Error searching case studies:", error)
    return []
  }
}

export async function getSerializedContent(content: string) {
  return await serialize(content)
}

// lib/casestudies.ts - Replace the getCaseStudyImageUrl function

export function getCaseStudyImageUrl(caseStudy: StrapiCaseStudy): string {
  // Define fallback image URL
  const fallbackImage = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"

  // Use your provided default as fallback
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.webalora.com"

  // console.log("🔍 Getting case study image for:", caseStudy.Title);

  try {
    // Special case - if you know the exact URL format for a specific case study
    // This is useful for debugging specific cases
    // if (caseStudy.slug === "first") {
    //   const directURL = `${STRAPI_URL}/uploads/pexels_peter_olexa_2214257_3875821_56b4e377dc.jpg`;
    //   console.log("✅ Using direct URL for first case study:", directURL);
    //   return directURL;
    // }

    // Log the full case study object to inspect all properties
    // console.log("📦 Full case study object:", JSON.stringify(caseStudy, null, 2));

    // Try to find image URL in caseStudy.image
    if (caseStudy.image) {
      // console.log("🖼️ Case study has image property:", JSON.stringify(caseStudy.image, null, 2));

      // Case 1: Standard Strapi v4 format
      if (caseStudy.image.data?.attributes?.url) {
        const imageUrl = caseStudy.image.data.attributes.url
        return imageUrl.startsWith("http") ? imageUrl : `${STRAPI_URL}${imageUrl}`
        // console.log("✅ Found standard Strapi v4 image URL:", fullUrl);
      }

      // Case 2: Direct URL in the image object
      if (typeof caseStudy.image === "string") {
        if (typeof caseStudy.image === "string") {
          const imageUrl = caseStudy.image as string
          return imageUrl.startsWith("http") ? imageUrl : `${STRAPI_URL}${imageUrl}`
          // console.log("✅ Found direct string URL:", imageUrl.startsWith("http") ? imageUrl : `${STRAPI_URL}${imageUrl}`);
        }
      }
    }

    // Case 3: Look in other common properties
    const commonProperties = ["image", "coverImage", "featured_image", "featured", "thumbnail", "photo"]
    for (const prop of commonProperties) {
      if (caseStudy[prop as keyof StrapiCaseStudy]) {
        // const propValue = caseStudy[prop as keyof StrapiCaseStudy];
        // console.log(`🔍 Checking property ${prop}:`, propValue);
        // if (typeof propValue === 'string' && propValue.includes('/uploads/')) {
        //   console.log(`✅ Found URL in ${prop}:`, propValue);
        //   return propValue.startsWith('http') ? propValue : `${STRAPI_URL}${propValue}`;
        // }
      }
    }

    // Case 4: Deep search for URL patterns in the entire object
    const findUrlsInObject = (obj: Record<string, unknown>): string[] => {
      const urls: string[] = []

      const search = (o: Record<string, unknown>, path = "") => {
        if (!o || typeof o !== "object" || Array.isArray(o)) {
          return
        }

        Object.entries(o).forEach(([key, value]) => {
          const currentPath = path ? `${path}.${key}` : key

          if (typeof value === "string" && value.includes("/uploads/")) {
            // console.log(`🔍 Found URL pattern at ${currentPath}:`, value);
            urls.push(value.startsWith("http") ? value : `${STRAPI_URL}${value}`)
          } else if (value && typeof value === "object" && !Array.isArray(value)) {
            search(value as Record<string, unknown>, currentPath)
          } else if (Array.isArray(value)) {
            value.forEach((item, index) => {
              search(item, `${currentPath}[${index}]`)
            })
          }
        })
      }

      search(obj)
      return urls
    }

    const foundUrls = findUrlsInObject(caseStudy as unknown as Record<string, unknown>)
    if (foundUrls.length > 0) {
      // console.log("✅ Found URL patterns in deep search:", foundUrls[0]);
      return foundUrls[0]
    }

    // Generate a placeholder image URL based on the case study ID
    console.log("⚠️ No image found, using general placeholder")
    return `https://picsum.photos/seed/${caseStudy.id}/800/600`
  } catch (error) {
    console.error("❌ Error extracting image URL:", error)
  }

  // Final fallback
  console.log("⚠️ Function is returning fallback image")
  return fallbackImage
}

export async function getCaseStudiesByCategory(categoryId: number): Promise<StrapiCaseStudy[]> {
  try {
    const allCaseStudies = await getCaseStudies()
    return allCaseStudies.filter((study) => study.categoryId === categoryId)
  } catch (error) {
    console.error(`Error fetching case studies for category ${categoryId}:`, error)
    return []
  }
}

