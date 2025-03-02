"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getResources,
  getBlogPosts,
  type StrapiPost, 
} from "@/lib/db";

interface CmsDataContextType {
  resources: StrapiPost[];
  blogPosts: StrapiPost[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const CmsDataContext = createContext<CmsDataContextType | undefined>(undefined);

export function useCmsData() {
  const context = useContext(CmsDataContext);
  if (context === undefined) {
    throw new Error("useCmsData must be used within a CmsDataProvider");
  }
  return context;
}

interface CmsDataProviderProps {
  children: ReactNode;
}

export function CmsDataProvider({ children }: CmsDataProviderProps) {
  const [resources, setResources] = useState<StrapiPost[]>([]);
  const [blogPosts, setBlogPosts] = useState<StrapiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Run all three fetches in parallel for maximum efficiency
      const [resourcesData, blogPostsData] = await Promise.all([
        getResources(),
        getBlogPosts(),
      ]);

      setResources(resourcesData);
      setBlogPosts(blogPostsData);
      setError(null);
    } catch (err) {
      console.error("Error fetching CMS data:", err);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();

    // Prefetch data when user hovers over CMS links
    const linkSelector =
      'a[href^="/blog"], a[href^="/resource"], a[href^="/case-studies"]';

    const handleLinkHover = () => {
      prefetchCmsData();
    };

    // Add hover event listeners to CMS links
    const links = document.querySelectorAll(linkSelector);
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
    });

    return () => {
      // Clean up the event listeners when the component unmounts
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
      });
    };
  }, []);

  const refetch = async () => {
    await fetchAllData();
  };

  return (
    <CmsDataContext.Provider
      value={{
        resources,
        blogPosts,
        loading,
        error,
        refetch,
      }}
    >
      {children}
    </CmsDataContext.Provider>
  );
}

async function prefetchCmsData() {
  try {
    await Promise.all([getResources(), getBlogPosts()]);
  } catch (err) {
    console.error("Error prefetching CMS data:", err);
  }
}
