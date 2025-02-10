"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, FileText } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with WebAlora has been a game changer for us. Their team has ensured our IT systems are reliable and always available, which has allowed us to focus on delivering vital services. Their quick response times and dedication have been truly impressive.",
    author: "IT Director",
    company: "NHS",
    logo: "/logos/NHS.png",
    rating: 5,
  },
  {
    quote:
      "WebAlora helped us identify and fix vulnerabilities we didn't even know existed. Their approach made us feel confident that our clients' data is secure. It's refreshing to work with a team that explains complex solutions in a way we can understand.",
    author: "Partner",
    company: "Modali Legal Services",
    logo: "/logos/mdls.png",
    rating: 5,
  },
  {
    quote:
      "WebAlora designed a network solution that has transformed how we operate across our retail locations. Connectivity is faster and more reliable, and we've seen a noticeable improvement in staff productivity. The transition was seamless, and their support has been outstanding.",
    author: "IT Manager",
    company: "greenspart Retail",
    logo: "/logos/gsr.png",
    rating: 5,
  },
  {
    quote:
      "It was a great experience. WebAlora set up a disaster recovery plan for us that has taken a huge weight off our shoulders. Knowing our systems are prepared for anything gives us peace of mind. Their expertise and professionalism are second to none.",
    author: "Operations Director",
    company: "Yodgy Finance",
    logo: "/logos/ydf.png",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextTestimonial]);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Centered world map background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="World Map"
          fill
          className="opacity-20 object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-white mb-8 sm:mb-16">
        <SectionTitle
          title="Global Client Success Stories"
          subtitle="Trusted by Industry Leaders Worldwide"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white rounded-full p-2"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white rounded-full p-2"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center">
                    <div className="relative w-[150px] h-[45px] sm:w-[200px] sm:h-[60px]">
                      <Image
                        src={
                          testimonials[currentIndex].logo || "/placeholder.svg"
                        }
                        alt={testimonials[currentIndex].company}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>

                  <div className="text-white">
                    <p className="font-semibold text-base sm:text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm sm:text-base text-blue-200">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6 sm:w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* View All Case Studies Button */}
          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/50 transition-all duration-300 text-sm sm:text-base"
            >
              <Link
                href="/case-studies"
                className="flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">
                  Explore More Success Stories from Our Satisfied Clients
                </span>
                <span className="sm:hidden">View More Case Studies</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
