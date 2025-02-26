"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          >
            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
              {!showPreferences ? (
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-start gap-4">
                      <Cookie
                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <div>
                        <h2
                          id="cookie-consent-title"
                          className="text-xl font-semibold mb-2"
                        >
                          We value your privacy
                        </h2>
                        <p className="text-gray-600">
                          We use cookies to enhance your browsing experience,
                          serve personalized content, and analyze our traffic.
                          By clicking &quot;Accept All&quot;, you consent to our
                          use of cookies. Read our{" "}
                          <a
                            href="/privacy-policy"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </a>{" "}
                          for more information.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setShowPreferences(true)}
                        disabled={isInitializing}
                        className="flex-1 sm:flex-none"
                      >
                        Cookie Settings
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleAcceptNecessary}
                        disabled={isInitializing}
                        className="flex-1 sm:flex-none"
                      >
                        Necessary Only
                      </Button>
                      <Button
                        onClick={handleAcceptAll}
                        disabled={isInitializing}
                        className="flex-1 sm:flex-none"
                      >
                        {isInitializing ? "Saving..." : "Accept All"}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2
                        id="cookie-preferences-title"
                        className="text-xl font-semibold mb-2"
                      >
                        Cookie Preferences
                      </h2>
                      <p className="text-gray-600">
                        Manage your cookie preferences. Essential cookies cannot
                        be disabled as they are required for the website to
                        function properly.
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowPreferences(false)}
                      aria-label="Back to main cookie settings"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="necessary">
                      <AccordionTrigger className="flex justify-between">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold">
                            Essential Cookies
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            Always Active
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-gray-600">
                          These cookies are necessary for the website to
                          function and cannot be switched off. They are usually
                          only set in response to actions made by you which
                          amount to a request for services, such as setting your
                          privacy preferences, logging in or filling in forms.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    {Object.entries(cookieSettings)
                      .filter(([key]) => key !== "necessary")
                      .map(([key, value]) => (
                        <AccordionItem key={key} value={key}>
                          <AccordionTrigger>
                            <div className="flex items-center gap-4">
                              <span className="font-semibold capitalize">
                                {key} Cookies
                              </span>
                              <Switch
                                checked={value}
                                onCheckedChange={() =>
                                  toggleCookieSetting(
                                    key as keyof CookieSettings
                                  )
                                }
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Toggle ${key} cookies`}
                              />
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm text-gray-600">
                              {key === "analytics" &&
                                "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."}
                              {key === "marketing" &&
                                "These cookies may be set through our site by our advertising partners to build a profile of your interests."}
                              {key === "preferences" &&
                                "These cookies enable the website to provide enhanced functionality and personalisation."}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>

                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowPreferences(false)}
                      disabled={isInitializing}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSavePreferences}
                      disabled={isInitializing}
                    >
                      {isInitializing ? "Saving..." : "Save Preferences"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
