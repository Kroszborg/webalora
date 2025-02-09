"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { GradientBlob } from "@/components/ui/gradient-blob"

const testimonials = [
  {
    quote: "WebAlora has transformed our IT infrastructure, allowing us to focus on our core business.",
    author: "John Doe",
    position: "CFO at LegalTech Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "Their expertise in financial sector compliance has been invaluable to our operations.",
    author: "Jane Smith",
    position: "CTO at FinanceFirst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <GradientBlob
        colors={["#60a5fa", "#5eead4"]}
        className="top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlob
        colors={["#a78bfa", "#f472b6"]}
        className="bottom-0 left-0 w-96 h-96 -translate-x-1/2 translate-y-1/2"
      />

      <div className="container relative mx-auto px-4">
        <SectionTitle title="What Our Clients Say" subtitle="Hear from the businesses we've helped succeed" />

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p className="text-lg mb-6 italic text-gray-700">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-blue-600">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="bg-white hover:bg-gray-100">
            <Link href="/case-studies">Explore More Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

