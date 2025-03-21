// components/SeoImage.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SeoImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  lazyBoundary?: string;
  optimizeSrc?: boolean;
}

export function SeoImage({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes = "100vw",
  className = "",
  lazyBoundary = "200px",
  optimizeSrc = true,
}: SeoImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when src changes
  useEffect(() => {
    if (src) {
      setImgSrc(optimizeSrc ? optimizeImageUrl(src) : src);
      setHasError(false);
      setIsLoading(true);
    } else if (fallbackSrc) {
      setImgSrc(optimizeSrc ? optimizeImageUrl(fallbackSrc) : fallbackSrc);
    }
  }, [src, fallbackSrc, optimizeSrc]);

  const handleImageError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(optimizeSrc ? optimizeImageUrl(fallbackSrc) : fallbackSrc);
      setHasError(true);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Function to optimize image URL
  function optimizeImageUrl(url: string): string {
    // Don't optimize external URLs that already have parameters
    if (url.includes("?") || !url.match(/\.(jpg|jpeg|png|webp|avif)/i)) {
      return url;
    }

    // For Unsplash URLs, use their optimization parameters
    if (url.includes("unsplash.com")) {
      return `${url}${url.includes("?") ? "&" : "?"}q=80&auto=format&fit=crop`;
    }

    // For internal URLs, you could add your own optimization parameters
    return url;
  }

  // Create a base64 placeholder for blur effect
  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=";

  const imageProps = {
    src: imgSrc,
    alt: alt || "Website image", // Ensure alt text is never empty
    className: cn(
      "transition-opacity duration-300",
      className,
      hasError ? "fallback-image" : "",
      isLoading ? "opacity-0" : "opacity-100"
    ),
    onError: handleImageError,
    onLoad: handleImageLoad,
    priority,
    sizes,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    blurDataURL,
    placeholder: "blur" as const,
    lazyBoundary,
  };

  return (
    <>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse",
            className
          )}
          aria-hidden="true"
        />
      )}
      {fill ? (
        <Image {...imageProps} fill alt={alt} />
      ) : width && height ? (
        <Image {...imageProps} width={width} height={height} alt={alt} />
      ) : null}
    </>
  );
}
