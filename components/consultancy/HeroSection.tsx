"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
          alt="IT Consultancy Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
        />
      </div>
      {/* Glassmorphism elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/30 rounded-full filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100dvh-8rem)]">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-200 text-sm mb-4">
                IT Consultancy & Strategy Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Transforming Businesses with Expert IT Consultancy & Strategy
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              In today&apos;s fast-moving digital world, technology is the
              backbone of business success. At WebAlora, we provide expert IT
              Consultancy & Strategy Services to help businesses optimise their
              IT infrastructure, enhance security, and future-proof operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto"
              >
                <Link href="#contact" className="flex items-center">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-blue-900 hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href="#assessment">Take IT Assessment</Link>
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
                alt="IT Consultancy"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
