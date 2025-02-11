"use client";

import { HeroSection } from "./HeroSection";
import { WhyPartnerSection } from "./WhyPartnerSection";
import { InteractiveInfographic } from "./InteractiveInfographic";
import { HighCostSection } from "./HighCostSection";
import { CoreServicesSection } from "./CoreServicesSection";
import { ApproachSection } from "./ApproachSection";
import { ClientSuccessStory } from "./ClientSuccessStory";
import { TrustSection } from "./TrustSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <WhyPartnerSection />
      <InteractiveInfographic />
      <HighCostSection />
      <CoreServicesSection />
      <PricingSection />
      <ApproachSection />
      <ClientSuccessStory />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
