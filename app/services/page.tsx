import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

const ServicesPage = dynamic(
  () => import("@/components/services/ServicesPage"),
  {
    ssr: true,
  }
);

export const metadata: Metadata = generateMetadata({
  title:
    "Managed IT Services & Support | Comprehensive Technology Solutions – WebAlora",
  description:
    "Streamline your IT operations with WebAlora's comprehensive managed services. From 24/7 support and cybersecurity to cloud solutions and strategic consulting, we deliver reliable, cost-effective IT services tailored to your business needs.",
  path: "/services",
  keywords: [
    "Managed IT Services",
    "IT Support",
    "IT Solutions",
    "Technical Support",
    "Cyber Security",
    "Cloud Solutions",
    "Network Management",
    "Business IT",
  ],
  ogImage: "/images/services/managed-it-og.jpg",
});

export default function Page() {
  return <ServicesPage />;
}
