"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PrefetchLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  prefetch?: boolean;
}

export function PrefetchLink({
  href,
  children,
  className = "",
  activeClassName = "",
  prefetch = true,
}: PrefetchLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  const combinedClassName = `${className} ${isActive ? activeClassName : ""}`;

  const handleMouseEnter = () => {
    // Start prefetching data when user hovers over the link
    if (
      prefetch &&
      (href.startsWith("/blog") ||
        href.startsWith("/resource") ||
        href.startsWith("/case-studies"))
    ) {
      prefetchCmsData();
    }
  };

  return (
    <Link
      href={href}
      className={combinedClassName}
      onMouseEnter={handleMouseEnter}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}

// Navigation component that uses PrefetchLink for CMS pages
export function AppNavigation() {
  useEffect(() => {
    // Prefetch CMS data when page loads
    const timer = setTimeout(() => {
      prefetchCmsData();
    }, 2000); // Wait 2 seconds after page load to avoid impacting initial page render

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <PrefetchLink
              href="/"
              className="flex items-center text-gray-900 hover:text-blue-600"
            >
              Home
            </PrefetchLink>

            <PrefetchLink
              href="/blog"
              className="flex items-center text-gray-900 hover:text-blue-600"
              activeClassName="text-blue-600 font-medium"
            >
              Blog
            </PrefetchLink>

            <PrefetchLink
              href="/resource"
              className="flex items-center text-gray-900 hover:text-blue-600"
              activeClassName="text-blue-600 font-medium"
            >
              Resources
            </PrefetchLink>

            <PrefetchLink
              href="/case-studies"
              className="flex items-center text-gray-900 hover:text-blue-600"
              activeClassName="text-blue-600 font-medium"
            >
              Case Studies
            </PrefetchLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

async function prefetchCmsData() {
  try {
    const response = await fetch('/api/prefetch-cms-data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Prefetched CMS data:', data);
  } catch (error) {
    console.error('Failed to prefetch CMS data:', error);
  }
}

