"use client";

import { useState, useEffect } from "react";
import { OptimizedImage, optimizeImageUrl } from "@/components/OptimizedImage";

interface CaseStudyImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function CaseStudyImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
}: CaseStudyImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  // Handle specific known image URLs for debugging
  useEffect(() => {
    if (alt.toLowerCase().includes("first")) {
      const strapiUrl =
        process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.webalora.com";
      const directUrl = `${strapiUrl}/uploads/pexels_peter_olexa_2214257_3875821_56b4e377dc.jpg`;
      setImgSrc(directUrl);
    } else {
      // Otherwise optimize the image URL
      setImgSrc(optimizeImageUrl(src, 800));
    }
  }, [alt, src]);

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
