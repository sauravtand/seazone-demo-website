import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PortfolioGrid from "@/components/sections/portfolio-grid"
import PortfolioHero from "@/components/sections/portfolio-hero"

export const metadata: Metadata = {
  title: "Portfolio - Our Success Stories",
  description: "Explore our portfolio of successful projects and case studies showcasing innovative IT solutions.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  )
}
