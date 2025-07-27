"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    experience: "5+ years",
    description:
      "We're looking for a senior full stack developer to join our core platform team and help build scalable web applications.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Experience with TypeScript and modern web frameworks",
      "Strong understanding of database design and optimization",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    posted: "2024-01-15",
    urgent: true,
  },
  {
    id: 2,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    experience: "3+ years",
    description:
      "Join our infrastructure team to build and maintain scalable, reliable systems that power our applications.",
    requirements: [
      "3+ years of DevOps or infrastructure experience",
      "Proficiency with Docker, Kubernetes, and CI/CD pipelines",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong scripting skills (Python, Bash, or similar)",
    ],
    technologies: ["Docker", "Kubernetes", "Terraform", "AWS", "Jenkins"],
    posted: "2024-01-12",
    urgent: false,
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    experience: "3+ years",
    description: "Create beautiful, intuitive user experiences for our web and mobile applications.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency with Figma, Sketch, or similar design tools",
      "Strong portfolio demonstrating user-centered design",
      "Experience with design systems and component libraries",
    ],
    technologies: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping"],
    posted: "2024-01-10",
    urgent: false,
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    experience: "4+ years",
    description:
      "Help us turn data into actionable insights and build machine learning models to improve our products.",
    requirements: [
      "4+ years of data science experience",
      "Strong proficiency in Python and SQL",
      "Experience with machine learning frameworks (TensorFlow, PyTorch)",
      "Statistical analysis and data visualization skills",
    ],
    technologies: ["Python", "SQL", "TensorFlow", "Pandas", "Jupyter"],
    posted: "2024-01-08",
    urgent: true,
  },
  {
    id: 5,
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    experience: "3+ years",
    description: "Build and maintain our mobile applications using React Native for iOS and Android platforms.",
    requirements: [
      "3+ years of React Native development experience",
      "Experience with native iOS and Android development",
      "Knowledge of mobile app deployment and distribution",
      "Understanding of mobile UI/UX best practices",
    ],
    technologies: ["React Native", "JavaScript", "iOS", "Android", "Firebase"],
    posted: "2024-01-05",
    urgent: false,
  },
  {
    id: 6,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    experience: "4+ years",
    description: "Protect our systems and data by implementing security best practices and monitoring for threats.",
    requirements: [
      "4+ years of cybersecurity experience",
      "Knowledge of security frameworks and compliance standards",
      "Experience with penetration testing and vulnerability assessment",
      "Relevant security certifications (CISSP, CEH, etc.)",
    ],
    technologies: ["SIEM", "Penetration Testing", "Vulnerability Assessment", "Compliance"],
    posted: "2024-01-03",
    urgent: false,
  },
]

const departments = ["All Departments", "Engineering", "Infrastructure", "Design", "Data & Analytics", "Security"]
const locations = ["All Locations", "San Francisco, CA", "Remote", "San Francisco, CA / Remote"]
const types = ["All Types", "Full-time", "Part-time", "Contract", "Internship"]

export default function JobListings() {
  return (
    <section id="open-positions" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open Positions</h2>
          <p className="mt-4 text-lg text-gray-600">Find your next opportunity with us</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-3"
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept.toLowerCase().replace(/\s+/g, "-")}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase().replace(/\s+/g, "-")}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((type) => (
                <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        {job.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-gray-600">{job.description}</CardDescription>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <Button asChild>
                        <Link href={`/careers/${job.id}`}>Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-gray-500">
                    <span>Department: {job.department}</span>
                    <span>Posted: {new Date(job.posted).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Positions
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
