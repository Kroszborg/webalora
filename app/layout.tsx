import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/advantages.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CalendlyWidget } from "@/components/calendly-widget";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebAlora - Professional IT Solutions",
  description:
    "Expert IT support and managed services for finance and legal sectors",
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
          <main className="flex-grow">{children}</main>
          <Footer />
          <CalendlyWidget />
        </div>
      </body>
    </html>
  );
}
