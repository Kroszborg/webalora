"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const clientTestimonials = [
  {
    client: "Shield Capital",
    industry: "Finance",
    quote:
      "WebAlora transformed our IT infrastructure, improving security and efficiency. Cyber threats are no longer a concern, and our response time to clients has never been better.",
    person: "James Cartwright",
    title: "CIO at Shield Capital",
    challenge:
      "Outdated security measures and slow IT systems, causing compliance risks and client delays.",
    solution:
      "Cybersecurity overhaul, implementation of zero-trust security, and real-time threat monitoring.",
    result:
      "99.9% uptime, full FCA compliance, and a 50% improvement in system performance.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1470",
    personImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1470",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "50%", label: "System Performance Improvement" },
      { value: "100%", label: "FCA Compliance" },
    ],
  },
  {
    client: "Hamilton & Co. Solicitors",
    industry: "Legal",
    quote:
      "Our firm relied on slow, outdated IT systems. WebAlora migrated us to a secure cloud environment, allowing our legal teams to work seamlessly from anywhere.",
    person: "Emma Wells",
    title: "Managing Partner at Hamilton & Co. Solicitors",
    challenge:
      "Legacy systems, remote work difficulties, and data security concerns.",
    solution:
      "Cloud migration with encrypted storage, secure remote access, and compliance-focused IT support.",
    result:
      "60% faster case file access, improved client data security, and enhanced remote work capabilities.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1470",
    personImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1470",
    stats: [
      { value: "60%", label: "Faster File Access" },
      { value: "100%", label: "Data Compliance" },
      { value: "24/7", label: "Remote Capabilities" },
    ],
  },
  {
    client: "St. Anne's Private Clinic",
    industry: "Healthcare",
    quote:
      "With WebAlora, we have zero IT worries. Our patient records are secure, and our systems run smoothly, allowing us to focus on care.",
    person: "Dr. Mark Ellis",
    title: "Director at St. Anne's Private Clinic",
    challenge:
      "Unreliable IT infrastructure affecting patient management and compliance risks with healthcare regulations.",
    solution:
      "HIPAA/GDPR-compliant IT systems, robust data backup solutions, and 24/7 support.",
    result:
      "70% faster patient data retrieval, full compliance with medical data regulations, and 24/7 system reliability.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1470",
    personImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1470",
    stats: [
      { value: "70%", label: "Faster Data Retrieval" },
      { value: "100%", label: "Medical Compliance" },
      { value: "24/7", label: "System Reliability" },
    ],
  },
];

export function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % clientTestimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + clientTestimonials.length) % clientTestimonials.length
    );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
        >
          Client Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-center max-w-3xl mx-auto mb-12 text-blue-200"
        >
          See how we7apos;ve helped businesses across different industries transform
          their IT infrastructure
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative h-80 md:h-auto">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-blue-800/30"></div>
                    <Image
                      src={clientTestimonials[currentTestimonial].image}
                      alt={clientTestimonials[currentTestimonial].client}
                      fill
                      className="object-cover mix-blend-overlay"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                    <div
                      className="absolute left-0 top-0 bg-blue-600 px-6 py-2 text-sm font-medium text-white z-10"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                      }}
                    >
                      {clientTestimonials[currentTestimonial].industry}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {clientTestimonials[currentTestimonial].client}
                    </h3>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-blue-300 flex-shrink-0 bg-blue-900">
                        <Image
                          src={
                            clientTestimonials[currentTestimonial].personImage
                          }
                          alt={clientTestimonials[currentTestimonial].person}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {clientTestimonials[currentTestimonial].person}
                        </p>
                        <p className="text-blue-200 text-sm">
                          {clientTestimonials[currentTestimonial].title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-3/5 bg-white/5">
                  <div className="flex flex-col md:flex-row items-start mb-6">
                    <Quote className="text-blue-300 w-10 h-10 flex-shrink-0 mb-2 md:mb-0 md:mr-4 md:mt-1" />
                    <p className="text-blue-100 italic text-lg">
                      {clientTestimonials[currentTestimonial].quote}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {clientTestimonials[currentTestimonial].stats.map(
                      (stat, index) => (
                        <div
                          key={index}
                          className="bg-white/10 rounded-lg px-4 py-3 text-center"
                        >
                          <div className="text-2xl font-bold text-blue-300">
                            {stat.value}
                          </div>
                          <div className="text-sm text-blue-100">
                            {stat.label}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="space-y-4 text-blue-200">
                    <p>
                      <strong className="text-white">Challenge:</strong>{" "}
                      {clientTestimonials[currentTestimonial].challenge}
                    </p>
                    <p>
                      <strong className="text-white">Solution:</strong>{" "}
                      {clientTestimonials[currentTestimonial].solution}
                    </p>
                    <p>
                      <strong className="text-white">Result:</strong>{" "}
                      {clientTestimonials[currentTestimonial].result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-4 z-20">
            <Button
              variant="outline"
              size="icon"
              className="bg-blue-900/60 backdrop-blur-sm border-white/20 text-white hover:bg-blue-800/80 shadow-lg"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-blue-900/60 backdrop-blur-sm border-white/20 text-white hover:bg-blue-800/80 shadow-lg"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {clientTestimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-blue-400" : "bg-white/30"
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
