"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Cloud, Smartphone, Shield, Database, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
    features: [
      "React/Next.js Development",
      "Full-Stack Solutions",
      "Progressive Web Apps",
      "E-commerce Platforms",
      "API Development",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    pricing: "Starting at $5,000",
    timeline: "4-12 weeks",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure and migration services to modernize your business operations and reduce costs.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
      "Disaster Recovery",
      "Cost Optimization",
      "24/7 Monitoring",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    pricing: "Starting at $3,000/month",
    timeline: "2-8 weeks",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    pricing: "Starting at $8,000",
    timeline: "6-16 weeks",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Management",
      "Incident Response",
      "Security Training",
      "Continuous Monitoring",
    ],
    technologies: ["SIEM", "Firewall", "VPN", "Encryption", "Multi-factor Auth"],
    pricing: "Starting at $2,500/month",
    timeline: "1-4 weeks",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and machine learning solutions.",
    features: [
      "Data Visualization",
      "Predictive Analytics",
      "Machine Learning Models",
      "Real-time Dashboards",
      "Data Pipeline Automation",
      "Business Intelligence",
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "TensorFlow"],
    pricing: "Starting at $4,000",
    timeline: "3-10 weeks",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business processes and drive innovation.",
    features: [
      "Process Automation",
      "Legacy System Migration",
      "Digital Strategy Consulting",
      "Change Management",
      "Staff Training",
      "ROI Optimization",
    ],
    technologies: ["RPA", "AI/ML", "IoT", "Blockchain", "Cloud Native"],
    pricing: "Custom Quote",
    timeline: "8-24 weeks",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Pricing:</span>
                      <p className="text-gray-600">{service.pricing}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Timeline:</span>
                      <p className="text-gray-600">{service.timeline}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full" asChild>
                      <Link href="/contact" className="flex items-center justify-center">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
