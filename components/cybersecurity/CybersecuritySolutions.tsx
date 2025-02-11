import { HeroSection } from "./HeroSection";
import { ThreatLandscape } from "./ThreatLandscape";
import { ServicesOverview } from "./ServicesOverview";
import { CybersecurityFramework } from "./CybersecurityFramework";
import { ClientTestimonial } from "./ClientTestimonial";
import { WhyChooseUs } from "./WhyChooseUs";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import { SecurityReadinessQuiz } from "./SecurityReadinessQuiz";

export function CybersecuritySolutions() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-black">
      <HeroSection />
      <ThreatLandscape />
      <ServicesOverview />
      <SecurityReadinessQuiz />
      <CybersecurityFramework />
      <ClientTestimonial />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  );
}
