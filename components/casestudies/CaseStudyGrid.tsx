import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { StrapiCaseStudy } from "@/lib/casestudies";
import { getCaseStudyImageUrl, DEFAULT_CASE_STUDY_IMAGE } from "@/lib/casestudies";

interface CaseStudyGridProps {
  caseStudies: StrapiCaseStudy[];
}

export function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
          <Link href={`/case-studies/${study.slug}`}>
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src={getCaseStudyImageUrl(study)}
                alt={study.Title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {study.Author}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {study.Title}
              </h3>
              <p className="text-gray-600 mb-4">{study.Description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(study.publishedAt).toLocaleDateString()}
                </span>
                <span className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-300">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
