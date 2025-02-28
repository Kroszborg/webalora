import { getJobBySlug } from "@/lib/jobs";
import { JobDetail } from "@/components/careers/JobDetail";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: { slug: string };
}

export default async function JobPage({
  params,
}: JobPageProps) {
  try {
    const slug = params?.slug;
    
    if (!slug) {
      return notFound();
    }

    const job = await getJobBySlug(slug);

    if (!job) {
      return notFound();
    }

    return <JobDetail job={job} />;
  } catch (error) {
    console.error('Error in job page:', error);
    return notFound();
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: JobPageProps) {
  const job = await getJobBySlug(params.slug);

  if (!job) {
    return {
      title: 'Job Not Found | WebAlora',
    };
  }

  return {
    title: `${job.Title} | Careers at WebAlora`,
    description: job.job_description,
  };
}
