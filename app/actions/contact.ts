"use server"

import { resend } from "@/lib/resend"
import { ContactEmailTemplate, AutoReplyEmailTemplate } from "@/lib/email-templates"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  inquiryType?: string
  subject: string
  message: string
}

interface ContactFormResult {
  success: boolean
  message: string
  errors?: Record<string, string>
}

// Validation function
function validateContactForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long"
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  if (data.phone && data.phone.trim() && !/^[+]?[0-9\s\-$$$$]{10,}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Please enter a valid phone number"
  }

  if (!data.subject || data.subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters long"
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long"
  }

  return errors
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  try {
    // Extract form data
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      inquiryType: formData.get("inquiryType") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const errors = validateContactForm(data)
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors,
      }
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "AnimalLife Contact <noreply@animalife.com>",
      to: ["support@animalife.com"], // Replace with your actual email
      subject: `New Contact Form: ${data.subject}`,
      react: ContactEmailTemplate(data),
    })

    if (adminEmailResult.error) {
      console.error("Failed to send admin email:", adminEmailResult.error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    // Send auto-reply to user
    const autoReplyResult = await resend.emails.send({
      from: "AnimalLife Support <support@animalife.com>",
      to: [data.email],
      subject: "Thank you for contacting AnimalLife!",
      react: AutoReplyEmailTemplate({ name: data.name }),
    })

    if (autoReplyResult.error) {
      console.error("Failed to send auto-reply:", autoReplyResult.error)
      // Don't fail the entire operation if auto-reply fails
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

// Simple footer contact form (without inquiry type)
export async function submitFooterContactForm(formData: FormData): Promise<ContactFormResult> {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: "General Inquiry from Footer Form",
      message: formData.get("message") as string,
    }

    // Validate form data
    const errors = validateContactForm(data)
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors,
      }
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "AnimalLife Contact <noreply@animalife.com>",
      to: ["support@animalife.com"], // Replace with your actual email
      subject: `Footer Contact Form: ${data.name}`,
      react: ContactEmailTemplate(data),
    })

    if (adminEmailResult.error) {
      console.error("Failed to send admin email:", adminEmailResult.error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    // Send auto-reply to user
    const autoReplyResult = await resend.emails.send({
      from: "AnimalLife Support <support@animalife.com>",
      to: [data.email],
      subject: "Thank you for contacting AnimalLife!",
      react: AutoReplyEmailTemplate({ name: data.name }),
    })

    if (autoReplyResult.error) {
      console.error("Failed to send auto-reply:", autoReplyResult.error)
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Footer contact form submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
