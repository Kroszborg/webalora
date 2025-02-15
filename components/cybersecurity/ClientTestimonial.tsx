"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { Quote } from "lucide-react";

export function ClientTestimonial() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Laura Green"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <Quote className="w-12 h-12 text-blue-400 mb-4" />
              <p className="text-xl text-white mb-4">
                &quot;We partnered with WebAlora after a phishing attack nearly
                jeopardized our operations. Within weeks, their SOC identified
                multiple attempted breaches and neutralized them before any
                damage could occur. Our team is now fully trained, and we
                haven&apos;t had a single incident since.&quot;
              </p>
              <p className="text-lg font-semibold text-blue-300">
                — Laura Green, COO, Zenith Logistics
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-blue-200">
                  <span className="font-semibold">Challenge:</span> Frequent
                  phishing attempts, lack of incident response plan, outdated
                  antivirus.
                </p>
                <p className="text-blue-200">
                  <span className="font-semibold">Solution:</span>{" "}
                  WebAlora&apos;s SOC monitoring, staff training, and next-gen
                  endpoint security.
                </p>
                <p className="text-blue-200">
                  <span className="font-semibold">Result:</span> Zero successful
                  breaches in over 12 months, with significantly improved
                  employee awareness.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
