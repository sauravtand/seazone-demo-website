import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Seazone - Innovative IT Solutions",
    template: "%s | Seazone",
  },
  description:
    "Leading IT company providing innovative technology solutions, web development, cloud services, and digital transformation.",
  keywords: ["IT company", "web development", "cloud services", "digital transformation", "technology solutions"],
  authors: [{ name: "Seazone Team" }],
  creator: "Seazone",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seazone.com",
    title: "Seazone - Innovative IT Solutions",
    description:
      "Leading IT company providing innovative technology solutions, web development, cloud services, and digital transformation.",
    siteName: "Seazone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seazone - Innovative IT Solutions",
    description:
      "Leading IT company providing innovative technology solutions, web development, cloud services, and digital transformation.",
    creator: "@seazone",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'seazone-website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
