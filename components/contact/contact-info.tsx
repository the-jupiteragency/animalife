"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+20 123 456 7890",
    description: "Mon-Fri, 9AM-6PM",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "support@animalife.com",
    description: "We'll respond within 24 hours",
    color: "bg-green-500",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    details: "Available Now",
    description: "Instant support online",
    color: "bg-purple-500",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    details: "1-800-ANIMALIFE",
    description: "Toll-free support line",
    color: "bg-orange-500",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 lg:p-12">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Contact Information</h2>
        <p className="text-gray-700 mb-8">
          Choose the best way to reach us. Our team is ready to assist you with any questions about our products or
          services.
        </p>

        {/* Contact Methods */}
        <div className="space-y-4 mb-8">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 bg-white"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{method.title}</h3>
                    <p className="text-green-700 font-medium">{method.details}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Hours */}
        <Card className="mb-8 border-0 bg-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Office Hours</h3>
            </div>
            <div className="space-y-2">
              {officeHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-700">{schedule.day}</span>
                  <span className="font-medium text-green-700">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card className="border-0 bg-white">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Visit Our Office</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Pet Nutrition Street
                  <br />
                  Cairo, Egypt 12345
                  <br />
                  Near City Center Mall
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
