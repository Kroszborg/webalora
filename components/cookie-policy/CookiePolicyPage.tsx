"use client";
import { useState, useEffect } from "react";
import { Cookie, ChevronRight } from "lucide-react";
import { TableOfContents } from "./TableOfContents";
import { PolicyContent } from "./PolicyContent";
import Image from "next/image";

export function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isMobile, setIsMobile] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    checkMobile();
    updateHeaderHeight();

    const handleResize = () => {
      checkMobile();
      updateHeaderHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isMobile) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24 px-4 overflow-hidden"
        style={{ paddingTop: `calc(${headerHeight}px + 4rem)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Cookie Policy Background"
          fill
          className="object-cover object-center mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Cookie className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Cookie Policy
          </h1>
          <div className="flex items-center justify-center text-blue-100 text-sm md:text-base">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Cookie Policy</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: February 27, 2025
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Table of Contents - Hidden on mobile */}
              <div className="md:w-1/4 hidden md:block">
                <div className="sticky top-24">
                  <TableOfContents
                    activeSection={activeSection}
                    onSectionChange={handleSectionChange}
                  />
                </div>
              </div>
              {/* Main Content */}
              <div className="md:w-3/4">
                <PolicyContent activeSection={activeSection} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
