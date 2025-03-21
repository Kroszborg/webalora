// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import { getBlogPosts } from '@/lib/db';
import { getCaseStudies } from '@/lib/casestudies';
import { getResources } from '@/lib/db';

export async function GET() {
  const baseUrl = process.env.SITE_URL || 'https://webalora.com';
  
  // Fetch data from APIs
  const [blogPosts, caseStudies, resources] = await Promise.all([
    getBlogPosts(),
    getCaseStudies(),
    getResources(),
  ]);
  
  // Create sitemap entries for blog posts
  const blogEntries = blogPosts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.updatedAt || post.publishdate).toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));
  
  // Create sitemap entries for case studies
  const caseStudyEntries = caseStudies.map((study) => ({
    loc: `${baseUrl}/case-studies/${study.slug}`,
    lastmod: new Date(study.updatedAt).toISOString(),
    changefreq: 'monthly',
    priority: 0.6,
  }));
  
  // Create sitemap entries for resources
  const resourceEntries = resources.map((resource) => ({
    loc: `${baseUrl}/resource/${resource.slug}`,
    lastmod: new Date(resource.updatedAt).toISOString(),
    changefreq: 'monthly',
    priority: 0.6,
  }));
  
  // Combine all entries
  const allEntries = [...blogEntries, ...caseStudyEntries, ...resourceEntries];
  
  return getServerSideSitemap(allEntries);
}