"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving digital landscape.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading global IT partner, recognized for delivering cutting-edge solutions that shape the future of business technology.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation, integrity, excellence, and customer success are at the core of everything we do. We believe in building lasting partnerships.",
  },
]

export default function MissionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Seazone</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2015, Seazone has been at the forefront of digital innovation, helping businesses navigate the
            complexities of modern technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
