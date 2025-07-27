"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, GraduationCap, Home, Plane, DollarSign, Coffee, Laptop, Users } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and mental health support",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, and skill development programs",
  },
  {
    icon: Home,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance support",
  },
  {
    icon: Plane,
    title: "Time Off",
    description: "Generous PTO, paid holidays, and sabbatical opportunities",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-competitive salaries, equity options, and performance bonuses",
  },
  {
    icon: Coffee,
    title: "Office Perks",
    description: "Free meals, snacks, coffee, and modern office spaces",
  },
  {
    icon: Laptop,
    title: "Equipment & Tools",
    description: "Latest MacBook Pro, monitors, and any tools you need to succeed",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Inclusive environment, team events, and collaborative culture",
  },
]

export default function CompanyBenefits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Work at Seazone?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in taking care of our team members with comprehensive benefits and a supportive work environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
