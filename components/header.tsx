"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0A3D2C]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between font-mono font-normal text-base bg-transparent text-[rgba(249,244,223,1)] flex-row">
        <Link
          href="/"
          className="text-white text-xl md:text-2xl font-bold hover:text-green-200 transition-colors"
        >
          <Image
            src="/logo.svg"
            alt="AnimalLife"
            width={120}
            height={120}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

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
              className={`h-10 w-10 ${scrolled ? "text-white" : "md:text-[#BA643B]"}`}
            />
          )}
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
                href="/"
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link
                href="/about"
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Discover AnimaLife
              </Link>
              <Link
                href="/academy"
                className="block text-white text-xl md:text-2xl font-medium hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AnimaLife Academy
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
