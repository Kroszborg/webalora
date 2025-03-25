import BackupPage from "@/components/backup/BackupPage";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title:
    "Backup & Disaster Recovery | Business Continuity Solutions – WebAlora",
  description:
    "Protect your business from data loss with WebAlora's robust backup and disaster recovery solutions. Our comprehensive services ensure secure, rapid data recovery and business continuity, even in the most challenging situations.",
  path: "/backup",
  keywords: [
    "Backup Solutions",
    "Disaster Recovery",
    "Business Continuity",
    "Data Protection",
    "Data Recovery",
    "Cloud Backup",
    "IT Recovery",
    "Business Resilience",
  ],
  ogImage: "/images/services/backup-og.jpg",
});

export default function Backup() {
  return <BackupPage />;
}
