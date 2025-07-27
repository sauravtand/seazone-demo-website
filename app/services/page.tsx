import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ServicesGrid from "@/components/sections/services-grid"
import ServicesCTA from "@/components/sections/services-cta"

export const metadata: Metadata = {
  title: "Our Services - Comprehensive IT Solutions",
  description:
    "Explore our full range of IT services including web development, cloud solutions, mobile apps, cybersecurity, and digital transformation.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive IT solutions tailored to your business needs. From web development to digital
                transformation, we've got you covered.
              </p>
            </div>
          </div>
        </section>
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
