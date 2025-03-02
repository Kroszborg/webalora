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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/preview.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >
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
      </body>
    </html>
  );
}
