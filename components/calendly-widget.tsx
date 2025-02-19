"use client";

import { useEffect, useRef } from "react";

interface CalendlyWidgetProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
}

export function CalendlyWidget({
  url = "https://calendly.com/behzad-webalora/30min",
  text = "Book a Free Consultation",
  color = "#0069ff",
  textColor = "#ffffff",
}: CalendlyWidgetProps) {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const loadCalendlyScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initializeWidget;
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    };

    const initializeWidget = () => {
      if (!window.Calendly || isInitialized.current) {
        return;
      }

      // Clean up any existing widgets first
      if (window.Calendly.destroyBadgeWidget) {
        window.Calendly.destroyBadgeWidget();
      }

      window.Calendly.initBadgeWidget({
        url,
        text,
        color,
        textColor,
        branding: false,
      });

      isInitialized.current = true;
    };

    if (window.Calendly) {
      initializeWidget();
    } else {
      loadCalendlyScript();
    }

    return () => {
      if (window.Calendly?.destroyBadgeWidget) {
        window.Calendly.destroyBadgeWidget();
      }

      const elementsToRemove = [
        ".calendly-overlay",
        ".calendly-inline-widget",
        ".calendly-popup-content",
        ".calendly-popup-close",
        'iframe[src*="calendly.com"]',
      ];

      elementsToRemove.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => el.remove());
      });
    };
  }, [url, text, color, textColor]);

  return null;
}
