"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function FeaturedCaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2069"
              alt="Featured case study"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionizing Finance: The Barclays Digital Transformation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Learn how WebAlora helped Barclays modernize their IT
              infrastructure, enhance cybersecurity, and improve customer
              experiences through innovative cloud solutions.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "50% reduction in IT operational costs",
                "99.99% uptime achieved",
                "30% increase in customer satisfaction",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Read Full Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
