"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { ServicesSection } from "./ServicesSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";

export default function CloudSolutionsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
