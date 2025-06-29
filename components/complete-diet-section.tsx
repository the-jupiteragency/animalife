"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";

export function CompleteDietSection() {
  return (
    <section className="relative min-h-auto overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/complete-diet-bg.webp"
          alt="Golden retriever with kibble on grass"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile First - Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          {/* Mobile Layout (xs to md) */}
          <div className="block lg:hidden">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl max-w-lg mx-auto">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#2d5a3d] leading-tight">
                What Is A Complete
                <br />
                And Balanced Diet?
              </h2>

              <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#2d5a3d]/80 leading-relaxed">
                At AnimalLife, we've poured years of scientific research and
                real pet parent feedback into developing our kibble shapes and
                sizes. Every piece is tailored not just for breed size, but for
                digestibility, dental support, and real-life eating habits.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center bg-[#d4704a] text-white hover:bg-[#b85a3a] transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Shop Animalife
                <IoIosArrowDropright className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Desktop Layout (lg and up) - Exact match to your design */}
          <div className="hidden lg:block">
            <div className="flex items-center max-h-screen gap-12 mx-16">
              {/* Left side - Image area (background handles this) */}
              <div className="flex-1"></div>

              {/* Right Side - Content positioned exactly like your design */}
              <div className="flex-1 flex items-center pt-32 ">
                <div className="max-w-xl">
                  <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 xl:mb-8 text-[#2d5a3d] leading-tight">
                    What Is A Complete
                    <br />
                    And Balanced Diet?
                  </h2>

                  <p className="text-lg xl:text-xl 2xl:text-2xl mb-8 xl:mb-10 text-[#2d5a3d]/80 leading-relaxed font-light">
                    At AnimalLife, we've poured years of scientific research and
                    real pet parent feedback into developing our kibble shapes
                    and sizes. Every piece is tailored not just for breed size,
                    but for digestibility, dental support, and real-life eating
                    habits.
                  </p>

                  <Link
                    href="/products"
                    className="inline-flex items-center bg-[#d4704a] text-white hover:bg-[#b85a3a] transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-4 xl:px-10 xl:py-5 text-lg xl:text-xl font-semibold shadow-xl group"
                  >
                    Shop Animalife
                    <IoIosArrowDropright className="ml-3 h-5 w-5 xl:h-6 xl:w-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Layout (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-8 items-center min-h-screen">
              <div></div>
              <div>
                <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2d5a3d] leading-tight">
                    What Is A Complete
                    <br />
                    And Balanced Diet?
                  </h2>

                  <p className="text-base md:text-lg mb-8 text-[#2d5a3d]/80 leading-relaxed">
                    At AnimalLife, we've poured years of scientific research and
                    real pet parent feedback into developing our kibble shapes
                    and sizes. Every piece is tailored not just for breed size,
                    but for digestibility, dental support, and real-life eating
                    habits.
                  </p>

                  <Link
                    href="/products"
                    className="inline-flex items-center bg-[#d4704a] text-white hover:bg-[#b85a3a] transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-4 text-lg font-semibold shadow-xl"
                  >
                    Shop Animalife
                    <IoIosArrowDropright className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Visual Elements */}
    </section>
  );
}
