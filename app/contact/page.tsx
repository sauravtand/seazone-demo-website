import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ContactForm from "@/components/sections/contact-form"
import ContactInfo from "@/components/sections/contact-info"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Ready to start your project? Contact Seazone for a free consultation and discover how we can transform your business.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Get in Touch</h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Let's discuss your project and explore how we can help you achieve
                your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
