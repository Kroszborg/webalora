"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube 
} from "lucide-react";

const navigation = {
  solutions: [
    { name: "Managed IT Services", href: "/services/managed-it" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Cloud Solutions", href: "/services/cloud" },
    { name: "IT Consulting", href: "/services/consulting" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Modern Slavery Statement", href: "/modern-slavery-statement" },
  ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/webalora/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/WebAlora" },
    { name: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/company/webalora/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/webalora/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@WebAlora" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/10 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-6 h-6 text-blue-400" />
              <a
                href="tel:03300434953"
                className="text-lg text-white hover:text-blue-400 transition-colors"
              >
                0330 043 4953
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <a
                href="mailto:hello@webalora.com"
                className="text-lg text-white hover:text-blue-400 transition-colors"
              >
                hello@webalora.com
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Support</h3>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-6 h-6 text-blue-400" />
              <a
                href="tel:03300434954"
                className="text-lg text-white hover:text-blue-400 transition-colors"
              >
                0330 043 4954
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <a
                href="mailto:support@webalora.com"
                className="text-lg text-white hover:text-blue-400 transition-colors"
              >
                support@webalora.com
              </a>
            </div>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              WebAlora
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Professional IT solutions for finance and legal sectors,
              delivering excellence in technology services.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 text-center md:text-left">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0 text-center md:text-left">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0 text-center md:text-left">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="space-y-3 w-full max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-400">
                WebAlora is a trading name of WebAlora Limited.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  Head Office: WebAlora Limited, 71-75 Shelton Street, Covent
                  Garden, London, United Kingdom, WC2H 9JQ
                </p>
              </div>
              <p className="text-sm text-gray-400">
                Registered in England and Wales with company number: 16200085
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-8 space-y-4">
            <p className="text-xs leading-5 text-gray-400 text-center">
              &copy; {new Date().getFullYear()} WebAlora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
