"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when src changes
  useEffect(() => {
    setImgSrc(src || fallbackSrc);
    setHasError(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  const handleImageError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Create a base64 placeholder for blur effect
  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=";

  const imageProps = {
    src: imgSrc,
    alt,
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
    loading: priority ? "eager" as const : "lazy" as const,
    blurDataURL,
    placeholder: "blur" as const,
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

// Function to add progressive loading and optimize image URLs
export function optimizeImageUrl(url: string, width = 800): string {
  if (!url) {
    return "";
  }

  try {
    // Use modern image formats with the ?format parameter if CDN supports it
    if (url.match(/\.(jpg|jpeg|png|webp|avif)/i) && !url.includes("?")) {
      return `${url}?w=${width}&q=75&format=webp`;
    } else if (
      url.match(/\.(jpg|jpeg|png|webp|avif)/i) &&
      !url.includes("w=")
    ) {
      const separator = url.includes("?") ? "&" : "?";
      return `${url}${separator}w=${width}&q=75`;
    }
    return url;
  } catch (e) {
    console.error("Error optimizing image URL:", e);
    return url;
  }
}
