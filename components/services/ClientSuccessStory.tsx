"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { Quote } from "lucide-react";

export function ClientSuccessStory() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
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
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Client Success Story
        </motion.h2>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sarah Robertson"
                width={300}
                height={300}
                className="rounded-full shadow-2xl"
              />
            </div>
            <div className="md:w-2/3">
              <Quote className="w-12 h-12 text-blue-300 mb-4" />
              <blockquote className="text-xl italic mb-6 text-blue-100">
                &quot;Before working with WebAlora, server crashes and IT headaches
                were our norm. Now, we&apos;ve cut IT spend by 30% and reduced
                downtime by 60%. Their support is worth every penny.&quot;
              </blockquote>
              <p className="font-semibold text-white mb-6">
                — Sarah Robertson, Operations Manager at Brighton Financial
              </p>
              <div className="space-y-4 text-blue-200">
                <p>
                  <strong className="text-white">Challenge:</strong> Frequent
                  server outages, escalating IT costs.
                </p>
                <p>
                  <strong className="text-white">Solution:</strong> 24/7
                  monitoring, cloud migration, and strategic consultancy.
                </p>
                <p>
                  <strong className="text-white">Result:</strong> 40% fewer
                  helpdesk tickets, major downtime drop, and full ISO 27001
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
