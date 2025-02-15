"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        alt="Digital Network Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90 z-10" />

      {/* Glassmorphism elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              WebAlora
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering global enterprises with cutting-edge technology solutions
            and unparalleled expertise.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100 transition-colors duration-300"
            >
              <a
                href="mailto:hello@webalora.com"
                className="flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>hello@webalora.com</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-colors duration-300 "
            >
              <a href="tel:03301849124" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>0330 184 9124</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Global Headquarters
            </h2>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>71–75 Shelton Street, Covent Garden, London, UK</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
