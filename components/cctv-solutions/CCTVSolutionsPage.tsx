import React from 'react';
import { HeroSection } from "./HeroSection";
import { WhyEssentialSection } from "./WhyEssentialSection";
import { ServicesSection } from "./ServicesSection";
import { PricingSection } from "./PricingSection";
import { SuccessStoriesSection } from "./SuccessStoriesSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";

export default function CCTVSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <WhyEssentialSection />
      <ServicesSection />
      <PricingSection />
      <SuccessStoriesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
