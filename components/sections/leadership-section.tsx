"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const leaders = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "15+ years in tech leadership, former VP at Microsoft. Passionate about digital transformation.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    bio: "Former Google engineer with expertise in cloud architecture and AI. PhD in Computer Science.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Rodriguez",
    role: "VP of Engineering",
    bio: "Full-stack expert with 12+ years building scalable systems. Open source contributor.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lisa Chen",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on creating intuitive and accessible digital experiences.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
]

export default function LeadershipSection() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership Team</h2>
          <p className="mt-4 text-lg text-gray-600">Experienced leaders driving innovation and excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{leader.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={leader.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={leader.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
