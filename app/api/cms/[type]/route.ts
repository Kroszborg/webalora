import { NextRequest, NextResponse } from "next/server";
import * as api from "@/lib/api";

// Enhanced cache headers
function setCacheHeaders(response: NextResponse, type: string) {
  // Cache responses for 5 minutes with stale-while-revalidate for 1 hour
  response.headers.set(
    "Cache-Control",
    "public, max-age=300, s-maxage=300, stale-while-revalidate=3600"
  );
  
  // Add tags for cache invalidation
  response.headers.set("Edge-Cache-Tag", `cms-${type}`);
  
  return response;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params;
    
    let data;
    
    // Determine which data to fetch based on the route parameter
    switch (type) {
      case "blog":
        data = await api.getBlogPosts();
        break;
      case "resources":
        data = await api.getResources();
        break;
      case "case-studies":
        data = await api.getCaseStudies();
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
    
    // Return the data with caching headers
    const response = NextResponse.json({ data });
    return setCacheHeaders(response, type);
  } catch (error) {
    console.error(`Error in API route /api/cms/${params.type}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}