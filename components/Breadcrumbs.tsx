"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeItemClasses?: string;
  inactiveItemClasses?: string;
  capitalizeLinks?: boolean;
}

const defaultTransformLink = (link: string) => {
  return link.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

// Map of path segments to custom display names
const pathMap: Record<string, string> = {
  blog: "Blog",
  "case-studies": "Case Studies",
  resource: "Resources",
  careers: "Careers",
  services: "Services",
  networking: "Network Infrastructure",
  backup: "Backup & Disaster Recovery",
  "cloud-solutions": "Cloud Solutions",
  consultancy: "IT Consultancy",
  "cybersecurity-solutions": "Cybersecurity",
  "voip-solutions": "VOIP Solutions",
  "cctv-solutions": "CCTV Solutions",
  faq: "FAQ",
  about: "About Us",
  contact: "Contact Us",
  "privacy-policy": "Privacy Policy",
  terms: "Terms & Conditions",
  "cookie-policy": "Cookie Policy",
  "modern-slavery-statement": "Modern Slavery Statement",
};

export function Breadcrumbs({
  homeElement = <Home size={18} />,
  separator = <ChevronRight className="h-4 w-4" />,
  containerClasses = "flex py-4 text-sm text-gray-600",
  listClasses = "flex items-center space-x-2",
  activeItemClasses = "text-gray-900 font-medium",
  inactiveItemClasses = "hover:text-gray-900 transition-colors",
  capitalizeLinks = true,
}: BreadcrumbsProps) {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  // Split pathname into segments, removing empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Generate breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    // Build the URL for this breadcrumb
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;

    // Determine if this is the last (active) breadcrumb
    const isLastItem = index === pathSegments.length - 1;

    // Get display name from map or transform link
    const displayName =
      pathMap[segment] ||
      (capitalizeLinks ? defaultTransformLink(segment) : segment);

    return {
      name: displayName,
      url: url,
      isActive: isLastItem,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className={containerClasses}>
      <ol className={listClasses}>
        {/* Home link */}
        <li className="flex items-center">
          <Link
            href="/"
            className={cn(inactiveItemClasses, "flex items-center")}
            aria-label="Home"
          >
            {homeElement}
          </Link>
        </li>

        <li className="flex items-center">{separator}</li>

        {/* Breadcrumb items */}
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.url} className="flex items-center">
            {breadcrumb.isActive ? (
              <span className={activeItemClasses} aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <>
                <Link href={breadcrumb.url} className={inactiveItemClasses}>
                  {breadcrumb.name}
                </Link>
                <span className="mx-2">{separator}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
