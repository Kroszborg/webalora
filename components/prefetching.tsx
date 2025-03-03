"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSWRConfig } from "swr";

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
  const { mutate } = useSWRConfig();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  const combinedClassName = `${className} ${isActive ? activeClassName : ""}`;

  const handleMouseEnter = () => {
    // Prefetch data for the hovered link
    if (prefetch) {
      if (href.startsWith("/blog")) {
        mutate("/api/cms/blog", undefined, { revalidate: false });
      } else if (href.startsWith("/resource")) {
        mutate("/api/cms/resources", undefined, { revalidate: false });
      } else if (href.startsWith("/case-studies")) {
        mutate("/api/cms/case-studies", undefined, { revalidate: false });
      }

      // If it's a detail page, prefetch that specific resource
      const match = href.match(/\/(blog|resource|case-studies)\/([^\/]+)$/);
      if (match) {
        const [, type, slug] = match;
        const apiPath = `/api/cms/${
          type === "case-studies" ? "case-studies" : type
        }/${slug}`;
        mutate(apiPath, undefined, { revalidate: false });
      }
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

export function DataPrefetcher() {
  const { mutate } = useSWRConfig();
  const pathname = usePathname();

  useEffect(() => {
    // Prefetch related data based on current page
    const prefetchRelatedData = () => {
      // If on a blog page, prefetch resources and case studies
      if (pathname.startsWith("/blog")) {
        mutate("/api/cms/resources", undefined, { revalidate: false });
        mutate("/api/cms/case-studies", undefined, { revalidate: false });
      }
      // If on resources page, prefetch blog and case studies
      else if (pathname.startsWith("/resource")) {
        mutate("/api/cms/blog", undefined, { revalidate: false });
        mutate("/api/cms/case-studies", undefined, { revalidate: false });
      }
      // If on case studies page, prefetch blog and resources
      else if (pathname.startsWith("/case-studies")) {
        mutate("/api/cms/blog", undefined, { revalidate: false });
        mutate("/api/cms/resources", undefined, { revalidate: false });
      }
    };

    // Use requestIdleCallback for non-critical operations
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (
        window as Window &
          typeof globalThis & {
            requestIdleCallback: (callback: IdleRequestCallback) => void;
          }
      ).requestIdleCallback(prefetchRelatedData);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(prefetchRelatedData, 2000);
    }

    return () => {
      // Clean up (though in this specific usage we don't need to do anything)
    };
  }, [pathname, mutate]);

  return null; // This component doesn't render anything
}

// Component that wraps the app and handles global prefetching
export function GlobalPrefetcher() {
  const { mutate } = useSWRConfig();

  useEffect(() => {
    // Function to prefetch all CMS data types
    const prefetchAll = () => {
      mutate("/api/cms/blog", undefined, { revalidate: false });
      mutate("/api/cms/resources", undefined, { revalidate: false });
      mutate("/api/cms/case-studies", undefined, { revalidate: false });
    };

    // First, use a short timeout to not block initial render
    const timeoutId = setTimeout(() => {
      prefetchAll();
    }, 3000);

    // Then set up intersection observer for when user scrolls near bottom of page
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      // Create a footer element detector
      const footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // User has scrolled to footer, prefetch for next navigation
              prefetchAll();
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe the footer or any bottom page element
      const footer = document.querySelector("footer");
      if (footer) {
        footerObserver.observe(footer);
      }

      return () => {
        clearTimeout(timeoutId);
        if (footer) {
          footerObserver.unobserve(footer);
        }
      };
    }

    return () => clearTimeout(timeoutId);
  }, [mutate]);

  return null;
}
