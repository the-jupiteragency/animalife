"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden sm:w-full sm:bg-[#1B4838] sm:min-h-screen">
      {/* Background Image */}
      <div className="relative w-full h-auto sm:absolute sm:inset-0">
        <Image
          src="/about-sec.webp"
          alt="Woman holding a golden retriever dog"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain sm:object-cover sm:h-full"
          priority
          sizes="100vw"
        />
        {/* Enhanced overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 sm:bg-gradient-to-r sm:from-black/50 sm:via-black/20 sm:to-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-transparent lg:bg-transparent z-10" />
      </div>

      {/* Mobile Content - Overlaid on image */}
      <div className="absolute inset-0 z-30 sm:hidden">
        <div className="absolute top-[50%] left-4 max-w-[280px]">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Mobile Title */}
            <h1
              className={`text-base font-bold text-white mb-4 leading-tight transform transition-all duration-1200 delay-200 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Why AnimaLife
              <br />
              Gets It Right
            </h1>

            {/* Mobile CTA Button */}
            <div
              className={`transform transition-all duration-1200 delay-600 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <Link
                href="/about"
                className="inline-flex items-center font-semibold px-2.5 py-1.5 rounded-full transition-all duration-300 ease-out shadow-lg hover:shadow-xl text-[10px] bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white group"
              >
                About AnimaLife
                <IoIosArrowDropright className="ml-1 h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Content - Original layout */}
      <div className="relative z-20 hidden sm:flex min-h-screen w-full">
        <div className="container mx-auto px-6 lg:px-4 w-full flex items-center lg:items-center pt-20 lg:pt-80">
          <div className="w-full pb-12 md:pb-16 lg:pb-10">
            <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                {/* Desktop Title */}
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#f3f0e4] mb-4 md:mb-5 lg:mb-6 leading-tight text-left transform transition-all duration-1200 delay-200 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  Why AnimaLife
                  <br />
                  Gets It Right
                </h1>

                {/* Desktop Description */}
                <p
                  className={`text-base md:text-lg lg:text-xl mb-7 md:mb-8 leading-relaxed text-[#FFFCEF] text-left transform transition-all duration-1200 delay-400 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  At AnimaLife, we've poured years of scientific research and
                  real pet parent feedback into developing our kibble shapes and
                  sizes.
                </p>

                {/* Desktop CTA Button */}
                <div
                  className={`transform transition-all duration-1200 delay-600 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-95"
                  }`}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 ease-out shadow-lg hover:shadow-xl text-base md:text-lg bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white group"
                  >
                    About AnimaLife
                    <IoIosArrowDropright className="ml-2 h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile text background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden z-20"></div>
    </section>
  );
}
