import React from "react";
import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noIndex?: boolean;
  children?: React.ReactNode;
}

/**
 * Client component for additional meta tags not covered by Next.js Metadata API
 * This is useful for tags that need to be dynamically generated on the client
 * or for custom tags not supported by the Metadata API
 */
export function MetaTags({
  title,
  description,
  canonical,
  ogImage = "/logos/logobg.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  children,
}: MetaTagsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webalora.com";

  // Ensure image URL is absolute
  const absoluteImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${baseUrl}${ogImage}`;

  return (
    <Head>
      {/* Dynamically set canonical for client-side navigation */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Control indexing */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Additional meta tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter specific tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* Allow inserting additional custom tags */}
      {children}
    </Head>
  );
}

export default MetaTags;
