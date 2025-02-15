import dynamic from "next/dynamic";

const ITConsultancyPage = dynamic(
  () => import("@/components/consultancy/ITConsultancyPage")
);

export default function ConsultancyPage() {
  return <ITConsultancyPage />;
}
