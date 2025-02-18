"use client";

import { useEffect } from "react";
import Script from "next/script";

// Declare global Calendly interface
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
      destroyBadgeWidget?: () => void;
    };
  }
}

interface CalendlyWidgetProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
}

export function CalendlyWidget({
  url = "https://calendly.com/behzad-webalora/30min",
  text = "Schedule time with me",
  color = "#0069ff",
  textColor = "#ffffff",
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Initialize widget once Calendly script is loaded
    const initWidget = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
        });
      }
    };

    // If Calendly is already loaded, initialize immediately
    if (window.Calendly) {
      initWidget();
    }

    // Add event listener for when Calendly script loads
    window.addEventListener("calendly:ready", initWidget);

    // Cleanup
    return () => {
      window.removeEventListener("calendly:ready", initWidget);

      // Destroy badge widget if it exists
      if (window.Calendly?.destroyBadgeWidget) {
        window.Calendly.destroyBadgeWidget();
      }
    };
  }, [url, text, color, textColor]);

  return (
    <>
      <Script
        id="calendly-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
}
