"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function OurMission() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At WebAlora, our mission is to provide cutting-edge technology
              solutions that are reliable, secure, and aligned with our clients&apos;
              business goals. We are dedicated to fostering innovation,
              efficiency, and resilience, ensuring that our clients remain
              competitive and agile in their respective industries.
            </p>
            <p className="text-lg text-gray-700">
              We strive to be more than just an IT service provider—we aim to be
              your trusted technology partner, empowering your business to
              thrive in today&apos;s fast-evolving digital landscape.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                alt="Team collaboration"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
