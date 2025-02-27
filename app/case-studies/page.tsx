import { getCaseStudies } from "@/lib/casestudies";
import { CaseStudiesPage } from "@/components/casestudies/CaseStudiesPage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();

  // Log for debugging
  console.log(`Fetched ${caseStudies.length} case studies`);

  return <CaseStudiesPage caseStudies={caseStudies} />;
}
