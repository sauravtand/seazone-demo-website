"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Seazone transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance significantly.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    content:
      "The mobile app they developed exceeded our expectations. The user experience is fantastic and our customer engagement increased by 200%.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    content:
      "Outstanding cybersecurity implementation. They identified vulnerabilities we didn't know existed and provided comprehensive solutions.",
    author: "Emily Rodriguez",
    role: "CISO",
    company: "SecureBank",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Don't just take our word for it</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6">"{testimonial.content}"</blockquote>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
