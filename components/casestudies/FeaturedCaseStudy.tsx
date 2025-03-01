import Link from "next/link";
import { CaseStudyImage } from "./CaseStudyImage"; // Import the CaseStudyImage component
import { ArrowRight } from "lucide-react";
import type { StrapiCaseStudy } from "@/lib/casestudies";
import { getCaseStudyImageUrl } from "@/lib/casestudies";

interface FeaturedCaseStudyProps {
  caseStudy: StrapiCaseStudy;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  // Get the image URL
  const imageUrl = getCaseStudyImageUrl(caseStudy);
  // Fallback image if the URL is undefined or empty
  const fallbackImageUrl =
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="md:flex">
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <CaseStudyImage
            src={imageUrl}
            fallbackSrc={fallbackImageUrl}
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
              href={`/case-studies/${caseStudy.slug}`}
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
