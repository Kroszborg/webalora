"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SWRConfig, Cache, SWRConfiguration } from "swr";
import { GlobalPrefetcher } from "./prefetching";
import { motion, AnimatePresence } from "framer-motion";
import { ProgressiveLoader } from "./loading";

// Define a properly typed cache provider
const localStorageProvider = () => {
  // When initializing, restore from localStorage
  const map = new Map<string, unknown>(
    JSON.parse(localStorage.getItem("app-cache") || "[]")
  );

  // Before unloading (closing tab, refreshing), save to localStorage
  if (typeof window !== "undefined") {
    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      localStorage.setItem("app-cache", appCache);
    });
  }

  // Return a properly typed Cache object that SWR expects
  return map as unknown as Cache;
};

const swrConfig: SWRConfiguration = {
  errorRetryCount: 3,
  revalidateOnFocus: false,
  provider: () => localStorageProvider(),
};

interface PerformanceWrapperProps {
  children: React.ReactNode;
}

export function PerformanceWrapper({ children }: PerformanceWrapperProps) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [prevPathname, setPrevPathname] = useState("");

  // Detect navigation for showing loading indicators
  useEffect(() => {
    if (prevPathname && prevPathname !== pathname) {
      setIsNavigating(true);
      // Hide loader after a delay
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (pathname) {
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  // Additional performance optimizations
  useEffect(() => {
    // Analytics, fonts and third-party scripts can cause significant page slowdowns
    // Load these only after the main content is visible
    const loadNonCriticalResources = () => {
      // Examples of scripts you might load after page render
      // Import third-party analytics
      // Load chat widgets
      // Load custom fonts
    };

    // Use requestIdleCallback for non-critical operations
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (
        window as unknown as {
          requestIdleCallback: (callback: () => void) => void;
        }
      ).requestIdleCallback(loadNonCriticalResources);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(loadNonCriticalResources, 5000);
    }
  }, []);

  // Use SWRConfig to set up global config for SWR
  return (
    <SWRConfig value={swrConfig}>
      <ProgressiveLoader isVisible={isNavigating} />

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <GlobalPrefetcher />
    </SWRConfig>
  );
}
