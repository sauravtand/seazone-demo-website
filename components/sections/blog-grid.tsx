"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.",
    content:
      "Artificial intelligence is transforming the landscape of web development in unprecedented ways. From automated testing to intelligent code completion, AI tools are becoming indispensable for modern developers...",
    author: "Sarah Kim",
    authorRole: "CTO",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["AI", "Web Development", "Machine Learning", "Automation"],
  },
  {
    id: 2,
    title: "Cloud Security Best Practices: Protecting Your Digital Assets",
    excerpt:
      "Learn essential security measures to protect your cloud infrastructure and sensitive data from evolving cyber threats.",
    content:
      "As businesses increasingly migrate to cloud platforms, security becomes paramount. This comprehensive guide covers the essential practices every organization should implement...",
    author: "David Rodriguez",
    authorRole: "VP of Engineering",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["Cloud Security", "Cybersecurity", "Best Practices", "Data Protection"],
  },
  {
    id: 3,
    title: "Microservices Architecture: When and How to Implement",
    excerpt:
      "A comprehensive guide to microservices architecture, including benefits, challenges, and implementation strategies.",
    content:
      "Microservices architecture has become a popular choice for building scalable applications. This article explores when to choose microservices over monolithic architecture...",
    author: "Alex Thompson",
    authorRole: "CEO & Founder",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    category: "Software Architecture",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["Microservices", "Architecture", "Scalability", "DevOps"],
  },
  {
    id: 4,
    title: "React 18 Performance Optimization Techniques",
    excerpt: "Discover advanced techniques to optimize React applications for better performance and user experience.",
    content:
      "React 18 introduced several new features that can significantly improve application performance. Learn how to leverage concurrent features, automatic batching, and more...",
    author: "Lisa Chen",
    authorRole: "Head of Design",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    category: "Frontend Development",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["React", "Performance", "Frontend", "JavaScript"],
  },
  {
    id: 5,
    title: "The Rise of Edge Computing: Implications for Modern Applications",
    excerpt: "Understanding edge computing and its impact on application architecture and user experience.",
    content:
      "Edge computing is reshaping how we think about data processing and application deployment. This article explores the benefits and challenges of edge computing...",
    author: "Michael Chen",
    authorRole: "Senior Developer",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-05",
    readTime: "9 min read",
    category: "Cloud Computing",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Edge Computing", "Cloud", "Performance", "Infrastructure"],
  },
  {
    id: 6,
    title: "Building Accessible Web Applications: A Developer's Guide",
    excerpt: "Essential accessibility principles and practical techniques for creating inclusive web experiences.",
    content:
      "Web accessibility is not just a legal requirement but a moral imperative. Learn how to build applications that work for everyone...",
    author: "Emily Rodriguez",
    authorRole: "UX Designer",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-03",
    readTime: "11 min read",
    category: "Web Accessibility",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Accessibility", "UX Design", "Web Standards", "Inclusive Design"],
  },
  {
    id: 7,
    title: "DevOps Culture: Transforming Development and Operations",
    excerpt:
      "How to successfully implement DevOps practices and culture in your organization for better collaboration and delivery.",
    content:
      "DevOps is more than just tools and processes—it's a cultural transformation. Discover how to build a successful DevOps culture in your organization...",
    author: "James Wilson",
    authorRole: "DevOps Engineer",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2024-01-01",
    readTime: "13 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["DevOps", "Culture", "Collaboration", "Automation"],
  },
  {
    id: 8,
    title: "Mobile-First Design: Creating Responsive Experiences",
    excerpt: "Best practices for mobile-first design and creating seamless experiences across all devices.",
    content:
      "With mobile traffic dominating the web, mobile-first design has become essential. Learn the principles and techniques for creating responsive experiences...",
    author: "Anna Martinez",
    authorRole: "Mobile Developer",
    authorImage: "/placeholder.svg?height=40&width=40",
    publishedAt: "2023-12-28",
    readTime: "6 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Mobile Design", "Responsive", "UX", "Frontend"],
  },
]

const categories = [
  "All",
  "AI & Machine Learning",
  "Cybersecurity",
  "Software Architecture",
  "Frontend Development",
  "Cloud Computing",
  "Web Accessibility",
  "DevOps",
  "Mobile Development",
]

export default function BlogGrid() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
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

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        index === 0 ? "h-64" : "h-48"
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className={index === 0 ? "text-xl" : "text-lg"}>{post.title}</CardTitle>
                    <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            width={24}
                            height={24}
                            className="rounded-full mr-2"
                          />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-base line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      <span className="mr-3">{post.author}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={`/blog/${post.id}`}>Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button size="sm">1</Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
