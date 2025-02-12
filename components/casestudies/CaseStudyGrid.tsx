"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "HSBC's Cloud Migration Success",
    description:
      "Seamless transition to a hybrid cloud environment, enhancing security and scalability.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000",
    industry: "Banking",
  },
  {
    title: "NHS Digital Transformation",
    description:
      "Modernizing healthcare IT systems to improve patient care and operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    industry: "Healthcare",
  },
  {
    title: "Tesco's AI-Powered Supply Chain",
    description:
      "Implementing AI and machine learning to optimize inventory management and reduce waste.",
    image:
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1000",
    industry: "Retail",
  },
];

export function CaseStudyGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          More Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {study.industry}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#" className="flex items-center justify-center">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
