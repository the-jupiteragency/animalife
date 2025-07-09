import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { ContactEmailTemplate } from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send notification email to admin
    await resend.emails.send({
      from: "AnimaLife Contact <onboarding@resend.dev>",
      to: ["info@animalife-mena.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        subject: "Contact Form Submission",
        message,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
