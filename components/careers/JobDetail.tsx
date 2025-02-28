"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Banknote, ChevronRight } from "lucide-react";
import type { Job } from "@/lib/jobs";
import Link from "next/link";

interface JobDetailProps {
  job: Job;
}

export function JobDetail({ job }: JobDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/careers" className="text-gray-500 hover:text-gray-700">
              Careers
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900">{job.Title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {job.Title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.Location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{job.employment_type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  <span>£{job.Salary}</span>
                </div>
              </div>
            </div>
            {job.application_url && (
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a
                  href={job.application_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            )}
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="text-gray-600">{job.job_description}</div>
            </div>

            {job.responsibilities && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                <div className="text-gray-600">{job.responsibilities}</div>
              </div>
            )}

            {job.requirements && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <div className="text-gray-600">{job.requirements}</div>
              </div>
            )}

            {job.benefits && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <div className="text-gray-600">{job.benefits}</div>
              </div>
            )}
          </div>

          {job.deadline && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                <strong>Application Deadline:</strong>{" "}
                {new Date(job.deadline).toLocaleDateString()}
              </p>
            </div>
          )}

          {job.application_url && (
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a
                  href={job.application_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for this position
                </a>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
