import {
  getCaseStudy,
  getRelatedCaseStudies,
  getCaseStudyImageUrl,
} from "@/lib/casestudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import { ClientTestimonials } from "@/components/casestudies/ClientTestimonials";
import { CTASection } from "@/components/casestudies/CTASection";
import { CaseStudyImage } from "@/components/casestudies/CaseStudyImage";
import ReactMarkdown from "react-markdown";

type PageProps = {
  params: { slug: string };
};

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = await getRelatedCaseStudies(caseStudy);
  const imageUrl = getCaseStudyImageUrl(caseStudy);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all case studies
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {caseStudy.Title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{caseStudy.Author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(caseStudy.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <CaseStudyImage
                src={imageUrl}
                fallbackSrc="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
                alt={caseStudy.Title}
                fill
                className="object-cover"
                priority={true}
              />
            </div>
          </header>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-16">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
              <ReactMarkdown>{caseStudy.Content}</ReactMarkdown>
            </div>
          </div>
        </article>

        {relatedCaseStudies.length > 0 && (
          <div className="bg-gray-50 py-16 rounded-2xl mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedCaseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 flex flex-col h-full"
                  >
                    <div className="relative h-48 w-full">
                      <CaseStudyImage
                        src={getCaseStudyImageUrl(study)}
                        fallbackSrc="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070"
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
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium mt-4"
                      >
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

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
