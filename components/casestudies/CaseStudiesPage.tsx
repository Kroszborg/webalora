import { CaseStudiesHero } from "./CaseStudiesHero";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import { CaseStudyGrid } from "./CaseStudyGrid";
import { ClientTestimonials } from "./ClientTestimonials";
import { CTASection } from "./CTASection";

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CaseStudiesHero />
      <div className="container mx-auto px-4 py-16">
        <FeaturedCaseStudy />
        <CaseStudyGrid />
      </div>
      <ClientTestimonials />
      <CTASection />
    </div>
  );
}
