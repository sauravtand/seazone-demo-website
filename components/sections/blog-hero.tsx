"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function BlogHero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Tech Insights & News</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on technology trends, best practices, and industry
            developments from our expert team.
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
