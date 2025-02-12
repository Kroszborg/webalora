"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Cloud Computing",
  "Cybersecurity",
  "DevOps",
  "AI & Machine Learning",
  "Edge Computing",
];

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
