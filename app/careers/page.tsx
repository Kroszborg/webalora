import { Suspense } from "react";
import { CareersPage } from "@/components/careers/CareersPage";

export const metadata = {
  title: "Careers | WebAlora",
  description:
    "Join our team at WebAlora and help shape the future of IT solutions. View our current job openings and opportunities.",
};

function CareersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-600">Loading careers page...</p>
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <Suspense fallback={<CareersLoading />}>
      <CareersPage />
    </Suspense>
  );
}
