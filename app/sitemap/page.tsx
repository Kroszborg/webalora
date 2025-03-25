// app/sitemap/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/schemas";
import { SitemapWithData } from "@/components/sitemap/HtmlSitemap";
import { WebsiteSchema } from "@/components/seo/schemas";
import { generateMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = generateMetadata({
  title: "Site Map | WebAlora",
  description:
    "Navigate through WebAlora's complete website structure. Find all our IT services, resources, blog posts, and other website pages for easier navigation.",
  path: "/sitemap",
  keywords: [
    "WebAlora Site Map",
    "Website Navigation",
    "IT Services Index",
    "Site Structure",
    "Web Directory",
  ],
  // noIndex: false, // We want this page indexed to help search engines
});

export default function SiteMapPage() {
  // Schema.org structured data for SEO
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webalora.com";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Structured data */}
        <WebsiteSchema
          name="WebAlora"
          url={baseUrl}
          description="Managed IT Services & Cybersecurity Solutions"
        />

        <BreadcrumbSchema
          items={[
            { name: "Home", url: baseUrl },
            { name: "Site Map", url: `${baseUrl}/sitemap` },
          ]}
        />

        {/* Breadcrumbs navigation */}
        <Breadcrumbs />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Site Map</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Use this page to navigate through all sections of the WebAlora
            website. This comprehensive site map helps you find the information
            you need about our IT services, resources, and company information.
          </p>
        </div>

        {/* Full sitemap with dynamic content */}
        <Suspense fallback={<div>Loading site structure...</div>}>
          <SitemapWithData />
        </Suspense>

        {/* Additional SEO-friendly content */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About WebAlora
          </h2>
          <p className="text-gray-700 mb-6">
            WebAlora provides expert IT services and solutions for businesses
            across the UK. Our services include managed IT support,
            cybersecurity, cloud solutions, network infrastructure, backup and
            disaster recovery, IT consultancy, VOIP solutions, and CCTV systems.
          </p>

          <p className="text-gray-700 mb-6">
            Based in London, our team of experienced IT professionals is
            dedicated to delivering secure, reliable, and innovative technology
            solutions that help businesses operate more efficiently and
            effectively in today&apos;s digital landscape.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Need Help?
            </h3>
            <p className="text-blue-800 mb-4">
              If you can&apos;t find what you&apos;re looking for, please contact our
              support team:
            </p>
            <ul className="text-blue-800">
              <li>• Phone: 0330 043 4953</li>
              <li>• Email: hello@webalora.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
