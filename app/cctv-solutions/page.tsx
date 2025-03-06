import CCTVSolutionsPage from "@/components/cctv-solutions/CCTVSolutionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart CCTV Solutions | Total Security, 24/7 Protection – WebAlora",
  description:
    "Protect your business with WebAlora's advanced CCTV solutions. Professional installation, live monitoring & maintenance for total security.",
};

export default function CCTVSolutions() {
  return <CCTVSolutionsPage />;
}
