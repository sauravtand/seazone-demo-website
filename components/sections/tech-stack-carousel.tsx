"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Next.js", logo: "/placeholder.svg?height=60&width=60" },
  { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Python", logo: "/placeholder.svg?height=60&width=60" },
  { name: "AWS", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Docker", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60" },
]

export default function TechStackCarousel() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technologies We Master</h2>
          <p className="mt-4 text-lg text-gray-600">
            We work with cutting-edge technologies to deliver the best solutions
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * technologies.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="flex-shrink-0 flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
