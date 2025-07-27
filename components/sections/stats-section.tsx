"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Award, Clock, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses transformed",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Awards Won",
    description: "Industry recognition",
  },
  {
    icon: Clock,
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Service reliability",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries",
    description: "Global presence",
  },
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(value * easeOutQuart)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-3xl font-bold text-gray-900 sm:text-4xl">
      {suffix === "%" ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </div>
  )
}

export default function StatsSection() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-600">Our track record speaks for itself</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
              <div className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
