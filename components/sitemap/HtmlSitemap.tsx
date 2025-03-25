// components/sitemap/HtmlSitemap.tsx
import Link from "next/link";
import { siteRoutes } from "./SitemapIndex";

interface HtmlSitemapProps {
  includeDynamicRoutes?: boolean;
  dynamicRoutes?: {
    blog?: { slug: string; title: string }[];
    caseStudies?: { slug: string; title: string }[];
    resources?: { slug: string; title: string }[];
  };
  className?: string;
}

/**
 * An HTML sitemap component optimized for SEO and search engines
 */
export default function HtmlSitemap({
  includeDynamicRoutes = false,
  dynamicRoutes,
  className = "",
}: HtmlSitemapProps) {
  return (
    <div className={`sitemap ${className}`}>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Website Sitemap</h1>

      <div className="max-w-4xl mx-auto">
        {siteRoutes.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              {category.name}
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mb-6">
              {category.routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {route.name}
                  </Link>
                  {route.lastUpdated && (
                    <span className="text-xs text-gray-500 ml-2">
                      Updated:{" "}
                      {new Date(route.lastUpdated).toLocaleDateString()}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Dynamic Routes */}
        {includeDynamicRoutes && dynamicRoutes && (
          <>
            {/* Blog Posts */}
            {dynamicRoutes.blog && dynamicRoutes.blog.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Blog Posts
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {dynamicRoutes.blog.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Case Studies */}
            {dynamicRoutes.caseStudies &&
              dynamicRoutes.caseStudies.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                    Case Studies
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {dynamicRoutes.caseStudies.map((caseStudy) => (
                      <li key={caseStudy.slug}>
                        <Link
                          href={`/case-studies/${caseStudy.slug}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {caseStudy.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Resources */}
            {dynamicRoutes.resources && dynamicRoutes.resources.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Resources
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {dynamicRoutes.resources.map((resource) => (
                    <li key={resource.slug}>
                      <Link
                        href={`/resource/${resource.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Server component to fetch data for the HTML sitemap
 */
export async function SitemapWithData() {
  // This would be your data fetching logic
  // Replace with your actual data fetching functions
  const [blogPosts, caseStudies, resources] = await Promise.all([
    fetchBlogPosts(),
    fetchCaseStudies(),
    fetchResources(),
  ]);

  return (
    <HtmlSitemap
      includeDynamicRoutes={true}
      dynamicRoutes={{
        blog: blogPosts,
        caseStudies: caseStudies,
        resources: resources,
      }}
    />
  );
}

// Mock functions for data fetching - replace with your actual implementations
async function fetchBlogPosts() {
  try {
    // Replace with your actual API call
    const posts = await fetch(
      `${
        process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.webalora.com"
      }/api/blogs`
    ).then((res) => res.json());

    return posts.data.map((post: { slug: string; Title: string }) => ({
      slug: post.slug,
      title: post.Title,
    }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}

async function fetchCaseStudies() {
  try {
    // Replace with your actual API call
    const caseStudies = await fetch(
      `${
        process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.webalora.com"
      }/api/case-studies`
    ).then((res) => res.json());

    return caseStudies.data.map((study: { slug: string; Title: string }) => ({
      slug: study.slug,
      title: study.Title,
    }));
  } catch (error) {
    console.error("Error fetching case studies for sitemap:", error);
    return [];
  }
}

interface Resource {
  slug: string;
  Title: string;
}

async function fetchResources() {
  try {
    // Replace with your actual API call
    const resources = await fetch(
      `${
        process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.webalora.com"
      }/api/resources`
    ).then((res) => res.json());

    return resources.data.map((resource: Resource) => ({
      slug: resource.slug,
      title: resource.Title,
    }));
  } catch (error) {
    console.error("Error fetching resources for sitemap:", error);
    return [];
  }
}
