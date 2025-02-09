"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { GradientBlob } from "@/components/ui/gradient-blob";

export const LeadMagnetSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <GradientBlob
        colors={["#3b82f6", "#2dd4bf"]}
        className="top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlob
        colors={["#8b5cf6", "#ec4899"]}
        className="bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2"
      />

      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Free Resource: &quot;Top 10 IT Mistakes That Could Be Holding Your
            Business Back&quot;
          </h2>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Download our exclusive guide to learn how to avoid common IT
            pitfalls and maximise your business potential.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group"
          >
            <Link href="#download">
              <Download className="mr-2 h-5 w-5" />
              Access the Free Guide Instantly!
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
