"use client";

import { useEffect } from "react";
import Script from "next/script";

interface CalendlyWidgetProps {
  url: string;
  height?: number;
}

export function CalendlyWidget({ url, height = 700 }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        async
      />
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: 320, height }}
      />
    </>
  );
}
