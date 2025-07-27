"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Users, value: "150+", label: "Team Members" },
  { icon: Award, value: "4.8/5", label: "Employee Rating" },
  { icon: Globe, value: "Remote", label: "Work Options" },
]

export default function CareersHero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Join Our <span className="text-blue-600">Innovative</span> Team
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology. We're looking for passionate individuals
            who want to make a real impact in the world of IT solutions.
          </p>

          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="#open-positions">View Open Positions</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
