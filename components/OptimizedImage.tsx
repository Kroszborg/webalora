"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleImageError = () => {
    console.error(`Failed to load image: ${imgSrc} for ${alt}`);
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className: `transition-opacity duration-300 ${className} ${
      hasError ? "fallback-image" : ""
    } ${isLoading ? "opacity-0" : "opacity-100"}`,
    onError: handleImageError,
    onLoad: handleImageLoad,
    priority,
    sizes,
    loading: priority ? "eager" : "lazy" as "eager" | "lazy" | undefined,
    blurDataURL:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=", // Simple SVG blur placeholder
    placeholder: "blur" as const,
  };

  return (
    <>
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
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

// Utility function to generate appropriate image sizes for responsive design
export function getResponsiveSizes(): string {
  return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
}

// Function to add width/height parameters to image URLs for CDN optimization
export function optimizeImageUrl(url: string, width = 800): string {
  if (!url) {
    return "";
  }

  try {
    // Only add params if it's an image URL without existing width/height
    if (
      url.match(/\.(jpg|jpeg|png|webp|avif)/i) &&
      !url.includes("w=") &&
      !url.includes("width=")
    ) {
      const separator = url.includes("?") ? "&" : "?";
      return `${url}${separator}w=${width}&auto=format,compress`;
    }
    return url;
  } catch (e) {
    console.error("Error optimizing image URL:", e);
    return url;
  }
}
