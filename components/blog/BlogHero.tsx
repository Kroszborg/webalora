"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Cpu, Cloud, Shield } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
        alt="London Skyline"
        fill
        className="opacity-30 object-cover"
        priority
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Insights for the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Vanguard
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cutting-edge analysis and expert perspectives on IT trends shaping
            the future of business in the UK and beyond.
          </p>
          <form
            onSubmit={handleSearch}
            className="flex items-center max-w-md mx-auto bg-white rounded-full p-1 mb-8"
          >
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent border-none text-gray-800 placeholder-gray-500 focus:ring-0 focus:outline-none"
            />
            <Button
              type="submit"
              size="sm"
              className="rounded-full bg-blue-600 hover:bg-blue-700"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <div className="flex justify-center space-x-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-blue-600/20 p-3 rounded-full mb-2">
                <Cpu className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-blue-200 text-sm">IT Infrastructure</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-purple-600/20 p-3 rounded-full mb-2">
                <Cloud className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-blue-200 text-sm">Cloud Solutions</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-indigo-600/20 p-3 rounded-full mb-2">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <span className="text-blue-200 text-sm">Cybersecurity</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
