export interface Job {
  id: number;
  documentId: string;
  Title: string;
  slug: string;
  job_ref: string;
  Location: string;
  employment_type: string;
  Salary: string;
  job_description: string;
  responsibilities: string | null;
  requirements: string | null;
  benefits: string | null;
  application_url: string | null;
  deadline: string | null;
  job_status: string | null;
  featuredjob: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface JobsResponse {
  data: Job[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  try {
    const response = await fetch(
      `https://webaloracms-production-9e8b.up.railway.app/api/jobs?filters[slug]=${slug}`
    );
    const data: JobsResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
}
