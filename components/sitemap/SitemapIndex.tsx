import Link from "next/link";
import { cn } from "@/lib/utils";

interface RouteItem {
  name: string;
  path: string;
  description?: string;
  lastUpdated?: string;
}

interface RouteCategory {
  name: string;
  routes: RouteItem[];
  featured?: boolean;
}

/**
 * All website routes organized by category
 */
export const siteRoutes: RouteCategory[] = [
  {
    name: "Main Pages",
    featured: true,
    routes: [
      {
        name: "Home",
        path: "/",
        description:
          "WebAlora's homepage featuring our managed IT services and solutions",
      },
      {
        name: "About",
        path: "/about",
        description:
          "Learn more about WebAlora, our mission, vision, and experienced team",
      },
      {
        name: "Services",
        path: "/services",
        description: "Overview of all IT services provided by WebAlora",
      },
      {
        name: "Case Studies",
        path: "/case-studies",
        description:
          "Real-world examples of IT solutions we've implemented for clients",
      },
      {
        name: "Blog",
        path: "/blog",
        description:
          "Expert insights on IT trends, cybersecurity, and technology advice",
      },
      {
        name: "Resources",
        path: "/resource",
        description:
          "Helpful guides, white papers, and IT resources for businesses",
      },
      {
        name: "Careers",
        path: "/careers",
        description: "Job opportunities to join the WebAlora team",
      },
      {
        name: "Contact",
        path: "/contact",
        description: "Get in touch with WebAlora for IT support and services",
      },
      {
        name: "FAQ",
        path: "/faq",
        description: "Frequently asked questions about our IT services",
      },
    ],
  },
  {
    name: "IT Services",
    featured: true,
    routes: [
      {
        name: "Managed IT Services",
        path: "/services",
        description: "Comprehensive IT management and support for businesses",
      },
      {
        name: "Cybersecurity Solutions",
        path: "/cybersecurity-solutions",
        description:
          "Protect your business with advanced cybersecurity services",
      },
      {
        name: "Cloud Solutions & Migration",
        path: "/cloud-solutions",
        description: "Seamless migration and management of cloud environments",
      },
      {
        name: "Network Infrastructure",
        path: "/networking",
        description: "Design and implementation of reliable network solutions",
      },
      {
        name: "Backup & Disaster Recovery",
        path: "/backup",
        description:
          "Comprehensive data protection and business continuity solutions",
      },
      {
        name: "IT Consultancy",
        path: "/consultancy",
        description: "Strategic IT advice and consulting services",
      },
      {
        name: "VOIP Solutions",
        path: "/voip-solutions",
        description: "Advanced business communication systems",
      },
      {
        name: "CCTV Solutions",
        path: "/cctv-solutions",
        description: "Professional security camera and surveillance systems",
      },
    ],
  },
  {
    name: "Resources & Content",
    routes: [
      { name: "Blog", path: "/blog" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Resources Library", path: "/resource" },
      { name: "Site Map", path: "/sitemap" },
    ],
  },
  {
    name: "Company Information",
    routes: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    name: "Legal Pages",
    routes: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms and Conditions", path: "/terms" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Modern Slavery Statement", path: "/modern-slavery-statement" },
    ],
  },
];

interface SitemapIndexProps {
  className?: string;
  showDescriptions?: boolean;
  categoriesPerRow?: 1 | 2 | 3 | 4;
  highlight?: string[];
}

/**
 * A comprehensive sitemap component that displays all site routes organized by category
 */
export default function SitemapIndex({
  className,
  showDescriptions = false,
  categoriesPerRow = 3,
  highlight = [],
}: SitemapIndexProps) {
  // Grid columns class based on categoriesPerRow
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[categoriesPerRow];

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("grid gap-6", gridClass)}>
        {siteRoutes.map((category) => (
          <div
            key={category.name}
            className={cn(
              "bg-white rounded-xl border border-gray-100 shadow-sm p-6",
              category.featured && "border-blue-100 bg-blue-50/30"
            )}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {category.name}
            </h2>
            <ul className="space-y-3">
              {category.routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={cn(
                      "text-blue-600 hover:text-blue-800 hover:underline transition-colors",
                      highlight.includes(route.path) && "font-semibold"
                    )}
                  >
                    {route.name}
                  </Link>
                  {showDescriptions && route.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {route.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * A smaller version of the sitemap for the footer
 */
export function FooterSitemap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
        className
      )}
    >
      {siteRoutes
        .filter((category) => category.featured)
        .map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-3">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
