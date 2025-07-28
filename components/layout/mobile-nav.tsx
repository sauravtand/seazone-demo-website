"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Code2, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

interface MobileNavProps {
  isOpen: boolean
  onToggle: () => void
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onToggle}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.3,
            }}
            className="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <Link href="/" className="flex items-center space-x-2" onClick={onToggle}>
                  <Code2 className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">Seazone</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onToggle}
                  aria-label="Close menu"
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-4 space-y-1">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                            isActive
                              ? "bg-blue-50 text-blue-600 border border-blue-100"
                              : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
                          )}
                          onClick={onToggle}
                        >
                          <span>{item.name}</span>
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isActive ? "text-blue-600" : "text-gray-400",
                            )}
                          />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Button asChild className="w-full h-12 text-base font-semibold">
                    <Link href="/contact" onClick={onToggle}>
                      Get Started
                    </Link>
                  </Button>
                  <p className="mt-3 text-xs text-center text-gray-500">Ready to transform your business?</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
