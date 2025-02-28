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
