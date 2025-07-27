"use client"

import { motion } from "framer-motion"

export default function PortfolioHero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Portfolio</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with innovative technology solutions. Each
            project represents our commitment to excellence and client success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
