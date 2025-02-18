import { getCaseStudies } from "@/lib/casestudies";
import { CaseStudiesPage } from "@/components/casestudies/CaseStudiesPage";

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();
  return <CaseStudiesPage caseStudies={caseStudies} />;
}
