"use client";

import { useEffect, useRef, useState } from "react";

// Define CalendlyOptions interface
interface CalendlyOptions {
  prefill?: {
    email?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
  };
  utm?: Record<string, string>;
  hideEventTypeDetails?: boolean;
  hideGdprBanner?: boolean;
  primaryColor?: string;
}

// If you're not using a separate type declaration file, include this:
interface CalendlyWidget {
  initBadgeWidget: (config: { 
    url: string; 
    text: string; 
    color: string; 
    textColor: string; 
    branding?: boolean;
  }) => void;
  
  initPopupWidget: (options: { 
    url: string; 
    prefill?: CalendlyOptions['prefill'];
    utm?: CalendlyOptions['utm'];
    hideEventTypeDetails?: boolean;
    parentElement?: HTMLElement | null;
    height?: number;
    [key: string]: unknown;
  }) => void;
  
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement | null;
    height: number;
    prefill?: CalendlyOptions['prefill'];
    utm?: CalendlyOptions['utm'];
    hideEventTypeDetails?: boolean;
    hideGdprBanner?: boolean;
    primaryColor?: string;
    [key: string]: unknown;
  }) => void;
  
  closePopupWidget: () => void;
  destroyBadgeWidget: () => void;
}

// Declare global Window interface extension
declare global {
  interface Window {
    Calendly: CalendlyWidget | undefined;
  }
}

export function useCalendly(url: string) {
  const calendlyInitialized = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load Calendly script and CSS when the hook is first used
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      return;
    }

    // Load Calendly CSS if not already loaded
    const existingLink = document.querySelector('link[href*="calendly.com"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Load Calendly script if not already loaded
    if (!window.Calendly && !document.querySelector('script[src*="calendly.com"]')) {
      setIsLoading(true);
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setIsLoading(false);
      document.body.appendChild(script);
    }

    // Cleanup function to remove Calendly elements when component unmounts
    return () => {
      if (typeof window !== 'undefined' && window.Calendly?.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }

      // Remove any remaining Calendly elements
      const elementsToRemove = [
        ".calendly-overlay",
        ".calendly-inline-widget",
        ".calendly-popup-content",
        ".calendly-popup-close",
      ];

      elementsToRemove.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => element.remove());
      });
    };
  }, []);

  // Function to open Calendly popup with options
  const openCalendly = (
    e?: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
    options: CalendlyOptions = {}
  ) => {
    if (e) {
      e.preventDefault();
    }

    if (isLoading) {
      console.warn("Calendly is still loading, please try again.");
      return;
    }

    // Ensure we don't have any existing popups
    const existingPopup = document.querySelector(".calendly-overlay");
    if (existingPopup) {
      existingPopup.remove();
    }

    // Initialize popup with options
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        ...options
      });
      calendlyInitialized.current = true;
      setIsOpen(true);
    } else {
      console.error("Calendly is not loaded. Please check your script inclusion.");
    }
  };

  // Function to close Calendly popup
  const closeCalendly = () => {
    if (window.Calendly?.closePopupWidget) {
      window.Calendly.closePopupWidget();
      setIsOpen(false);
    }
  };

  // Function to initialize inline embedding
  const initInlineWidget = (
    elementId: string,
    options: CalendlyOptions & { height?: number } = {}
  ) => {
    if (window.Calendly) {
      const { height = 700, ...restOptions } = options;
      window.Calendly.initInlineWidget({
        url,
        parentElement: document.getElementById(elementId),
        height,
        ...restOptions
      });
    } else {
      console.error("Calendly is not loaded. Please check your script inclusion.");
    }
  };

  return {
    openCalendly,
    closeCalendly,
    initInlineWidget,
    isOpen,
    isLoading
  };
}