import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ServicesOverview from "@/components/sections/services-overview"
import StatsSection from "@/components/sections/stats-section"
import TechStackCarousel from "@/components/sections/tech-stack-carousel"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Home - Innovative IT Solutions",
  description:
    "Seazone delivers cutting-edge technology solutions to transform your business. Expert web development, cloud services, and digital innovation.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <StatsSection />
        <TechStackCarousel />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
