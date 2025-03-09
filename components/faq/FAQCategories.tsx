"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  Settings,
  Shield,
  Cloud,
  PhoneCall,
  Network,
  Database,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FAQCategories() {
  const categories = [
    { icon: HelpCircle, title: "General", target: "general-questions" },
    { icon: Settings, title: "Services", target: "managed-it-services" },
    { icon: Shield, title: "Cybersecurity", target: "cybersecurity" },
    { icon: Cloud, title: "Cloud", target: "cloud-solutions" },
    { icon: Network, title: "Network", target: "network-infrastructure" },
    { icon: Database, title: "Backup", target: "backup-recovery" },
    { icon: PhoneCall, title: "VOIP", target: "voip-solutions" },
    { icon: FileCheck, title: "CCTV", target: "cctv-solutions" },
  ];

  const handleCategoryClick = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Browse FAQ Categories
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Button
                variant="outline"
                className="w-full h-auto aspect-square flex flex-col gap-3 p-4 rounded-xl border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                onClick={() => handleCategoryClick(category.target)}
              >
                <category.icon className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {category.title}
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
