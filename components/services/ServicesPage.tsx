"use client";

import { HeroSection } from "./HeroSection";
import { WhyPartnerSection } from "./WhyPartnerSection";
import { InteractiveInfographic } from "./InteractiveInfographic";
import { HighCostSection } from "./HighCostSection";
import { CoreServicesSection } from "./CoreServicesSection";
import { ApproachSection } from "./ApproachSection";
import { ClientTestimonials } from "./ClientSuccessStory";
import { TrustSection } from "./TrustSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 pt-28 pb-4">
        <Breadcrumbs items={[{ label: "Services", current: true }]} />
      </div>
      <HeroSection />
      <WhyPartnerSection />
      <InteractiveInfographic />
      <HighCostSection />
      <CoreServicesSection />
      <PricingSection />
      <ApproachSection />
      <ClientTestimonials />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
