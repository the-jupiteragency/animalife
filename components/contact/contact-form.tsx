"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

const inquiryTypes = [
  "Product Information",
  "Nutrition Advice",
  "Order Support",
  "Store Locations",
  "Partnership",
  "Other",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })

  const [result, setResult] = useState<{
    success: boolean
    message: string
    errors?: Record<string, string>
  } | null>(null)

  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResult(null)

    startTransition(async () => {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const response = await submitContactForm(formDataObj)
      setResult(response)

      if (response.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          subject: "",
          message: "",
        })
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear specific field error when user starts typing
    if (result?.errors?.[name]) {
      setResult((prev) =>
        prev
          ? {
              ...prev,
              errors: prev.errors ? { ...prev.errors, [name]: undefined } : undefined,
            }
          : null,
      )
    }
  }

  const selectInquiryType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: type,
    }))

    // Clear inquiry type error
    if (result?.errors?.inquiryType) {
      setResult((prev) =>
        prev
          ? {
              ...prev,
              errors: prev.errors ? { ...prev.errors, inquiryType: undefined } : undefined,
            }
          : null,
      )
    }
  }

  const getFieldError = (fieldName: string) => {
    return result?.errors?.[fieldName]
  }

  return (
    <div className="bg-white p-8 lg:p-12">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and our team will get back to you as soon as possible.
        </p>

        {/* Success/Error Message */}
        {result && (
          <Card className={`mb-6 ${result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                {result.success ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
                <p className={`${result.success ? "text-green-800" : "text-red-800"} font-medium`}>{result.message}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <Input
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`focus:ring-green-500 focus:border-green-500 ${
                  getFieldError("name") ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
                disabled={isPending}
              />
              {getFieldError("name") && <p className="mt-1 text-sm text-red-600">{getFieldError("name")}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <Input
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={`focus:ring-green-500 focus:border-green-500 ${
                  getFieldError("email") ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                }`}
                disabled={isPending}
              />
              {getFieldError("email") && <p className="mt-1 text-sm text-red-600">{getFieldError("email")}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <Input
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`focus:ring-green-500 focus:border-green-500 ${
                getFieldError("phone") ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
              disabled={isPending}
            />
            {getFieldError("phone") && <p className="mt-1 text-sm text-red-600">{getFieldError("phone")}</p>}
          </div>

          {/* Inquiry Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">What can we help you with? *</label>
            <div className="flex flex-wrap gap-2">
              {inquiryTypes.map((type) => (
                <Badge
                  key={type}
                  variant={formData.inquiryType === type ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    formData.inquiryType === type
                      ? "bg-green-800 text-white hover:bg-green-700"
                      : "border-green-800 text-green-800 hover:bg-green-50"
                  } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => !isPending && selectInquiryType(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
            {getFieldError("inquiryType") && (
              <p className="mt-1 text-sm text-red-600">{getFieldError("inquiryType")}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
            <Input
              name="subject"
              placeholder="Brief subject of your inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
              className={`focus:ring-green-500 focus:border-green-500 ${
                getFieldError("subject") ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
              disabled={isPending}
            />
            {getFieldError("subject") && <p className="mt-1 text-sm text-red-600">{getFieldError("subject")}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <Textarea
              name="message"
              placeholder="Please provide details about your inquiry..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className={`focus:ring-green-500 focus:border-green-500 resize-none ${
                getFieldError("message") ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
              }`}
              disabled={isPending}
            />
            {getFieldError("message") && <p className="mt-1 text-sm text-red-600">{getFieldError("message")}</p>}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-green-800 hover:bg-green-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
