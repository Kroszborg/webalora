"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GradientBlob } from "@/components/ui/gradient-blob";

const clientLogos = [
  { src: "/trust/NHS.png", alt: "Client Logo 1" },
  { src: "/trust/IBM.png", alt: "Client Logo 2" },
  { src: "/trust/cisco.png", alt: "Client Logo 3" },
  { src: "/trust/GRH.png", alt: "Client Logo 4" },
  { src: "/trust/ROM.png", alt: "Client Logo 5" },
  { src: "/trust/VOE.png", alt: "Client Logo 6" },
  { src: "/trust/BTO.png", alt: "Client Logo 7" },
  { src: "/trust/aws.png", alt: "Client Logo 8" },
  { src: "/trust/tesco.png", alt: "Client Logo 9" },
  { src: "/trust/MSP.png", alt: "Client Logo 10" },
];

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Businesses Served",
    description: "Trusted by companies across industries",
  },
  {
    value: 1000,
    suffix: "s",
    label: "Devices Managed",
    description: "Seamless device management & support",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Expert Support",
    description: "Always available when you need us",
  },
];

const LogoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(carouselRef);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -100 * clientLogos.length],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <div className="overflow-hidden w-full mb-8 sm:mb-16" ref={carouselRef}>
      <motion.div
        className="flex items-center space-x-4 sm:space-x-8"
        animate={controls}
        style={{ width: `${clientLogos.length * 150}px` }}
      >
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div
            key={index}
            className="relative w-24 h-12 sm:w-40 sm:h-20 flex-shrink-0 transition-all duration-300"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              fill
              sizes="(max-width: 640px) 96px, 160px"
              style={{ objectFit: "contain" }}
              className="rounded-lg p-2 sm:p-4"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1920&q=80"
          alt="Background Pattern"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="filter blur-sm"
        />
      </div>

      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-30"
        size={200}
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30"
        size={200}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-2"
          >
            The IT Partner Trusted by Industry Leaders
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white"
          >
            Empowering businesses with reliable and innovative IT solutions
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LogoCarousel />
        </motion.div>

        <motion.p
          className="text-center text-base sm:text-lg text-blue-100 max-w-3xl mx-auto mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our extensive portfolio includes businesses across multiple sectors,
          all relying on our expertise to maintain seamless operations and
          robust security.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
