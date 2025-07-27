import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CareersHero from "@/components/sections/careers-hero"
import JobListings from "@/components/sections/job-listings"
import CompanyBenefits from "@/components/sections/company-benefits"

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Join Seazone and help shape the future of technology. Explore exciting career opportunities in a dynamic, innovative environment.",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CareersHero />
        <CompanyBenefits />
        <JobListings />
      </main>
      <Footer />
    </div>
  )
}
