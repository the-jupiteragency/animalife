"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "Seoudi", logo: "/seoudi.webp" },
  { name: "Oscar", logo: "/oscar.webp" },
  { name: "Carrefour", logo: "/carrefour.webp" },
  { name: "Spinneys", logo: "/spinneys.webp" },
  { name: "Gourmet", logo: "/gourmet.webp" },
];

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-[#F5F1E8] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header - Left Aligned */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-[#2d5a3d] leading-tight">
            Where To Find Us
          </h2>
          <p className="text-lg md:text-lg text-gray-600 max-w-2xl">
            Get AnimaLife, Anytime, Anywhere
          </p>
        </div>

        {/* Infinite Slider for All Screen Sizes */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-[#F5F1E8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-[#F5F1E8] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 xl:gap-12 overflow-x-hidden"
            style={{ width: "calc(200% + 48px)" }}
          >
            {/* Triple the logos for seamless loop on smaller screens */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 xl:w-56 h-16 sm:h-20 md:h-24 xl:h-28 flex items-center justify-cente rounded-xl md:rounded-2xl shadow-sm transition-all duration-300 group border border-gray-100 p-3 sm:p-4 md:p-6"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#2d5a3d]/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-24 h-24 border border-[#2d5a3d]/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#2d5a3d]/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  );
}
