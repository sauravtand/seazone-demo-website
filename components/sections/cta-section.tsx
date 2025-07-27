"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our innovative IT solutions can drive your business forward. Get a free consultation with
            our experts today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule a Call
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-blue-100">Free consultation • No commitment • Quick response</div>
        </motion.div>
      </div>
    </section>
  )
}
