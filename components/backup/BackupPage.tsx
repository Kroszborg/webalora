import { HeroSection } from "./HeroSection";
import { WhyEssential } from "./WhyEssential";
import { ServicesOverview } from "./ServicesOverview";
import { CaseStudies } from "./CaseStudies";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import { WhyChooseUs } from "./WhyChooseUs";
import { HiddenCosts } from "./hidden-costs";

export default function BackupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <WhyEssential />
      <ServicesOverview />
      <HiddenCosts />
      <CaseStudies />
      <FAQSection />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
