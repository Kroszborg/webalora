"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredPosts = [
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

export function FeaturedPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative h-64">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
