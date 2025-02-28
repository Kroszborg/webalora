import CloudSolutionsPage from "@/components/cloudsolutions/CloudSolutionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions & Migration | Secure, Scalable IT – WebAlora",
  description:
    "Migrate to the cloud seamlessly with WebAlora. Secure, scalable cloud solutions that drive efficiency, flexibility, and innovation for your business.",
};

export default function CloudSolutions() {
  return <CloudSolutionsPage />;
}
