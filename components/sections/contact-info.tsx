"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    details: ["hello@seazone.com", "support@seazone.com"],
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Innovation Drive", "San Francisco, CA 94105"],
    description: "Come say hello at our HQ",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    description: "We're here to help",
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's start a conversation</h3>
        <p className="text-gray-600 mb-8">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="h-12 w-12 mx-auto mb-2" />
            <p>Interactive Map</p>
            <p className="text-sm">Google Maps integration would go here</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
