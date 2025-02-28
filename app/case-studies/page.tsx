import { getCaseStudies } from "@/lib/casestudies";
import { CaseStudiesPage } from "@/components/casestudies/CaseStudiesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | How WebAlora Transforms Businesses",
  description:
    "See how WebAlora helps businesses succeed. Explore our case studies showcasing IT solutions that improve efficiency, security, and business growth.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();

  return <CaseStudiesPage caseStudies={caseStudies} />;
}
