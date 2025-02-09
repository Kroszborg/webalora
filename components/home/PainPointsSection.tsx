"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const painPoints = [
  {
    title: "Downtime Affecting Productivity?",
    description:
      "Our proactive monitoring and rapid response ensure your systems run smoothly with minimal interruptions.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    title: "Escalating IT Expenses?",
    description:
      "We provide cost-effective, scalable IT solutions that align with your business goals.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    title: "Concerns About Data Security?",
    description:
      "Our cutting-edge cybersecurity services protect your sensitive data and ensure compliance with industry standards.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
  },
  {
    title: "Struggling with Technology?",
    description:
      "We modernise your infrastructure with innovative cloud solutions and streamlined network systems.",
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80",
  },
];

export const PainPointsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Transforming IT Challenges into Growth Opportunities"
          subtitle="We address your most pressing IT concerns with tailored solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0">
                <Image
                  src={point.image || "/placeholder.svg"}
                  alt={point.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90" />
              </div>

              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-200">{point.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group"
          >
            <Link href="#contact">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
