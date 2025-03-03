import { NextRequest, NextResponse } from "next/server";
import * as api from "@/lib/api";

// Enhanced cache headers for individual items
function setCacheHeaders(response: NextResponse, type: string, slug: string) {
  // Cache responses for 5 minutes with stale-while-revalidate for 1 hour
  response.headers.set(
    "Cache-Control",
    "public, max-age=300, s-maxage=300, stale-while-revalidate=3600"
  );
  
  // Add tags for cache invalidation
  response.headers.set("Edge-Cache-Tag", `cms-${type}-${slug}`);
  
  return response;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string; slug: string } }
) {
  try {
    const { type, slug } = params;
   
    // Determine which data to fetch based on the route parameter
    let data;
    switch (type) {
      case "blog":
        data = await api.getBlogPost(slug);
        break;
      case "resources":
        data = await api.getResourcePost(slug);
        break;
      case "case-studies":
        data = await api.getCaseStudy(slug);
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
   
    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
   
    // Return the data with caching headers
    const response = NextResponse.json({ data });
    return setCacheHeaders(response, type, slug);
  } catch (error) {
    console.error(`Error in API route /api/cms/${params.type}/${params.slug}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}