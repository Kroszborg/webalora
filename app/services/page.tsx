import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ServicesPage = dynamic(
  () => import("@/components/services/ServicesPage"),
  {
    ssr: true,
  }
);

export const metadata: Metadata = {
  title: "Expert IT Services | Managed IT, Support & Security - WebAlora",
  description:
    "Streamline your IT with WebAlora's expert managed services. Reliable IT support, security, and tailored solutions to keep your business running smoothly.",
};

export default function Page() {
  return <ServicesPage />;
}
