import { useRef } from "react";

export function useCalendly(url: string) {
  const calendlyInitialized = useRef(false);
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