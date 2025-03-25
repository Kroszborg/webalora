"use client";

import React from "react";
import {
  BreadcrumbSchema,
  OrganizationSchema,
} from "@/components/seo/StructuredData";
import { usePathname } from "next/navigation";
import MetaTags from "@/components/seo/MetaTags";

interface SeoWrapperProps {
  title: string;
  description: string;
  type?: "website" | "article";
  imageUrl?: string;
  noIndex?: boolean;
  children: React.ReactNode;
  structuredData?: React.ReactNode;
  alternateLanguages?: Record<string, string>;
}

/**
 * A wrapper component that adds SEO features to any page
 * This is used for client-side rendered pages that need dynamic SEO
 */
export default function SeoWrapper({
  title,
  description,
  type = "website",
  imageUrl,
  noIndex = false,
  children,
  structuredData,
  alternateLanguages,
}: SeoWrapperProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webalora.com";
  const canonical = `${baseUrl}${pathname}`;

  // Generate breadcrumb data for schema
  const breadcrumbItems = generateBreadcrumbItems(pathname);

  // Organization data for schema
  const organizationData = {
    name: "WebAlora",
    logo: `${baseUrl}/logos/logobg.jpg`,
    url: baseUrl,
    sameAs: [
      "https://www.facebook.com/webalora/",
      "https://x.com/WebAlora",
      "https://www.linkedin.com/company/webalora/",
      "https://www.instagram.com/webalora/",
    ],
    address: {
      street: "71-75 Shelton Street, Covent Garden",
      locality: "London",
      postalCode: "WC2H 9JQ",
      country: "United Kingdom",
    },
    contactPoint: {
      telephone: "0330 043 4953",
      contactType: "customer service",
      email: "hello@webalora.com",
    },
  };

  return (
    <>
      {/* Basic meta tags for crawlers and social sharing */}
      <MetaTags
        title={title}
        description={description}
        canonical={canonical}
        ogImage={imageUrl}
        ogType={type}
        noIndex={noIndex}
      >
        {/* Add alternate language links if provided */}
        {alternateLanguages &&
          Object.entries(alternateLanguages).map(([lang, url]) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={url} />
          ))}

        {/* Add Pinterest verification if needed */}
        {/* <meta name="p:domain_verify" content="YOUR_PINTEREST_CODE" /> */}
      </MetaTags>

      {/* Schema.org structured data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <OrganizationSchema {...organizationData} />

      {/* Add custom structured data if provided */}
      {structuredData}

      {/* Page content */}
      {children}
    </>
  );
}

/**
 * Generate breadcrumb items from the current path
 */
function generateBreadcrumbItems(pathname: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webalora.com";
  const segments = pathname.split("/").filter(Boolean);

  // Start with home
  const breadcrumbs = [{ name: "Home", url: baseUrl }];

  // Add path segments
  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    // Get a readable name for the segment
    let name = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    // Special case for known paths
    const pathMap: Record<string, string> = {
      blog: "Blog",
      "case-studies": "Case Studies",
      resource: "Resources",
      "cybersecurity-solutions": "Cybersecurity",
      "cloud-solutions": "Cloud Solutions",
      "cctv-solutions": "CCTV Solutions",
      "voip-solutions": "VOIP Solutions",
      // Add more mappings as needed
    };

    if (pathMap[segment]) {
      name = pathMap[segment];
    }

    breadcrumbs.push({
      name,
      url: `${baseUrl}${currentPath}`,
    });
  });

  return breadcrumbs;
}
