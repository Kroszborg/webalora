import { NextRequest, NextResponse } from "next/server";
import * as api from "@/lib/api";

// Set more aggressive cache headers for better performance
function setCacheHeaders(response: NextResponse) {
  // Cache responses for 5 minutes with stale-while-revalidate for 1 hour
  response.headers.set(
    "Cache-Control",
    "public, max-age=300, s-maxage=300, stale-while-revalidate=3600"
  );
  
  // Add tags for cache invalidation
  response.headers.set("Edge-Cache-Tag", "cms-data");
  
  return response;
}

// Generic handler for all CMS types
export async function GET(
  request: NextRequest
) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    
    if (!type) {
      return NextResponse.json({ error: "Type parameter is required" }, { status: 400 });
    }
    
    let data;
    
    // Determine which data to fetch based on the type parameter
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
    return setCacheHeaders(response);
  } catch (error) {
    console.error(`Error in API route /api/cms:`, error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}