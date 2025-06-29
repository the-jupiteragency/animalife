"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
  AlertCircle,
  Loader2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    errors?: Record<string, string>;
  } | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setResult({
            success: true,
            message: data.message,
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          setResult({
            success: false,
            message: data.message || "Something went wrong. Please try again.",
          });
        }
      } catch (error) {
        setResult({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (result?.errors?.[name]) {
      setResult((prev) =>
        prev
          ? {
              ...prev,
              errors: prev.errors
                ? Object.fromEntries(
                    Object.entries(prev.errors).filter(([key]) => key !== name)
                  )
                : undefined,
            }
          : null
      );
    }
  };

  const getFieldError = (fieldName: string) => {
    return result?.errors?.[fieldName];
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Enhanced Background with the provided image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-footer.webp"
          alt="Footer background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mb-12 lg:mb-16">
            {/* Enhanced Contact Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                  Contact Us
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Get in touch with us for any questions about our products or
                  services. We're here to help your pets live their best life.
                </p>
              </div>

              {/* Success/Error Message */}
              {result && (
                <Card
                  className={`${
                    result.success
                      ? "border-green-200 bg-green-50/95"
                      : "border-red-200 bg-red-50/95"
                  } backdrop-blur-sm`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      {result.success ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                      <p
                        className={`${result.success ? "text-green-800" : "text-red-800"} font-medium`}
                      >
                        {result.message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-white">
                      Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] rounded-xl h-12 transition-all duration-300 hover:bg-white/15"
                      disabled={isPending}
                    />
                    {getFieldError("name") && (
                      <p className="mt-2 text-sm text-red-300">
                        {getFieldError("name")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-white">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] rounded-xl h-12 transition-all duration-300 hover:bg-white/15"
                      disabled={isPending}
                    />
                    {getFieldError("email") && (
                      <p className="mt-2 text-sm text-red-300">
                        {getFieldError("email")}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-white">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] rounded-xl h-12 transition-all duration-300 hover:bg-white/15"
                    disabled={isPending}
                  />
                  {getFieldError("phone") && (
                    <p className="mt-2 text-sm text-red-300">
                      {getFieldError("phone")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-white">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help you and your pet..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] resize-none rounded-xl transition-all duration-300 hover:bg-white/15"
                    disabled={isPending}
                  />
                  {getFieldError("message") && (
                    <p className="mt-2 text-sm text-red-300">
                      {getFieldError("message")}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="hover"
                  disabled={isPending}
                  className="w-full sm:w-auto transition-all duration-300 transform  rounded-full px-8 py-4 font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <IoIosArrowDropright className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Enhanced Map Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                  Visit Us
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Find us at any of our convenient locations. We're always happy
                  to meet you and your furry friends!
                </p>
              </div>

              {/* Interactive Map */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="h-80 md:h-96 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634882835!2d31.21726478389247!3d30.059556316673063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1750657177617!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />

                  {/* Enhanced Map Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-6 h-6 text-[#2d5a3d]" />
                        <h3 className="text-xl font-bold text-[#2d5a3d]">
                          AnimalLife Headquarters
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 font-medium">
                        Cairo, Egypt
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>+20 (123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>info@animalife.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h4 className="font-bold text-white mb-2 text-lg">
                    Downtown Branch
                  </h4>
                  <p className="text-white/80 mb-2">
                    456 Main Street, Downtown
                  </p>
                  <p className="text-xs text-white/60">Mon-Sat: 9AM-8PM</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h4 className="font-bold text-white mb-2 text-lg">
                    Mall Branch
                  </h4>
                  <p className="text-white/80 mb-2">789 Shopping Center</p>
                  <p className="text-xs text-white/60">Daily: 10AM-10PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="pt-9">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-8 justify-center md:justify-start">
                <a
                  href="#home"
                  className="text-white hover:text-[#F9F4DF] transition-colors duration-300 font-semibold text-lg"
                >
                  Shop
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[#F9F4DF] transition-colors duration-300 font-semibold text-lg"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-[#F9F4DF] transition-colors duration-300 font-semibold text-lg"
                >
                  Contact
                </a>
              </nav>

              {/* Enhanced Social Media Icons */}
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-[#F9F4DF] hover:bg-white/10 transition-all duration-300 hover:scale-110 rounded-full w-12 h-12 border border-white/20 hover:border-[#F9F4DF]"
                  >
                    <Icon className="h-6 w-6" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 gap-4">
              <p className="text-white/80 text-center md:text-left font-medium">
                © 2025 Animalife. All rights reserved.
              </p>
              <div className="flex gap-8">
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
