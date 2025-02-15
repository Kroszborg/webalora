import { HeroSection } from "@/components/VoipSolutions/HeroSection";
import { WhyVoipEssential } from "@/components/VoipSolutions/WhyVoipEssential";
import { ServicesOverview } from "@/components/VoipSolutions/ServicesOverview";
import { CostOfOutdated } from "@/components/VoipSolutions/CostOfOutdated";
import { CaseStudies } from "@/components/VoipSolutions/CaseStudies";
import { FAQSection } from "@/components/VoipSolutions/FAQSection";
import { CTASection } from "@/components/VoipSolutions/CTASection";
import { WhyChooseUs } from "@/components/VoipSolutions/WhyChooseUs";

export default function VoipSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <WhyVoipEssential />
      <ServicesOverview />
      <CostOfOutdated />
      <CaseStudies />
      <FAQSection />
      <CTASection />
      <WhyChooseUs />
    </div>
  );
}
