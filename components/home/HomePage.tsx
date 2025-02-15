import { ClientHeroSection } from "@/components/home/ClientHeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { PainPointsSection } from "@/components/home/PainPointsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import LeadMagnetSection from "@/components/home/LeadMagnetSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedBlogsSection } from "@/components/home/FeaturedBlogsSection";

export default function Home() {
  return (
    <main>
      <ClientHeroSection />
      <TrustSection />
      <PainPointsSection />
      <ServicesSection />
      <LeadMagnetSection />
      <ProcessSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <FeaturedBlogsSection />
      <CallToActionSection />
      <AboutSection />
    </main>
  );
}
