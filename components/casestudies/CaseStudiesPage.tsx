"use client";

import { useState } from "react";
import { CaseStudiesHero } from "./CaseStudiesHero";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import { CaseStudyGrid } from "./CaseStudyGrid";
import { ClientTestimonials } from "./ClientTestimonials";
import { CTASection } from "./CTASection";
import type { StrapiCaseStudy } from "@/lib/casestudies";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface CaseStudiesPageProps {
  caseStudies: StrapiCaseStudy[];
}

// Define categories based on the provided screenshot
const CASE_STUDY_CATEGORIES = [
  { id: 15, name: "Backup & Disaster Recovery" },
  { id: 13, name: "Cloud Solutions & Migration" },
  { id: 11, name: "Cybersecurity Solutions" },
  { id: 9, name: "IT Consultancy & Strategy" },
  { id: 7, name: "Managed IT Services" },
  { id: 5, name: "Network Infrastructure" },
  { id: 3, name: "VOIP Solutions" },
];

export function CaseStudiesPage({ caseStudies }: CaseStudiesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Handle case when no case studies are found
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

  // Filter case studies by category if a category is selected
  const filteredCaseStudies = selectedCategory
    ? caseStudies.filter(
        (study) => study.categoryId === selectedCategory
      )
    : caseStudies;

  // Split the first case study as featured and the rest as other case studies
  const featuredCaseStudy = filteredCaseStudies.length > 0 ? filteredCaseStudies[0] : null;
  const otherCaseStudies = filteredCaseStudies.length > 1 ? filteredCaseStudies.slice(1) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CaseStudiesHero />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Our Success Stories
          </h1>
          
          <Button
            variant="outline"
            className="flex items-center gap-2 md:self-end"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {showFilters && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                className="text-sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {CASE_STUDY_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="text-sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        )}

        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-800">No case studies found for this category</h2>
            <p className="text-gray-600 mt-2">Try selecting a different category</p>
          </div>
        ) : (
          <>
            {featuredCaseStudy && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 inline-block border-b-2 border-blue-500 pb-2">
                  Featured Case Study
                </h2>
                <FeaturedCaseStudy caseStudy={featuredCaseStudy} />
              </div>
            )}

            {otherCaseStudies.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 inline-block border-b-2 border-blue-500 pb-2">
                  More Success Stories
                </h2>
                <CaseStudyGrid caseStudies={otherCaseStudies} />
              </div>
            )}
          </>
        )}
      </div>
      <ClientTestimonials />
      <CTASection />
    </div>
  );
}
