"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Innovative <span className="text-blue-600">IT Solutions</span> for Modern Business
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              Transform your business with cutting-edge technology solutions. We deliver scalable, secure, and
              innovative IT services that drive growth and efficiency.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Client 1"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Client 2"
                    width={32}
                    height={32}
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/placeholder.svg?height=32&width=32"
                    alt="Client 3"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="ml-3">Trusted by 500+ companies</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Image
                className="w-full rounded-lg"
                src="/placeholder.svg?height=400&width=600"
                alt="Seazone team working on innovative solutions"
                width={600}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
