// app/api/cms/[type]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getBlogPosts, getResources } from "@/lib/db";

// Set cache headers for the response
function setCacheHeaders(response: NextResponse) {
  // Cache responses for 5 minutes
  response.headers.set("Cache-Control", "public, max-age=300, s-maxage=300, stale-while-revalidate=300");
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
        data = await getBlogPosts();
        break;
      case "resources":
        data = await getResources();
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
    
    // Return the data with caching headers
    const response = NextResponse.json({ data });
    return setCacheHeaders(response);
  } catch (error) {
    console.error(`Error in API route /api/cms/${params.type}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
