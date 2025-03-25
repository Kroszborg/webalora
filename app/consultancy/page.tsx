import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

const ITConsultancyPage = dynamic(
  () => import("@/components/consultancy/ITConsultancyPage")
);

export const metadata: Metadata = generateMetadata({
  title: "IT Consultancy Services | Strategic Technology Solutions – WebAlora",
  description:
    "Align technology with your business goals through WebAlora's expert IT consultancy services. We deliver tailored strategic solutions to optimize your IT infrastructure, enhance security, and future-proof your organization.",
  path: "/consultancy",
  keywords: [
    "IT Consultancy",
    "Technology Strategy",
    "Digital Transformation",
    "IT Advisory Services",
    "Business Technology",
    "IT Planning",
    "Technology Roadmap",
    "IT Optimization",
  ],
  ogImage: "/images/services/consultancy-og.jpg",
});
export default function ConsultancyPage() {
  return <ITConsultancyPage />;
}