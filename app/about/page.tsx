import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import MissionSection from "@/components/sections/mission-section"
import LeadershipSection from "@/components/sections/leadership-section"
import TimelineSection from "@/components/sections/timeline-section"

export const metadata: Metadata = {
  title: "About Us - Our Mission & Team",
  description: "Learn about Seazone's mission, vision, and the expert team behind our innovative IT solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MissionSection />
        <LeadershipSection />
        <TimelineSection />
      </main>
      <Footer />
    </div>
  )
}
