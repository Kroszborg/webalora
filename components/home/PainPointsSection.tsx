"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useCalendly } from "@/lib/hooks/useCalendly";
import Link from "next/link";

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
  const { openCalendly } = useCalendly(
    "https://calendly.com/behzad-webalora/30min"
  );

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 pb-2">
            Transforming IT Challenges into Growth Opportunities
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            We address your most pressing IT concerns with tailored solutions
          </p>
        </motion.div>
        <Link href="/services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl"
              >
                {/* Card Background with adjusted opacity */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-[2px] z-10" />

                {/* Image Background with adjusted opacity */}
                <div className="absolute inset-0">
                  <Image
                    src={point.image || "/placeholder.svg"}
                    alt={point.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 object-cover"
                    priority={index < 2}
                  />
                  {/* Refined gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900/90" />
                </div>

                {/* Content */}
                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/95 rounded-full p-2 backdrop-blur-sm shadow-lg">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 drop-shadow-md">
                        {point.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-100 leading-relaxed drop-shadow-md">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </Link>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="relative px-6 md:px-8 py-3 md:py-6 text-base md:text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <a
              href="#"
              onClick={openCalendly}
              className="flex items-center gap-2"
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
