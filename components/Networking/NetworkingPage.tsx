import { HeroSection } from "@/components/Networking/HeroSection";
import { WhyModernNetworking } from "@/components/Networking/WhyModernNetworking";
import { ServicesOverview } from "@/components/Networking/ServicesOverview";
import { CostOfOutdated } from "@/components/Networking/CostOfOutdated";
import { CaseStudies } from "@/components/Networking/CaseStudies";
import { FAQSection } from "@/components/Networking/FAQSection";
import { CTASection } from "@/components/Networking/CTASection";
import { WhyChooseUs } from "@/components/Networking/WhyChooseUs";

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <WhyModernNetworking />
      <ServicesOverview />
      <CostOfOutdated />
      <CaseStudies />
      <FAQSection />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
