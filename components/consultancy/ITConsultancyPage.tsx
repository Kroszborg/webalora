import { HeroSection } from "./HeroSection";
import { WhyItMatters } from "./WhyItMatters";
import { OurServices } from "./OurServices";
import { CaseStudies } from "./CaseStudies";
import { Benefits } from "./Benefits";
import { FAQSection } from "./FAQSection";
import { Testimonials } from "./Testimonials";
import { CTASection } from "./CTASection";
import { AssessmentQuiz } from "./AssessmentQuiz";

export function ITConsultancyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <WhyItMatters />
      <OurServices />
      <AssessmentQuiz />
      <CaseStudies />
      <Benefits />
      <FAQSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}

export default ITConsultancyPage;
