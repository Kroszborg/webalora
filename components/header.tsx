"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "IT Services", href: "/services" },
    { name: "Cybersecurity Solutions", href: "/cybersecurity-solutions" },
    { name: "Cloud Solutions & Migration", href: "/cloud-solutions" },
    { name: "IT Consultancy", href: "/consultancy" },
    { name: "Network Infrastructure", href: "/networking" },
    { name: "Backup & Disaster Recovery", href: "/backup" },
    { name: "VOIP Solutions", href: "/voip-solutions" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: services,
    },
    { name: "About Us", href: "/about" },
    {
      name: "Resources",
      href: "#",
      dropdown: resources,
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo.png"
              alt="WebAlora Logo"
              width={150}
              height={40}
              className="transition-opacity duration-300"
              style={{
                opacity: scrolled ? 1 : 0.9,
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center text-sm font-semibold ${
                    scrolled
                      ? "text-gray-900 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  } transition-colors duration-300`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      activeDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
                          <ChevronRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="tel:03300434953"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              } transition-colors duration-300`}
            >
              <Phone className="h-4 w-4" />
              0330 043 4953
            </Link>

            <Button
              asChild
              className={`${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              } border border-transparent hover:border-white/50 transition-all duration-300`}
            >
              <Link href="/contact">Contact Us</Link>
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
              aria-label="Open main menu"
            >
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
              className="absolute top-0 left-0 right-0 z-[100] bg-white shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
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
                      alt="WebAlora Logo"
                      width={150}
                      height={40}
                      priority
                    />
                  </Link>
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="py-6 space-y-6">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-4">
                      <Link
                        href={item.href}
                        className="block text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300"
                        onClick={() => {
                          if (!item.dropdown) {
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href="tel:03300434953"
                      className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mb-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      0330 043 4953
                    </Link>
                    <Button
                      asChild
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
