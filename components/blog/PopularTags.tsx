"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Tag {
  id: string;
  name: string;
}

interface PopularTagsProps {
  tags: Tag[];
}

export function PopularTags({ tags }: PopularTagsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 rounded-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <motion.div
            key={tag.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-blue-100 transition-colors duration-300"
            >
              {tag.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
