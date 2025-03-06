"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const successStories = [
  {
    title: "Retail Store — 78% Reduction in Shoplifting",
    description:
      "A high-street retailer was losing over £15,000 per year to theft. After installing our AI-powered CCTV system and live monitoring service, shoplifting incidents dropped by 78%. The owner remarked, We finally have peace of mind knowing that suspicious activity is caught in real time.",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1470",
    stats: [
      { value: "78%", label: "Reduction in Shoplifting" },
      { value: "£15k+", label: "Previous Annual Loss" },
      { value: "24/7", label: "Real-time Monitoring" },
    ],
  },
  {
    title: "Warehouse — Zero Unauthorised Access After Hours",
    description:
      "A distribution centre faced persistent after-hours trespassing. Our installation of 4K night-vision cameras with AI motion tracking and round-the-clock monitoring reduced unauthorised access to near zero within six months, significantly improving overall security.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1470",
    stats: [
      { value: "0", label: "Unauthorised Access Incidents" },
      { value: "6", label: "Months to Full Implementation" },
      { value: "100%", label: "After-Hours Coverage" },
    ],
  },
  {
    title: "Corporate HQ — Complete Security Overhaul & Cost Savings",
    description:
      "A large office complex upgraded to WebAlora's AI-enhanced CCTV with smart access control. The result was 100% coverage across all entry points, a 62% reduction in false alarms, and annual savings of over £20,000 in security costs.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1470",
    stats: [
      { value: "100%", label: "Entry Point Coverage" },
      { value: "62%", label: "Reduction in False Alarms" },
      { value: "£20k", label: "Annual Security Cost Savings" },
    ],
  },
];

export function SuccessStoriesSection() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () =>
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  const prevStory = () =>
    setCurrentStory(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900"
        >
          Real-World Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600"
        >
          See how our CCTV solutions have transformed security for businesses across different industries
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={
                        successStories[currentStory].image || "/placeholder.svg"
                      }
                      alt={successStories[currentStory].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-none flex items-center">
                      <h3 className="text-white text-2xl font-bold p-6 md:hidden">
                        {successStories[currentStory].title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 hidden md:block">
                    {successStories[currentStory].title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {successStories[currentStory].stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-blue-50 rounded-lg px-4 py-2 text-center"
                      >
                        <div className="text-2xl font-bold text-blue-600">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start mb-6">
                    <Quote className="text-blue-400 w-10 h-10 flex-shrink-0 mr-4 mt-1" />
                    <p className="text-gray-700 italic">
                      {successStories[currentStory].description}
                    </p>
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
              onClick={prevStory}
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/80 backdrop-blur-sm"
              onClick={nextStory}
              aria-label="Next case study"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {successStories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentStory ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentStory(index)}
              aria-label={`Go to success story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}