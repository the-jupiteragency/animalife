"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PiTiktokLogo } from "react-icons/pi";
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
import { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/translations";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
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

      <div
        className={`relative z-10 text-white ${locale === "ar" ? "text-right" : "text-left"}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-3 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mb-12 lg:mb-16">
            {/* Enhanced Contact Form */}
            <div className="space-y-8">
              <div
                className={`${locale === "ar" ? "text-right" : "text-center lg:text-left"}`}
              >
                <h2
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg ${locale === "ar" ? "text-right" : "text-center lg:text-left"}`}
                >
                  {t(locale, "footer.contact.title")}
                </h2>
                <p
                  className={`text-lg md:text-xl text-white/90 leading-relaxed max-w-xl ${locale === "ar" ? "mx-0 text-right" : "mx-auto lg:mx-0"}`}
                >
                  {t(locale, "footer.contact.description")}
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
                {/* Mobile Layout */}
                <div className="sm:hidden space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-2 text-white">
                        {t(locale, "footer.contact.name")}
                      </label>
                      <Input
                        name="name"
                        placeholder={t(
                          locale,
                          "footer.contact.namePlaceholder"
                        )}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] rounded-xl h-10 text-sm transition-all duration-300 hover:bg-white/15"
                        disabled={isPending}
                      />
                      {getFieldError("name") && (
                        <p className="mt-1 text-xs text-red-300">
                          {getFieldError("name")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 text-white">
                        {t(locale, "footer.contact.phone")}
                      </label>
                      <Input
                        name="phone"
                        placeholder={t(
                          locale,
                          "footer.contact.phonePlaceholder"
                        )}
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] rounded-xl h-10 text-sm transition-all duration-300 hover:bg-white/15"
                        disabled={isPending}
                      />
                      {getFieldError("phone") && (
                        <p className="mt-1 text-xs text-red-300">
                          {getFieldError("phone")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 text-white">
                      {t(locale, "footer.contact.email")}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t(locale, "footer.contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] rounded-xl h-10 text-sm transition-all duration-300 hover:bg-white/15"
                      disabled={isPending}
                    />
                    {getFieldError("email") && (
                      <p className="mt-1 text-xs text-red-300">
                        {getFieldError("email")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 text-white">
                      {t(locale, "footer.contact.message")}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={t(locale, "footer.contact.placeholder")}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-[#F9F4DF] focus:ring-[#F9F4DF] resize-none rounded-xl text-sm transition-all duration-300 hover:bg-white/15"
                      disabled={isPending}
                    />
                    {getFieldError("message") && (
                      <p className="mt-1 text-xs text-red-300">
                        {getFieldError("message")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:block space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-white">
                        {t(locale, "footer.contact.name")}
                      </label>
                      <Input
                        name="name"
                        placeholder={t(
                          locale,
                          "footer.contact.namePlaceholder"
                        )}
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
                        {t(locale, "footer.contact.email")}
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t(
                          locale,
                          "footer.contact.emailPlaceholder"
                        )}
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
                      {t(locale, "footer.contact.phone")}
                    </label>
                    <Input
                      name="phone"
                      placeholder={t(locale, "footer.contact.phonePlaceholder")}
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
                      {t(locale, "footer.contact.message")}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={t(locale, "footer.contact.placeholder")}
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
                </div>

                <Button
                  type="submit"
                  size="sm"
                  variant="hover"
                  disabled={isPending}
                  className="w-full sm:w-auto transition-all duration-300 transform rounded-full px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-lg shadow-xl disabled:opacity-50  disabled:transform-none group"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t(locale, "footer.contact.sending")}
                    </>
                  ) : (
                    <>
                      {t(locale, "footer.contact.send")}
                      <IoIosArrowDropright
                        className={`h-5 w-5 transition-transform ${locale === "ar" ? "mr-2 rotate-180 group-hover:-translate-x-1" : "ml-2 group-hover:translate-x-1"}`}
                      />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <div
                className={`${locale === "ar" ? "text-right" : "text-center lg:text-left"}`}
              >
                <h2
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg ${locale === "ar" ? "text-right" : "text-center lg:text-left"}`}
                >
                  {t(locale, "footer.cta.title")}
                </h2>
                <p
                  className={`text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mb-8 ${locale === "ar" ? "mx-0 text-right" : "mx-auto lg:mx-0"}`}
                >
                  {t(locale, "footer.cta.subtitle")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-row gap-3 sm:gap-4 ${locale === "ar" ? "justify-start" : ""}`}
              >
                <Button
                  asChild
                  size="sm"
                  className="flex-1 sm:flex-none bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white transition-all duration-300 transform hover:scale-105 rounded-full px-4 sm:px-8 py-2 sm:py-4 font-bold text-sm sm:text-lg shadow-xl group"
                >
                  <a href={`/${locale}/products`}>
                    {t(locale, "footer.cta.button")}
                    <IoIosArrowDropright
                      className={`h-4 sm:h-5 w-4 sm:w-5 transition-transform ${locale === "ar" ? "mr-1 sm:mr-2 rotate-180 group-hover:-translate-x-1" : "ml-1 sm:ml-2 group-hover:translate-x-1"}`}
                    />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 sm:flex-none bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white transition-all duration-300 transform hover:scale-105 rounded-full px-4 sm:px-8 py-2 sm:py-4 font-bold text-sm sm:text-lg shadow-xl group"
                >
                  <a href={`/${locale}/about`}>
                    {t(locale, "common.learnMore")}
                    <IoIosArrowDropright
                      className={`h-4 sm:h-5 w-4 sm:w-5 transition-transform ${locale === "ar" ? "mr-1 sm:mr-2 rotate-180 group-hover:-translate-x-1" : "ml-1 sm:ml-2 group-hover:translate-x-1"}`}
                    />
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 mt-8">
                <div className="space-y-4">
                  <div className={`flex items-center gap-3 `}>
                    <MapPin className="w-5 h-5 text-[#F9F4DF] flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/r6jFjGYrDzwUVGxB8"
                      className="text-white hover:text-[#F9F4DF] transition-colors duration-300 text-sm sm:text-base"
                    >
                      {t(locale, "footer.info.address")}
                    </a>
                  </div>
                  <div className={`flex items-center gap-3 `}>
                    <Mail className="w-5 h-5 text-[#F9F4DF] flex-shrink-0" />
                    <a
                      href="mailto:Info@myanimalife.com"
                      className="text-white hover:text-[#F9F4DF] transition-colors duration-300 text-sm sm:text-base"
                    >
                      {t(locale, "footer.info.email")}
                    </a>
                  </div>
                  <div className={`flex items-center gap-3 `}>
                    <Phone className="w-5 h-5 text-[#F9F4DF] flex-shrink-0" />
                    <a
                      href="tel:+201222294101"
                      className="text-white hover:text-[#F9F4DF] transition-colors duration-300 text-sm sm:text-base"
                    >
                      {t(locale, "footer.info.phone")}
                    </a>
                  </div>
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
                  href={`/${locale}/products`}
                  className="text-white hover:text-[#F9F4DF] transition-colors duration-300 font-semibold text-lg"
                >
                  {t(locale, "footer.nav.shop")}
                </a>
                <a
                  href={`/${locale}/about`}
                  className="text-white hover:text-[#F9F4DF] transition-colors duration-300 font-semibold text-lg"
                >
                  {t(locale, "footer.nav.about")}
                </a>
                {/* <a
                  href="#contact"
                  className="text-white hover:text-[#F9F4DF] transition-colors duration-300 font-semibold text-lg"
                >
                  Contact
                </a> */}
              </nav>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                {[
                  {
                    Icon: Facebook,
                    href: "https://web.facebook.com/AnimaLife.PetFood/",
                    label: "Facebook",
                  },
                  {
                    Icon: PiTiktokLogo,
                    href: "https://www.tiktok.com/@animalife.petfood/",
                    label: "TikTok",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/animalife.petfood/",
                    label: "Instagram",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F9F4DF] hover:bg-white/10 transition-all duration-300 hover:scale-110 rounded-full w-12 h-12 border border-white/20 hover:border-[#F9F4DF] flex items-center justify-center"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 gap-4">
              <p
                className={`text-white/80 font-medium ${locale === "ar" ? "text-center md:text-right" : "text-center md:text-left"}`}
              >
                {t(locale, "footer.legal.copyright")}
              </p>
              <div className="flex gap-8">
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {t(locale, "footer.legal.terms")}
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {t(locale, "footer.legal.privacy")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
