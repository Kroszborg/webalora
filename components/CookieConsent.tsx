"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

// Cookie utility functions
const COOKIE_CONSENT_KEY = "cookie-consent-settings";


const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  // Add Secure flag if on HTTPS
  const secure = window.location.protocol === "https:" ? "Secure;" : "";
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict;${secure}`;
};

const getCookie = (name: string): string | null => {
  const cookieString = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return cookieString ? cookieString.split("=")[1] : null;
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Check for existing cookie consent on mount
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") {
      return;
    }

    const savedConsent = getCookie(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      try {
        // Parse the saved consent
        const savedSettings = JSON.parse(decodeURIComponent(savedConsent));
        setCookieSettings(savedSettings);
        setShowBanner(false); // Hide banner if settings already exist
      } catch (error) {
        console.error("Error parsing saved cookie consent:", error);
      }
    }
  }, []);

  const saveCookieSettings = (settings: CookieSettings) => {
    // Save settings to cookie that expires in 365 days
    const encodedSettings = encodeURIComponent(JSON.stringify(settings));
    setCookie(COOKIE_CONSENT_KEY, encodedSettings, 365);

    // Apply cookie settings (example implementation)
    if (settings.analytics) {
      // Enable analytics cookies
      console.log("Analytics cookies enabled");
      // Example: initializeAnalytics();
    }

    if (settings.marketing) {
      // Enable marketing cookies
      console.log("Marketing cookies enabled");
      // Example: initializeMarketingTools();
    }

    if (settings.preferences) {
      // Enable preference cookies
      console.log("Preference cookies enabled");
      // Example: initializePreferences();
    }
  };

  const handleAcceptNecessary = () => {
    setIsInitializing(true);

    // Set only necessary cookies
    const necessarySettings = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };

    setCookieSettings(necessarySettings);
    saveCookieSettings(necessarySettings);

    setTimeout(() => {
      setShowBanner(false);
      setIsInitializing(false);
      toast.success("Necessary cookies accepted.");
    }, 500);
  };

  const handleAcceptAll = () => {
    setIsInitializing(true);

    // Enable all cookies
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };

    setCookieSettings(allSettings);
    saveCookieSettings(allSettings);

    setTimeout(() => {
      setShowBanner(false);
      setIsInitializing(false);
      toast.success("All cookies accepted.");
    }, 500);
  };

  const handleSavePreferences = () => {
    setIsInitializing(true);

    // Save current preferences
    saveCookieSettings(cookieSettings);

    setTimeout(() => {
      setShowBanner(false);
      setIsInitializing(false);
      toast.success("Cookie preferences saved.");
    }, 500);
  };

  const toggleCookieSetting = (key: keyof CookieSettings) => {
    setCookieSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-lg border-t border-gray-200"
          >
            {!showPreferences ? (
              /* Main Banner */
              <div className="container mx-auto px-4 py-3 sm:py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Cookie className="h-5 w-5 text-blue-600 hidden sm:block" />
                    <p className="text-sm text-center sm:text-left text-gray-700">
                      We use cookies to enhance your experience.
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowPreferences(true)}
                      disabled={isInitializing}
                      className="text-xs py-1 h-8"
                    >
                      Cookie Settings
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAcceptNecessary}
                      disabled={isInitializing}
                      className="text-xs py-1 h-8"
                    >
                      Necessary Only
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleAcceptAll}
                      disabled={isInitializing}
                      className="text-xs py-1 h-8"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* Preferences Panel */
              <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold">
                    Cookie Preferences
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowPreferences(false)}
                      disabled={isInitializing}
                      className="text-xs h-8"
                    >
                      Back
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSavePreferences}
                      disabled={isInitializing}
                      className="text-xs h-8"
                    >
                      Save Preferences
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-2">
                  {/* Necessary Cookies */}
                  <div className="border rounded p-3 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">Essential</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        Required
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Necessary for the website to function properly.
                    </p>
                  </div>

                  {/* Other Cookie Types */}
                  {Object.entries(cookieSettings)
                    .filter(([key]) => key !== "necessary")
                    .map(([key, value]) => (
                      <div key={key} className="border rounded p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm capitalize">
                            {key}
                          </span>
                          <Switch
                            checked={value}
                            onCheckedChange={() =>
                              toggleCookieSetting(key as keyof CookieSettings)
                            }
                            aria-label={`Toggle ${key} cookies`}
                            className="scale-75"
                          />
                        </div>
                        <p className="text-xs text-gray-600">
                          {key === "analytics" &&
                            "Measures website performance."}
                          {key === "marketing" &&
                            "Personalizes advertisements."}
                          {key === "preferences" &&
                            "Remembers your site preferences."}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
