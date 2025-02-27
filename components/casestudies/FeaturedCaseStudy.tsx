import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { StrapiCaseStudy } from "@/lib/casestudies";
import {
  getCaseStudyImageUrl,
  DEFAULT_CASE_STUDY_IMAGE,
} from "@/lib/casestudies";

interface FeaturedCaseStudyProps {
  caseStudy: StrapiCaseStudy;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="md:flex">
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src={getCaseStudyImageUrl(caseStudy) || DEFAULT_CASE_STUDY_IMAGE}
            alt={caseStudy.Title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {caseStudy.Title}
          </h2>
          <p className="text-gray-600 mb-6 flex-grow">
            {caseStudy.Description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              {new Date(caseStudy.publishedAt).toLocaleDateString()}
            </div>
            <Link
              href={`/case-studies/${caseStudy.slug}`} // Ensure the correct slug property is used
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
