// app/api/og/route.tsx
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

/**
 * Dynamic Open Graph image generation API route
 * Use this to generate social media preview images dynamically
 * Example: /api/og?title=Your+Title&type=blog
 */
export async function GET(request: NextRequest) {
  try {
    // Get URL parameters
    const { searchParams } = new URL(request.url);

    // Title parameter (required)
    const title = searchParams.get("title")?.slice(0, 100) || "WebAlora";

    // Type parameter for template selection (default: default)
    const type = searchParams.get("type") || "default";

    // Optional subtitle parameter
    const subtitle = searchParams.get("subtitle")?.slice(0, 150) || "";

    // Background color
    const bgColor = getBackgroundColor(type);

    // Font customization
    const fontData = await loadFontData();

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: bgColor,
            fontSize: 60,
            fontWeight: 700,
            textAlign: "center",
            padding: "4rem",
            position: "relative",
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: bgColor,
              opacity: 0.3,
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 2%, transparent 0%)",
              backgroundSize: "100px 100px",
              zIndex: 1,
            }}
          />

          {/* Logo area */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
              zIndex: 2,
            }}
          >
            {/* Replace with your logo SVG */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "1rem" }}
            >
              <rect width="80" height="80" rx="40" fill="white" />
              <path
                d="M20 20L40 60L60 20"
                stroke="#0069ff"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ color: "white", fontSize: 36 }}>WebAlora</span>
          </div>

          {/* Main title */}
          <div
            style={{
              color: "white",
              fontSize: getAppropriateSize(title.length),
              lineHeight: 1.2,
              maxWidth: "900px",
              zIndex: 2,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </div>

          {/* Subtitle if provided */}
          {subtitle && (
            <div
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 28,
                marginTop: "1.5rem",
                maxWidth: "800px",
                lineHeight: 1.4,
                zIndex: 2,
              }}
            >
              {subtitle}
            </div>
          )}

          {/* Type label */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "4rem",
              fontSize: 24,
              zIndex: 2,
            }}
          >
            {getDisplayTypeLabel(type)}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fontData,
      }
    );
  } catch (e) {
    console.error(
      `Error generating OG image: ${e instanceof Error ? e.message : String(e)}`
    );
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}

/**
 * Get appropriate font size based on title length
 */
function getAppropriateSize(length: number): number {
  if (length <= 35) {return 72;}
  if (length <= 70) {return 56;}
  if (length <= 100) {return 48;}
  return 36;
}

/**
 * Get background color based on content type
 */
function getBackgroundColor(type: string): string {
  switch (type) {
    case "blog":
      return "#0069ff";
    case "casestudy":
    case "case-study":
      return "#9333ea";
    case "service":
      return "#0891b2";
    case "resource":
      return "#0d9488";
    default:
      return "#0f172a";
  }
}

/**
 * Get display label for the content type
 */
function getDisplayTypeLabel(type: string): string {
  switch (type) {
    case "blog":
      return "Blog Post";
    case "casestudy":
    case "case-study":
      return "Case Study";
    case "service":
      return "Service";
    case "resource":
      return "Resource";
    default:
      return "WebAlora";
  }
}

/**
 * Load font data for the image
 * Fix: Use specific weight value from the allowed list (700) instead of numeric type
 */
async function loadFontData() {
  try {
    const interFont = await fetch(
      new URL(
        "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2",
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    return [
      {
        name: "Inter",
        data: interFont,
        style: "normal" as const,
        weight: 700 as const, // Use type assertion to specify exact weight
      },
    ];
  } catch (e) {
    console.error(
      `Error loading font: ${e instanceof Error ? e.message : String(e)}`
    );
    return [];
  }
}
