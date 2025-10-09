"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${scrolled ? "fixed" : "relative"} md:fixed md:top-0 md:left-0 md:right-0 ${scrolled ? "top-0 left-0 right-0" : ""} z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0A3D2C]" : "bg-[#F5F1E8] md:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 md:px-1 py-4 md:py-6 flex items-center justify-between font-mono font-normal text-base bg-transparent text-[rgba(249,244,223,1)] md:text-[rgba(249,244,223,1)] flex-row pb-7">
        <Link
          href={`/${locale}`}
          className="text-[#0A3D2C] md:text-white text-xl md:text-2xl font-bold hover:text-green-200 transition-colors"
        >
          <Image
            src="/logo.svg"
            alt="AnimaLife"
            width={120}
            height={120}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} scrolled={scrolled} />
          <div
            className="transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoMdCloseCircle
                className={`h-10 w-10 ${scrolled ? "text-white" : "text-[#1B4838]"}`}
              />
            ) : (
              <GiHamburgerMenu
                className={`h-10 w-10 ${scrolled ? "text-white" : "text-[#BA643B] md:text-[#BA643B]"}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#2d5a3d]">
          <div className="absolute top-4 right-4">
            <div
              className="text-white transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdCloseCircle className="h-12 w-12" />
            </div>
          </div>

          <div className="flex items-center justify-center min-h-screen">
            <nav className="text-center space-y-8 md:space-y-12">
              <Link
                href={`/${locale}`}
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(locale, 'nav.home')}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(locale, 'nav.products')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(locale, 'nav.about')}
              </Link>
              <Link
                href={`/${locale}/academy`}
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(locale, 'nav.academy')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
