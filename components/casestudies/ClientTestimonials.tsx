
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "WebAlora's expertise in cloud migration was instrumental in our digital transformation journey. They delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CTO, HSBC",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "The cybersecurity solutions implemented by WebAlora have significantly enhanced our data protection measures. Their team's professionalism is unmatched.",
    author: "Mark Thompson",
    position: "Head of IT Security, NHS Digital",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote:
      "WebAlora's AI-driven inventory management system has revolutionized our supply chain efficiency. We've seen remarkable improvements in our operations.",
    author: "Emily Chen",
    position: "Supply Chain Director, Tesco",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            >
              <Quote className="text-blue-300 mb-4 h-8 w-8" />
              <p className="text-white mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-blue-200 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

