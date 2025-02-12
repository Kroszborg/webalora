"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 Essential DevOps Practices for Efficient IT Teams",
    excerpt:
      "Discover key DevOps practices that can significantly improve your IT team's efficiency and productivity.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
    category: "DevOps",
    date: "July 10, 2023",
  },
  {
    title: "The Rise of Edge Computing in Enterprise IT",
    excerpt:
      "Explore how edge computing is transforming enterprise IT and its potential impact on various industries.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
    category: "Edge Computing",
    date: "August 5, 2023",
  },
  {
    title: "AI-Powered IT Service Management: A Game Changer",
    excerpt:
      "Learn how artificial intelligence is revolutionizing IT service management and improving user experiences.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
    category: "AI & Machine Learning",
    date: "September 20, 2023",
  },
  // Add more blog posts as needed
];

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {post.category}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
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
  );
}
