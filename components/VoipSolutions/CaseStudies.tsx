"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "Unified Communications Upgrade for a Financial Institution",
    client: "A Mid-Sized UK Financial Firm",
    challenge:
      "Inefficient communication channels leading to reduced collaboration and operational delays.",
    solution:
      "Our team deployed a unified communications platform that integrated voice, video conferencing, and instant messaging.",
    outcome:
      "Streamlined internal communications, increased productivity by 35%, and improved overall client engagement.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Enhancing Collaboration in Manufacturing",
    client: "A Prominent UK Manufacturing Company",
    challenge:
      "Traditional phone systems were inadequate for coordinating multi-site operations and supporting remote teams.",
    solution:
      "WebAlora introduced a comprehensive VOIP solution with real-time analytics, advanced call management, and secure mobile integration.",
    outcome:
      "Boosted operational efficiency by 30%, improved cross-site collaboration, and significantly reduced communication disruptions.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000",
  },
];

export function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0);

  const nextStudy = () =>
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
  const prevStudy = () =>
    setCurrentStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Proven Success: WebAlora&apos;s VOIP Case Studies
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={
                        caseStudies[currentStudy].image || "/placeholder.svg"
                      }
                      alt={caseStudies[currentStudy].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {caseStudies[currentStudy].title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {caseStudies[currentStudy].client}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Challenge:
                      </h4>
                      <p className="text-gray-700">
                        {caseStudies[currentStudy].challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution:</h4>
                      <p className="text-gray-700">
                        {caseStudies[currentStudy].solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Outcome:</h4>
                      <p className="text-gray-700">
                        {caseStudies[currentStudy].outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/80 backdrop-blur-sm"
              onClick={prevStudy}
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/80 backdrop-blur-sm"
              onClick={nextStudy}
              aria-label="Next case study"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
