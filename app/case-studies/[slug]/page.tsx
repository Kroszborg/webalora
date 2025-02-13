import {
  caseStudies,
  getRelatedCaseStudies,
  getSerializedContent,
} from "@/lib/casestudies";
import { notFound } from "next/navigation";
import Image from "next/image";
import CaseStudyContent from "@/components/casestudies/CaseStudyContent";
import { ClientTestimonials } from "@/components/casestudies/ClientTestimonials";
import { CTASection } from "@/components/casestudies/CTASection";
import { Building, Briefcase } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = caseStudies.find((s) => s.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const serializedContent = await getSerializedContent(caseStudy.content);
  const relatedCaseStudies = await getRelatedCaseStudies(caseStudy);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <article className="max-w-4xl mx-auto px-4">
        {/* Industry Badge */}
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {caseStudy.industry}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {caseStudy.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            <span>{caseStudy.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{caseStudy.services.join(", ")}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={caseStudy.featuredImage || "/placeholder.svg"}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <CaseStudyContent serializedContent={serializedContent} />
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Results</h2>
          <ul className="list-disc list-inside space-y-2">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="text-gray-600">
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="bg-blue-50 rounded-xl p-6 mb-12">
            <blockquote className="text-lg text-gray-800 italic mb-4">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <p className="text-gray-600">
              <strong>{caseStudy.testimonial.author}</strong>,{" "}
              {caseStudy.testimonial.position}
            </p>
          </div>
        )}
      </article>

      {/* Related Case Studies */}
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
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
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

      <ClientTestimonials />
      <CTASection />
    </div>
  );
}
