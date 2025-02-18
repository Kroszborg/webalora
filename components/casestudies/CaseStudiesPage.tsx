import { CaseStudiesHero } from "./CaseStudiesHero";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import { CaseStudyGrid } from "./CaseStudyGrid";
import { ClientTestimonials } from "./ClientTestimonials";
import { CTASection } from "./CTASection";
import type { StrapiCaseStudy } from "@/lib/casestudies";

interface CaseStudiesPageProps {
  caseStudies: StrapiCaseStudy[];
}

export function CaseStudiesPage({ caseStudies }: CaseStudiesPageProps) {
  const featuredCaseStudy = caseStudies[0];
  const otherCaseStudies = caseStudies.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CaseStudiesHero />
      <div className="container mx-auto px-4 py-16">
        {featuredCaseStudy && <FeaturedCaseStudy caseStudy={featuredCaseStudy} />}
        <CaseStudyGrid caseStudies={otherCaseStudies} />
      </div>
      <ClientTestimonials />
      <CTASection />
    </div>
  );
}
