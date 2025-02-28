"use client";

import { useState } from "react";
import Image from "next/image";

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
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    console.error(`Failed to load resource image: ${imgSrc} for ${alt}`);
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  console.log(`ResourceImage rendering for: ${alt}`);
  console.log(`Using image source: ${imgSrc}`);

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} ${hasError ? "fallback-image" : ""}`,
    onError: handleImageError,
    priority,
    unoptimized: true, // Skip Next.js image optimization
  };

  if (fill) {
    return <Image {...imageProps} alt={alt} fill />;
  } else {
    if (!width || !height) {
      console.warn("Width and height are required when fill=false");
      return null;
    }
    return <Image {...imageProps} alt={alt} width={width} height={height} />;
  }
}
