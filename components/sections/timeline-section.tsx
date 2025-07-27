"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology",
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Secured partnership with Fortune 500 company",
  },
  {
    year: "2019",
    title: "Global Expansion",
    description: "Opened offices in Europe and Asia",
  },
  {
    year: "2021",
    title: "AI Innovation Lab",
    description: "Launched dedicated AI and machine learning division",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: 'Named "IT Company of the Year" by Tech Excellence Awards',
  },
  {
    year: "2024",
    title: "Sustainable Tech Initiative",
    description: "Committed to carbon-neutral operations and green technology",
  },
]

export default function TimelineSection() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Journey</h2>
          <p className="mt-4 text-lg text-gray-600">Key milestones in our growth and innovation</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 md:w-1/2">
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } ml-12 md:ml-0`}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
