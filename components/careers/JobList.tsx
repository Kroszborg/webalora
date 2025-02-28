"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Banknote } from "lucide-react";
import type { Job } from "@/lib/jobs";

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <AnimatePresence mode="wait">
      {jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center py-12"
        >
          <p className="text-gray-600">
            No positions matching your criteria at the moment.
          </p>
          <p className="text-gray-600">
            Please try different filters or check back later.
          </p>
        </motion.div>
      ) : (
        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.Title}
                  </h3>
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
                <Button asChild className="md:self-start">
                  <a href={`/careers/${job.slug}`}>View Position</a>
                </Button>
              </div>
              <p className="mt-4 text-gray-600">{job.job_description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
