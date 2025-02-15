"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const featuredBlogs = [
  {
    title: "The Future of Cloud Computing: Trends to Watch",
    excerpt:
      "Explore the latest advancements in cloud technology and how they're shaping the future of IT infrastructure.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    category: "Cloud Computing",
    date: "May 15, 2023",
  },
  {
    title: "Cybersecurity Best Practices for Remote Work",
    excerpt:
      "Learn how to protect your organization's data and systems in an increasingly remote work environment.",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=2070",
    category: "Cybersecurity",
    date: "June 2, 2023",
  },
];

export function FeaturedBlogsSection() {
  const [currentBlog, setCurrentBlog] = useState(0);

  const nextBlog = () => {
    setCurrentBlog((prev) => (prev + 1) % featuredBlogs.length);
  };

  const prevBlog = () => {
    setCurrentBlog(
      (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the curve with our latest articles and industry
            insights.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentBlog}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={featuredBlogs[currentBlog].image || "/placeholder.svg"}
                alt={featuredBlogs[currentBlog].title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {featuredBlogs[currentBlog].category}
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {featuredBlogs[currentBlog].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {featuredBlogs[currentBlog].excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {featuredBlogs[currentBlog].date}
                </span>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
          <button
            title="Previous Blog"
            onClick={prevBlog}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            title="Next Blog"
            onClick={nextBlog}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link href="/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
