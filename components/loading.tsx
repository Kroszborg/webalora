"use client";

import { Loader2 } from "lucide-react";

interface LoadingSkeletonProps {
  count?: number;
}

export function CardSkeleton({ count = 3 }: LoadingSkeletonProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 animate-pulse"
        >
          <div className="h-48 sm:h-56 md:h-64 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded mb-4 w-4/6"></div>
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function GridSkeleton({ count = 9 }: LoadingSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardSkeleton count={count} />
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
      <span className="ml-2 text-gray-700">Loading content...</span>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 px-4">
      <div className="container mx-auto">
        <div className="mb-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-full w-24"></div>
            ))}
          </div>
        </div>
        <GridSkeleton count={6} />
      </div>
    </div>
  );
}
