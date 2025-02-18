import { getCaseStudy, getRelatedCaseStudies, getCaseStudyImageUrl, DEFAULT_CASE_STUDY_IMAGE } from "@/lib/casestudies";
import { notFound } from "next/navigation";
import Image from "next/image";
import CaseStudyContent from "@/components/casestudies/CaseStudyContent";
import { ClientTestimonials } from "@/components/casestudies/ClientTestimonials";
import { CTASection } from "@/components/casestudies/CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type PageProps = {
  params: { slug: string };
};

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = await getRelatedCaseStudies(caseStudy);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <article className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {caseStudy.Title}
        </h1>

        <div className="flex items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <span>Author:</span>
            <span>{caseStudy.Author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Published:</span>
            <span>{new Date(caseStudy.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={getCaseStudyImageUrl(caseStudy)}
              alt={caseStudy.Title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            {caseStudy.Content}
          </div>
        </div>

        {relatedCaseStudies.length > 0 && (
          <div className="bg-gray-100 py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedCaseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.Title}
                    </h3>
                    <p className="text-gray-600 mb-4">{study.Description}</p>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <ClientTestimonials />
      <CTASection />
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: caseStudy.Title,
    description: caseStudy.Description || undefined,
  };
}
