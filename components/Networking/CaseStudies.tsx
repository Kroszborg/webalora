"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "Fortifying Financial Services",
    client: "A Mid-Sized UK Financial Institution",
    challenge:
      "The need to secure sensitive data and comply with stringent data protection laws.",
    solution:
      "Our team deployed a multi-layered security framework featuring encrypted VPNs, advanced firewalls, and continuous threat monitoring.",
    outcome:
      "Enhanced security posture, achieved full GDPR compliance, and reduced security incidents by 50%.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Streamlining Retail Operations",
    client: "A Leading UK Retail Chain",
    challenge:
      "Outdated network infrastructure causing frequent outages and slow data transfer between stores.",
    solution:
      "Implemented a robust SD-WAN solution with centralized management and real-time analytics.",
    outcome:
      "99.99% network uptime, 40% faster data transfer, and significant cost savings on IT management.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1470",
  },
  {
    title: "Empowering Remote Workforce",
    client: "A Global Consulting Firm",
    challenge:
      "Enabling secure and efficient remote work for a distributed team of over 5000 consultants.",
    solution:
      "Designed a scalable cloud-based network infrastructure with advanced identity management and collaboration tools.",
    outcome:
      "30% increase in productivity, seamless global collaboration, and enhanced data security for remote workers.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1474",
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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Proven Success: WebAlora&apos;s Case Studies
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
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
                  <div className="mt-6">
                    <Button asChild variant="default" className="w-full">
                      <Link
                        href={`#${caseStudies[currentStudy].title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-8">
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
        <div className="mt-8 flex justify-center space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentStudy ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentStudy(index)}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
