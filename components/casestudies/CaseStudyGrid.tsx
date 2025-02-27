import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { StrapiCaseStudy } from "@/lib/casestudies";
import {
  getCaseStudyImageUrl,
  DEFAULT_CASE_STUDY_IMAGE,
} from "@/lib/casestudies";

interface CaseStudyGridProps {
  caseStudies: StrapiCaseStudy[];
}

export function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study) => {
        // Ensure we have a valid slug
        const slug = study.slug || `case-study-${study.id}`;

        return (
          <div
            key={study.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200 flex flex-col h-full"
          >
            <div className="relative h-48 w-full">
              <Image
                src={getCaseStudyImageUrl(study) || DEFAULT_CASE_STUDY_IMAGE}
                alt={study.Title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {study.Title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {study.Description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href={`/case-studies/${slug}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
