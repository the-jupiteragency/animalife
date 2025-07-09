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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1B4838] flex items-stretch">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/about-sec.webp"
          alt="Woman holding a golden retriever dog"
          fill
          className="object-cover object-center h-full w-full"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        {/* Enhanced overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-transparent lg:bg-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex min-h-screen w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 w-full flex items-end lg:items-center pt-20 lg:pt-80">
          {/* Content positioned in bottom left on mobile, left center on desktop */}
          <div className="w-full pb-8 sm:pb-12 md:pb-16 lg:pb-10">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                {/* Title */}
                <h1
                  className={`text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#f3f0e4] mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left transform transition-all duration-1200 delay-200 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  Why AnimaLife
                  <br />
                  Gets It Right
                </h1>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 leading-relaxed text-[#FFFCEF] text-left max-w-[180px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] transform transition-all duration-1200 delay-400 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  At AnimaLife, we've poured years of scientific research and
                  real pet parent feedback into developing our kibble shapes and
                  sizes.
                </p>

                {/* CTA Button */}
                <div
                  className={`transform transition-all duration-1200 delay-600 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-95"
                  }`}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center font-semibold px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 ease-out shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white group"
                  >
                    About AnimaLife
                    <IoIosArrowDropright className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional mobile readability enhancement */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent md:hidden z-15"></div>
    </section>
  );
}
