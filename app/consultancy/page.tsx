import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ITConsultancyPage = dynamic(
  () => import("@/components/consultancy/ITConsultancyPage")
);

export const metadata: Metadata = {
  title: "IT Consultancy Services | Strategic IT Solutions – WebAlora",
  description: "Align technology with business goals through WebAlora's expert IT consultancy. Tailored solutions to optimise IT infrastructure and future-proof your business.",
};

export default function ConsultancyPage() {
  return <ITConsultancyPage />;
}