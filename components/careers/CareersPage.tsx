"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight, Users, Award, Zap } from "lucide-react";
import { JobFilters } from "./JobFilters";
import { JobList } from "./JobList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Job, JobsResponse } from "@/lib/jobs";
import { useSearchParams } from "next/navigation";

// Remove the static jobs array as we'll fetch from API

const benefits = [
  {
    icon: Award,
    title: "Career Growth",
    description:
      "We invest in our people through training, certifications, and clear career progression paths.",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description:
      "Work with cutting-edge technologies and contribute to shaping the future of IT solutions.",
  },
  {
    icon: Users,
    title: "Great Culture",
    description:
      "Join a supportive team that values collaboration, creativity, and work-life balance.",
  },
];

export function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const searchParams = useSearchParams();

  const getUniqueLocations = () => {
    return [...new Set(jobs.map(job => job.Location))].filter(Boolean);
  };

  const getUniqueTypes = () => {
    return [...new Set(jobs.map(job => job.employment_type))].filter(Boolean);
  };

  const getUniqueDepartments = () => {
    return [...new Set(jobs.map(job => job.job_department.name))].filter(Boolean);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://webaloracms-production-9e8b.up.railway.app/api/jobs?populate=*');
        const data: JobsResponse = await response.json();
        setJobs(data.data);
        setFilteredJobs(data.data);
      } catch (err) {
        setError('Failed to fetch jobs');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const filterJobs = () => {
      let filtered = [...jobs];
      const location = searchParams.get('location');
      const type = searchParams.get('type');
      const department = searchParams.get('department');

      if (location && location !== 'all') {
        filtered = filtered.filter(job => 
          job.Location.toLowerCase() === location.toLowerCase()
        );
      }

      if (type && type !== 'all') {
        filtered = filtered.filter(job => 
          job.employment_type.toLowerCase() === type.toLowerCase()
        );
      }

      if (department && department !== 'all') {
        filtered = filtered.filter(job => 
          job.job_department?.name.toLowerCase() === department.toLowerCase()
        );
      }

      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [jobs, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24 px-4 overflow-hidden"
        style={{ paddingTop: `calc(${headerHeight}px + 4rem)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Careers at WebAlora"
          fill
          className="object-cover object-center mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Join Our Team
          </h1>
          <div className="flex items-center justify-center text-blue-100 text-sm md:text-base">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Careers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Current Vacancies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 mb-6"
            >
              Join our dynamic team and help shape the future of IT solutions.
              We&apos;re always looking for talented individuals who share our
              passion for technology and innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="#positions">View Open Positions</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#why-join">Why Join WebAlora</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Team at WebAlora"
              width={500}
              height={400}
              className="rounded-lg object-cover shadow-md"
            />
          </motion.div>
        </div>

        <div id="positions" className="scroll-mt-24">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading available positions...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <>
              <JobFilters
                locations={getUniqueLocations()}
                types={getUniqueTypes()}
                departments={getUniqueDepartments()}
              />
              <JobList jobs={filteredJobs} />
            </>
          )}
        </div>

        <div id="why-join" className="mt-20 scroll-mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Why Join WebAlora?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
