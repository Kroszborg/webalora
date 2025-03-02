// app/api/cms/[type]/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Set cache headers for the response
function setCacheHeaders(response: NextResponse) {
  // Cache responses for 5 minutes
  response.headers.set("Cache-Control", "public, max-age=300, s-maxage=300, stale-while-revalidate=300");
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
        // Import the single post fetching function
        const { getBlogPost } = await import("@/lib/db");
        data = await getBlogPost(slug);
        break;
      case "resources":
        // Import the single resource fetching function
        const { getResourcePost } = await import("@/lib/db");
        data = await getResourcePost(slug);
        break;
      case "case-studies":
        // Import the single case study fetching function from the correct location
        const { getCaseStudy } = await import("@/lib/casestudies");
        data = await getCaseStudy(slug);
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
   
    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
   
    // Return the data with caching headers
    const response = NextResponse.json({ data });
    return setCacheHeaders(response);
  } catch (error) {
    console.error(`Error in API route /api/cms/${params.type}/${params.slug}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}