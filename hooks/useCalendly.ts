import { useEffect, useRef } from "react";

export function useCalendly(url: string) {
  const calendlyInitialized = useRef(false);

  useEffect(() => {
    // Only add the CSS if it doesn't already exist
    const existingLink = document.querySelector('link[href*="calendly.com"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    return () => {
      // Clean up Calendly widget elements if they exist
      const elementsToRemove = [
        ".calendly-overlay",
        ".calendly-inline-widget",
        ".calendly-popup-content",
        ".calendly-popup-close",
      ];

      elementsToRemove.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => element.remove());
      });

      // Close popup if it's open
      if (window.Calendly?.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }

      // Clean up iframes
      const iframes = document.querySelectorAll('iframe[src*="calendly.com"]');
      iframes.forEach((iframe) => iframe.remove());
    };
  }, []);

  const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Ensure we don't have any existing popups
    const existingPopup = document.querySelector(".calendly-overlay");
    if (existingPopup) {
      existingPopup.remove();
    }

    // Initialize popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
      });
      calendlyInitialized.current = true;
    }
  };

  return { openCalendly };
}
