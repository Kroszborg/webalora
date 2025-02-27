// components/casestudies/CaseStudyImage.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
  const [hasError, setHasError] = useState(false);

  // Handle specific known image URLs for debugging
  useEffect(() => {
    if (alt.toLowerCase().includes("first")) {
      const strapiUrl =
        process.env.NEXT_PUBLIC_STRAPI_URL ||
        "http://webaloracms-production-9e8b.up.railway.app";
      const directUrl = `${strapiUrl}/uploads/pexels_peter_olexa_2214257_3875821_56b4e377dc.jpg`;
      console.log(`Using direct URL for case study: ${directUrl}`);
      setImgSrc(directUrl);
    }
  }, [alt]);

  const handleError = () => {
    console.error(`Failed to load image: ${imgSrc} for ${alt}`);
    if (!hasError) {
      // If we haven't tried the fallback yet
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  console.log(`CaseStudyImage rendering for: ${alt}, using src: ${imgSrc}`);

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} ${hasError ? "fallback-image" : ""}`,
    onError: handleError,
    priority,
    unoptimized: true, // Skip Next.js image optimization
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  } else {
    if (!width || !height) {
      console.warn("Width and height are required when fill=false");
      return null;
    }
    return <Image {...imageProps} width={width} height={height} />;
  }
}
