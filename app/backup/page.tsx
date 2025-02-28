import BackupPage from "@/components/backup/BackupPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backup & Disaster Recovery | Business Continuity – WebAlora",
  description:
    "Protect your business from data loss with WebAlora's backup and disaster recovery solutions. Secure, fast recovery to keep your operations running.",
};

export default function Backup() {
  return <BackupPage />;
}
