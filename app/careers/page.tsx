import { Suspense } from "react";
import { CareersPage } from "@/components/careers/CareersPage"

export const metadata: Metadata= {
  title: "Careers | WebAlora",
  description:
    "Join our team at WebAlora and help shape the future of IT solutions. View our current job openings and opportunities.",
}

export default function Careers() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CareersPage />
    </Suspense>
  );
}

