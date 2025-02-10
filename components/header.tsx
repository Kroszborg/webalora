"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionClick(e, "top"),
    },
    {
      name: "About",
      href: "#about",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionClick(e, "about"),
    },
    {
      name: "Services",
      href: "#services",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSectionClick(e, "services"),
    },
  ];

  return (
    <header
      className={`fixed w-full z-[90] transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="transition-opacity duration-300"
                style={{
                  opacity: scrolled ? 1 : 0.9,
                }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className={`text-sm font-semibold ${
                  scrolled
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="tel:0345000000"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              } transition-colors duration-300`}
            >
              <Phone className="h-4 w-4" />
              0345 000 0000
            </Link>
            <Button
              asChild
              className={`${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              } transition-all duration-300 border border-transparent hover:border-white/50`}
            >
              <Link
                href="#contact"
                onClick={(e) => handleSectionClick(e, "contact")}
              >
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                scrolled ? "text-gray-900" : "text-white"
              } hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-[95]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 left-0 right-0 z-[100] bg-white shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/logos/logo.png"
                      alt="Logo"
                      width={150}
                      height={40}
                      priority
                    />
                  </Link>
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="py-6 space-y-4 text-center">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={item.onClick}
                      className="block text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="tel:0345000000"
                    className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5" />
                    0345 000 0000
                  </Link>
                  <Button
                    asChild
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Link
                      href="#contact"
                      onClick={(e) => handleSectionClick(e, "contact")}
                    >
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
