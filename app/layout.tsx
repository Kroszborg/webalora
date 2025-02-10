import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/advantages.css";
import { Header } from "@/components/header";
import type React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

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
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">WebAlora</h3>
                <p className="mb-4 text-gray-400">
                  Empowering businesses with cutting-edge IT solutions.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <LinkedIn size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services/managed-it"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Managed IT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cybersecurity"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cloud-solutions"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/it-consulting"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      IT Consulting
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-400">123 Tech Street, Digital City</p>
                <p className="text-gray-400">contact@webalora.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} WebAlora. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
