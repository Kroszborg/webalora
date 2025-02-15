"use client";

import React, { useCallback, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Cloud } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { FloatingElement } from "@/components/ui/floating-element";
import { throttle } from "lodash";
import { ITHealthCheckForm } from "@/components/ITHealthCheckForm";

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };

  const earthY = useSpring(
    useTransform(scrollY, [0, 1000], [0, 50]),
    springConfig
  );
  const earthScale = useSpring(
    useTransform(scrollY, [0, 1000], [1, 1.1]),
    springConfig
  );
  const earthRotate = useSpring(
    useTransform(scrollY, [0, 1000], [0, 15]),
    springConfig
  );

  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 150]);

  const throttledScrollHandler = useCallback(
    throttle(() => {
      // This is now an empty function as we're using Framer Motion's useTransform
      // which handles the scroll updates internally
    }, 16),
    []
  );

  React.useEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  const services = [
    {
      icon: Shield,
      text: "Cyber Security",
      desc: "GDPR & ISO27001 Compliant",
      gradient: "from-blue-400 to-blue-600",
      href: "/cybersecurity-solutions",
    },
    {
      icon: Server,
      text: "Managed IT",
      desc: "24/7 Expert Support",
      gradient: "from-indigo-400 to-indigo-600",
      href: "/services",
    },
    {
      icon: Cloud,
      text: "Cloud Solutions",
      desc: "Secure & Scalable",
      gradient: "from-purple-400 to-purple-600",
      href: "#",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-900 pb-20 md:pb-0">
      {isMounted && <Particles />}

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />

      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-60 will-change-transform"
        style={{
          y: prefersReducedMotion ? 0 : earthY,
          scale: prefersReducedMotion ? 1 : earthScale,
          rotate: prefersReducedMotion ? 0 : earthRotate,
          opacity: opacity,
          transform: "translate(-50%, -50%) translate3d(0, 0, 0)",
        }}
      >
        <Image
          src="/bg-earth.svg"
          alt="Earth Globe"
          width={800}
          height={800}
          priority
          className="filter contrast-125 brightness-110"
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 pt-32 md:pt-20 will-change-transform"
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <FloatingElement yOffset={15} duration={6} delay={0.5}>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
            <span className="text-blue-300">New:</span>{" "}
            <span className="text-white">
              Introducing AI-Powered Cybersecurity
            </span>
          </div>
        </FloatingElement>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight sm:leading-tight md:leading-tight lg:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
          Trusted IT Expertise
          <br className="hidden sm:inline" />
          <span className="sm:inline">That Fuels Growth</span>
        </h1>

        <FloatingElement yOffset={10} duration={5} delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-white max-w-3xl mx-auto">
            Delivering secure, compliant, and reliable IT services that drive
            growth and protect your business.
          </p>
        </FloatingElement>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-white text-blue-900 hover:bg-blue-50 border-2 border-transparent px-8 py-6 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setShowForm(true)}
          >
            <span className="relative z-10">Get a Free IT Health Check</span>
            <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group relative overflow-hidden text-blue-900 border-2 border-white hover:border-blue-200 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <Link href="/cybersecurity-solutions" className="flex items-center">
              Explore Our Cybersecurity Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 md:pb-0">
          {services.map((item, index) => (
            <Link href={item.href} key={index} className="block">
              <div
                className="group relative flex flex-col items-center p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.text}</h3>
                <p className="text-sm text-blue-200">{item.desc}</p>
                <div
                  className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/50 pointer-events-none" />

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowForm(false);
              }
            }}
          >
            <div className="min-h-screen w-full flex items-start justify-center py-4">
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="w-full mx-4 my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <ITHealthCheckForm onClose={() => setShowForm(false)} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
