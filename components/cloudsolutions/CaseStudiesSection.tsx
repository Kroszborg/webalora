"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Retail Digital Transformation",
    client: "A Leading UK Retail Chain",
    description:
      "Achieved a 50% reduction in IT costs, improved system reliability, and enhanced customer engagement.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Financial Services Modernisation",
    client: "A Mid-Sized UK Financial Institution",
    description:
      "Achieved significant performance improvements, enhanced data security, and full regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Manufacturing Efficiency Boost",
    client: "A Prominent UK Manufacturing Firm",
    description:
      "Increased operational efficiency by 40% and reduced downtime significantly.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Proven Success: WebAlora&apos;s Cloud Transformation Case Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl "
            >
              <div className="relative h-48">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{study.client}</p>
                <p className="text-gray-700 mb-4">{study.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href={`#${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Read Full Case Study
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
