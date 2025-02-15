"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Shield, Lock } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <Image
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
        alt="Cybersecurity Background"
        layout="fill"
        objectFit="cover"
        className="opacity-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Shield className="w-12 h-12 text-blue-400" />
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait for a breach to discover your vulnerabilities. Let
            WebAlora&apos;s cutting-edge cybersecurity solutions safeguard your
            data, reputation, and bottom line.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl "
              >
                <Link href="/contact" className="flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  <span>Book My Free Security Assessment</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-filter backdrop-blur-lg border-2 border-white/50 text-white hover:bg-white/20 hover:border-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl "
              >
                <Link href="#download-guide" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  <span>Download Cybersecurity Best Practices Guide</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="rgba(59, 130, 246, 0.1)"
            fillOpacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
