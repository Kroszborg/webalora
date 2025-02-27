"use client";

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
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <CaseStudiesHero />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            No case studies found
          </h2>
          <p className="text-gray-600 mt-4">
            Check back soon for new case studies.
          </p>
        </div>
        <ClientTestimonials />
        <CTASection />
      </div>
    );
  }

  const featuredCaseStudy = caseStudies[0];
  const otherCaseStudies = caseStudies.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CaseStudiesHero />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Success Stories
        </h1>

        {featuredCaseStudy && (
          <>
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 inline-block border-b-2 border-blue-500 pb-2">
                Featured Case Study
              </h2>
              <FeaturedCaseStudy caseStudy={featuredCaseStudy} />
            </div>
          </>
        )}

        {otherCaseStudies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 inline-block border-b-2 border-blue-500 pb-2">
              More Success Stories
            </h2>
            <CaseStudyGrid caseStudies={otherCaseStudies} />
          </div>
        )}
      </div>
      <ClientTestimonials />
      <CTASection />
    </div>
  );
}
