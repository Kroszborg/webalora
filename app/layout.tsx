// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/advantages.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CalendlyWidget } from "@/components/calendly-widget";
import type { Metadata } from "next";
import type React from "react";
import { CookieConsent } from "@/components/CookieConsent";
import { Toaster } from "sonner";
import { CmsDataProvider } from "@/components/CmsDataProvider";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { validateEnv } from "@/lib/env";
import ErrorBoundary from "@/components/ErrorBoundary";

// Try to validate environment variables
try {
  validateEnv();
} catch (error) {
  console.error("Environment validation failed:", error);
  // In production, you might want to log this but not crash the app
}

const inter = Inter({ subsets: ["latin"] });

// Define CSP directives
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://assets.calendly.com https://cdnjs.cloudflare.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
  style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com;
  img-src 'self' data: https: http:;
  connect-src 'self' https://cms.webalora.com https://cms.webalora.com;
  font-src 'self' https://fonts.gstatic.com;
  frame-src 'self' https://calendly.com https://www.google.com/;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

export const metadata: Metadata = {
  title: "WebAlora",
  description: "Managed IT Services & Cybersecurity Solutions",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/preview.ico", sizes: "32x32" },
      { url: "/preview.png", sizes: "192x192" },
    ],
    apple: { url: "/black_logo.png" },
  },
  // Add security headers
  other: {
    "Content-Security-Policy": contentSecurityPolicy,
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Add DNS prefetch for external domains to improve performance */}
        <link rel="dns-prefetch" href="https://cms.webalora.com" />
        <link rel="dns-prefetch" href="https://cms.webalora.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />

        {/* Add preconnect for critical resources */}
        <link rel="preconnect" href="https://cms.webalora.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >
        <ErrorBoundary>
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* Add a spacer div that matches the larger header height */}
            <div className="h-20 md:h-8"></div>
            <main className="flex-grow">
              <CmsDataProvider>{children}</CmsDataProvider>
              <Toaster />
            </main>
            <Footer />
            {/* Ensure CookieConsent is rendered after CalendlyWidget in the DOM */}
            <CalendlyWidget
              url="https://calendly.com/behzad-webalora/30min"
              text="Book a Free Consultation"
              color="#0069ff"
              textColor="#ffffff"
            />
            <CookieConsent />
          </div>
        </ErrorBoundary>

        {/* Register service worker for offline support */}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
