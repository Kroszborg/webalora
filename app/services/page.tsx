import dynamic from "next/dynamic";

const ServicesPage = dynamic(
  () => import("@/components/services/ServicesPage"),
  {
    ssr: true,
  }
);

export default function Page() {
  return <ServicesPage />;
}
