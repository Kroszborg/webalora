import VoipSolutionsPage from "@/components/VoipSolutions/VoipSolutionsPage";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "VOIP Solutions | Enterprise Communication Systems – WebAlora",
  description:
    "Upgrade your business communications with WebAlora's advanced VOIP solutions. Our reliable, cost-effective voice services deliver seamless connectivity, enhanced collaboration, and significant cost savings for businesses of all sizes.",
  path: "/voip-solutions",
  keywords: [
    "VOIP Solutions",
    "Business Phone Systems",
    "IP Telephony",
    "Unified Communications",
    "Cloud Telephony",
    "Business Voice Services",
    "SIP Trunking",
    "Communication Systems",
  ],
  ogImage: "/images/services/voip-og.jpg",
});

export default function VoipSolutions() {
  return <VoipSolutionsPage />;
}
