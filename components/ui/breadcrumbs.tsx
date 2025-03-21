// components/ui/breadcrumbs.tsx
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center flex-wrap">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <Home className="flex-shrink-0 h-4 w-4 mr-1" />
            Home
          </Link>
        </li>

        {items.map((item) => (
          <li key={item.label} className="inline-flex items-center">
            <ChevronRight
              className="h-4 w-4 text-gray-400 mx-2"
              aria-hidden="true"
            />
            {item.href && !item.current ? (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-sm font-medium text-gray-700"
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
