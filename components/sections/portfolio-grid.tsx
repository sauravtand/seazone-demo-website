"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "RetailMax Inc.",
    category: "Web Development",
    description:
      "Complete redesign and development of a modern e-commerce platform with improved user experience and performance.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "AWS"],
    results: ["300% increase in conversion rate", "50% faster page load times", "40% reduction in bounce rate"],
    duration: "3 months",
    teamSize: "6 developers",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    category: "Custom Software",
    description:
      "HIPAA-compliant healthcare management system with patient records, appointment scheduling, and billing.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Azure"],
    results: ["90% reduction in paperwork", "Improved patient satisfaction", "HIPAA compliance achieved"],
    duration: "6 months",
    teamSize: "8 developers",
    year: "2023",
    featured: true,
  },
  {
    id: 3,
    title: "Financial Trading Platform",
    client: "TradeFlow Capital",
    category: "Fintech",
    description: "Real-time trading platform with advanced analytics, portfolio management, and risk assessment tools.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Python", "Redis", "WebSocket", "Kubernetes"],
    results: ["99.9% uptime achieved", "Sub-second trade execution", "500K+ daily transactions"],
    duration: "8 months",
    teamSize: "12 developers",
    year: "2023",
    featured: true,
  },
  {
    id: 4,
    title: "Smart City IoT Platform",
    client: "CityTech Municipal",
    category: "IoT Solutions",
    description:
      "IoT platform for smart city management including traffic monitoring, waste management, and energy optimization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "InfluxDB", "Grafana", "MQTT", "Kubernetes"],
    results: ["30% reduction in energy costs", "Improved traffic flow", "Real-time city monitoring"],
    duration: "12 months",
    teamSize: "10 developers",
    year: "2022",
    featured: false,
  },
  {
    id: 5,
    title: "Educational Learning Platform",
    client: "EduTech Academy",
    category: "EdTech",
    description: "Comprehensive online learning platform with video streaming, assessments, and progress tracking.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "CloudFront"],
    results: ["10K+ active students", "95% course completion rate", "Mobile-first design"],
    duration: "4 months",
    teamSize: "7 developers",
    year: "2022",
    featured: false,
  },
  {
    id: 6,
    title: "Supply Chain Management",
    client: "LogiFlow Systems",
    category: "Enterprise Software",
    description:
      "End-to-end supply chain management system with inventory tracking, supplier management, and analytics.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Jenkins"],
    results: ["25% cost reduction", "Real-time inventory tracking", "Automated reporting"],
    duration: "10 months",
    teamSize: "9 developers",
    year: "2021",
    featured: false,
  },
]

const categories = [
  "All",
  "Web Development",
  "Custom Software",
  "Fintech",
  "IoT Solutions",
  "EdTech",
  "Enterprise Software",
]

export default function PortfolioGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="mb-2">
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{project.client}</CardDescription>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {project.results.slice(0, 2).map((result, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {project.teamSize}
                          </div>
                        </div>

                        <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent" asChild>
                          <Link href={`/portfolio/${project.id}`} className="flex items-center justify-center">
                            View Case Study
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-xs bg-white">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <CardDescription className="text-blue-600 text-sm">{project.client}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{project.duration}</span>
                      <span>{project.teamSize}</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={`/portfolio/${project.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
