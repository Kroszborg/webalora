"use client";

import { useState, useEffect } from "react";
import { OptimizedImage, optimizeImageUrl } from "@/components/OptimizedImage";

interface ResourceImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ResourceImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
}: ResourceImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  // Optimize image URL
  useEffect(() => {
    setImgSrc(optimizeImageUrl(src, 800));
  }, [src]);

  return (
    <OptimizedImage
      src={imgSrc}
      fallbackSrc={fallbackSrc}
      alt={alt}
      className={className}
      fill={fill}
      width={width}
      height={height}
      priority={priority}
      sizes={
        fill
          ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          : undefined
      }
    />
  );
}
