import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export function useBlogPosts() {
  const { data, error, isLoading, mutate } = useSWR('/api/cms/blog', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    dedupingInterval: 300000, // 5 minutes
  });

  return {
    posts: data?.data || [],
    isLoading,
    isError: error,
    mutate,
  };
}

export function useResources() {
  const { data, error, isLoading, mutate } = useSWR('/api/cms/resources', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    dedupingInterval: 300000, // 5 minutes
  });

  return {
    resources: data?.data || [],
    isLoading,
    isError: error,
    mutate,
  };
}

export function useCaseStudies() {
  const { data, error, isLoading, mutate } = useSWR('/api/cms/case-studies', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    dedupingInterval: 300000, // 5 minutes
  });

  return {
    caseStudies: data?.data || [],
    isLoading,
    isError: error,
    mutate,
  };
}

// Single item fetchers
export function useBlogPost(slug: string) {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/cms/blog/${slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  return {
    post: data?.data || null,
    isLoading,
    isError: error,
  };
}

export function useResource(slug: string) {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/cms/resources/${slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  return {
    resource: data?.data || null,
    isLoading,
    isError: error,
  };
}

export function useCaseStudy(slug: string) {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/cms/case-studies/${slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes
    }
  );

  return {
    caseStudy: data?.data || null,
    isLoading,
    isError: error,
  };
}