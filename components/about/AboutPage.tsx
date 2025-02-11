"use client";
import { AboutHero } from "./AboutHero";
import { OurMission } from "./OurMission";
import { OurServices } from "./OurServices";
import { WhyChooseUs } from "./WhyChooseUs";
import { OurImpact } from "./OurImpact";
import { TeamSection } from "./TeamSection";
import { ContactCTA } from "./ContactCTA";

export function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <OurMission />
      <OurServices />
      <WhyChooseUs />
      <OurImpact />
      <TeamSection />
      <ContactCTA />
    </div>
  );
}
