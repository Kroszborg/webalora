"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
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
  { src: "/trust/Tesco.png", alt: "Client Logo 9" },
  { src: "/trust/MSP.png", alt: "Client Logo 10" },
  { src: "/trust/DELL.png", alt: "Client Logo 11" },
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
    suffix: "'s",
    label: "Devices Managed",
    description: "Seamless device management & support  to 1,000s",
  },
  {
    value: 98,
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
  const [animationStarted, setAnimationStarted] = useState(false);
  const controls = useAnimation();
  const inView = useInView(carouselRef, { once: true });

  useEffect(() => {
    // Start animation only if it hasn't started yet and is in view
    if (inView && !animationStarted) {
      setAnimationStarted(true);

      // Calculate total width for smooth looping
      const logoWidth = 160; // Width of each logo + margin
      const totalWidth = clientLogos.length * logoWidth;

      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, inView, animationStarted]);

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="overflow-hidden w-full mb-16" ref={carouselRef}>
      <motion.div
        className="flex items-center space-x-8"
        animate={controls}
        style={{ width: `${duplicatedLogos.length * 160}px` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="relative w-40 h-20 flex-shrink-0">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              fill
              sizes="160px"
              style={{ objectFit: "contain" }}
              className="rounded-lg p-4"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-30"
        size={300}
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30"
        size={300}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50" />

      <div className="container relative mx-auto px-4 text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="The IT Partner Trusted by Industry Leaders"
            subtitle="Empowering businesses with reliable and innovative IT solutions"
          />
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
          className="text-center text-lg text-blue-100 max-w-3xl mx-auto mb-16"
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
