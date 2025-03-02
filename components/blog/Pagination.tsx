"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const searchParams = useSearchParams();

  // Build URL with all current search params preserved but page updated
  const buildPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `/blog?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <Button asChild variant="outline" disabled={currentPage === 1}>
        <Link href={buildPageUrl(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Link>
      </Button>
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <Button asChild variant="outline" disabled={currentPage === totalPages}>
        <Link href={buildPageUrl(currentPage + 1)}>
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
