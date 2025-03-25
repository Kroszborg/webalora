import CloudSolutionsPage from "@/components/cloudsolutions/CloudSolutionsPage";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title:
    "Cloud Solutions & Migration | Secure, Scalable Cloud Services – WebAlora",
  description:
    "Migrate to the cloud seamlessly with WebAlora's expert cloud solutions. We deliver secure, scalable cloud environments that drive efficiency, flexibility, and innovation for your business while reducing IT costs and maximizing performance.",
  path: "/cloud-solutions",
  keywords: [
    "Cloud Solutions",
    "Cloud Migration",
    "Cloud Services",
    "Cloud Computing",
    "Microsoft Azure",
    "AWS",
    "Google Cloud",
    "Hybrid Cloud",
    "Cloud Security",
  ],
  ogImage: "/images/services/cloud-og.jpg",
});

export default function CloudSolutions() {
  return <CloudSolutionsPage />;
}

