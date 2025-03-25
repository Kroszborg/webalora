import CCTVSolutionsPage from "@/components/cctv-solutions/CCTVSolutionsPage";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "CCTV & Security Camera Solutions | 24/7 Video Protection – WebAlora",
  description:
    "Secure your business premises with WebAlora's advanced CCTV solutions. Our professional installation, live monitoring, and maintenance services provide comprehensive security and peace of mind through 24/7 protection.",
  path: "/cctv-solutions",
  keywords: [
    "CCTV Solutions",
    "Security Cameras",
    "Video Surveillance",
    "Business Security",
    "Remote Monitoring",
    "IP Cameras",
    "Access Control",
    "Security Systems",
  ],
  ogImage: "/images/services/cctv-og.jpg",
});

export default function CCTVSolutions() {
  return <CCTVSolutionsPage />;
}
