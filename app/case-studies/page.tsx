import { getCaseStudies } from "@/lib/casestudies";
import { CaseStudiesPage } from "@/components/casestudies/CaseStudiesPage";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Case Studies | Real-World IT Success Stories – WebAlora",
  description:
    "Explore how WebAlora transforms businesses through technology. Our case studies showcase real-world IT solutions that improve efficiency, enhance security, and drive business growth across various industries.",
  path: "/case-studies",
  keywords: [
    "IT Case Studies",
    "Business Success Stories",
    "Technology Implementation",
    "Digital Transformation",
    "IT Solutions",
    "Business IT",
    "Client Stories",
    "Technology ROI",
  ],
  ogImage: "/images/case-studies/case-studies-og.jpg",
});
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();

  return <CaseStudiesPage caseStudies={caseStudies} />;
}
