"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { StrapiCaseStudy } from "@/lib/casestudies";
import { motion } from "framer-motion";
import Link from "next/link";
import { DEFAULT_CASE_STUDY_IMAGE, getCaseStudyImageUrl } from "@/lib/casestudies";

interface FeaturedCaseStudyProps {
  caseStudy: StrapiCaseStudy;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={getCaseStudyImageUrl(caseStudy)}
              alt={caseStudy.Title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {caseStudy.Title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{caseStudy.Description}</p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center text-gray-700 mb-8"
            >
              <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
              Published: {new Date(caseStudy.publishedAt).toLocaleDateString()}
            </motion.div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href={`/case-studies/${caseStudy.slug}`}>
                Read Full Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
