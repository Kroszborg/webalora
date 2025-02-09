"use client";

import React, { useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Server,
  Shield,
  Cloud,
  MousePointerClick,
} from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { FloatingElement } from "@/components/ui/floating-element";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { throttle } from "lodash";

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };

  const earthY = useSpring(
    useTransform(scrollY, [0, 1000], [0, 150]),
    springConfig
  );
  const earthScale = useSpring(
    useTransform(scrollY, [0, 1000], [1, 1.3]),
    springConfig
  );
  const earthRotate = useSpring(
    useTransform(scrollY, [0, 1000], [0, 45]),
    springConfig
  );

  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 150]);

  const throttledScrollHandler = useCallback(
    throttle(() => {
      // This is now an empty function as we're using Framer Motion's useTransform
      // which handles the scroll updates internally
    }, 16), // 60fps
    []
  );

  React.useEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900">
      <Particles />

      <GradientBlob
        colors={["#3b82f6", "#2dd4bf"]}
        className="top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        size={600}
      />
      <GradientBlob
        colors={["#8b5cf6", "#ec4899"]}
        className="bottom-0 right-0 translate-x-1/2 translate-y-1/2"
        size={600}
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />

      <motion.div
        className="absolute w-[1200px] h-[1200px] opacity-60 will-change-transform"
        style={{
          y: prefersReducedMotion ? 0 : earthY,
          scale: prefersReducedMotion ? 1 : earthScale,
          rotate: prefersReducedMotion ? 0 : earthRotate,
          opacity: opacity,
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <Image
          src="/bg-earth.svg"
          alt="Earth Globe"
          width={1200}
          height={1200}
          priority
          className="filter contrast-125 brightness-110"
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 pt-20 will-change-transform"
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          transform: "translate3d(0, 0, 0)",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <FloatingElement yOffset={15} duration={6} delay={0.5}>
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium"
            variants={itemVariants}
          >
            <span className="text-blue-300">New:</span>{" "}
            <span className="text-white">
              Introducing AI-Powered Cybersecurity
            </span>
          </motion.div>
        </FloatingElement>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          variants={itemVariants}
        >
          Expert IT Solutions for
          <br />
          Finance & Legal Sectors
        </motion.h1>

        <FloatingElement yOffset={10} duration={5} delay={0.2}>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-12 text-blue-100/90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Delivering secure, compliant, and reliable IT services that drive
            growth and protect your business.
          </motion.p>
        </FloatingElement>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
          variants={itemVariants}
        >
          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden bg-white text-blue-900 hover:bg-blue-50 border-2 border-transparent px-8 py-6 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="#contact" className="flex items-center">
              <span className="relative z-10">Book a Free Consultation</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group relative overflow-hidden text-white border-2 border-white hover:border-blue-200 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <Link href="#services" className="flex items-center">
              <span className="relative z-10">View Our Services</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            {
              icon: Shield,
              text: "Cyber Security",
              desc: "GDPR & ISO27001 Compliant",
              gradient: "from-blue-400 to-blue-600",
            },
            {
              icon: Server,
              text: "Managed IT",
              desc: "24/7 Expert Support",
              gradient: "from-indigo-400 to-indigo-600",
            },
            {
              icon: Cloud,
              text: "Cloud Solutions",
              desc: "Secure & Scalable",
              gradient: "from-purple-400 to-purple-600",
            },
          ].map((item, index) => (
            <FloatingElement
              key={index}
              yOffset={7}
              duration={5 + index}
              delay={index * 0.1}
            >
              <motion.div
                className="group relative flex flex-col items-center p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 will-change-transform"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.div
                  className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-1">{item.text}</h3>
                <p className="text-sm text-blue-200">{item.desc}</p>
                <motion.div
                  className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            </FloatingElement>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer will-change-transform"
        animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center gap-2 group">
          <MousePointerClick className="h-6 w-6 text-white/60 group-hover:text-white transition-colors duration-300" />
          <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-300">
            Scroll to explore
          </span>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/50 pointer-events-none" />
    </section>
  );
};
