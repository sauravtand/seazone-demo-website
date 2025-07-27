import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import BlogGrid from "@/components/sections/blog-grid"
import BlogHero from "@/components/sections/blog-hero"

export const metadata: Metadata = {
  title: "Blog - Tech Insights & Industry News",
  description:
    "Stay updated with the latest technology trends, industry insights, and expert opinions from the Seazone team.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
