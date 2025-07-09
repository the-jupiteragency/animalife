"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const productCards = [
  {
    id: "dry-food",
    title: "Dry Food:",
    subtitle: "Puppies, Adult Cats, Kittens",
    image: "/aboutcard1.webp",
    comingSoon: true,
  },
  {
    id: "canned-food",
    title: "Canned food:",
    subtitle: "High-moisture, premium wet food options.",
    image: "/aboutcard2.webp",
    comingSoon: true,
  },
  {
    id: "fresh-food",
    title: "Fresh food:",
    subtitle:
      "Offering pet owners natural and freshly prepared meals for their dogs.",
    image: "/aboutcard3.webp",
    comingSoon: true,
  },
];

export function AboutUsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getPlateImage = (cardId: string) => {
    switch (cardId) {
      case "dry-food":
        return "/aboutcard3.webp";
      case "canned-food":
        return "/aboutcard2.webp";
      case "fresh-food":
        return "/aboutcard1.webp";
      default:
        return "/placeholder.svg";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Content moved left with smaller text */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero-image.webp"
            alt="Behind the Bowl Hero"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20 sm:bg-black/10 md:bg-transparent" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="max-w-full ml-2 sm:ml-4 md:ml-8 lg:ml-12">
              {/* Smaller text sizes */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-[#F9F4DF] leading-[1.1] tracking-tight">
                Behind the Bowl:
                <br />
                <span className="block mt-1 sm:mt-2">
                  Science You Can Trust
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#F9F4DF] leading-relaxed font-light max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                Born from a love of pets and a passion for science, AnimaLife
                crafts nutrition that's as smart as it is delicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - New layout for mobile with full image visibility */}
      <section className="relative overflow-hidden">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Full image section */}
          <div className="relative h-[50vh] min-h-[400px]">
            <Image
              src="/about-mission-sec.webp"
              alt="AnimaLife Mission"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Content section below image */}
          <div className="bg-white py-8 px-4">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#134635] leading-tight">
                AnimaLife Mission
              </h2>
              <div className="w-16 h-1 bg-[#d4704a] mb-4 rounded-full mx-auto"></div>
              <p className="text-sm text-[#134635]/90 leading-relaxed font-light">
                To revolutionize pet wellness through research-backed food,
                because 'good enough' isn't enough.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative min-h-screen">
          <div className="absolute inset-0">
            <Image
              src="/about-mission-sec.webp"
              alt="AnimaLife Mission"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
                <div className="hidden lg:block"></div>

                <div className="max-w-full lg:max-w-2xl lg:ml-auto">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 md:p-8 lg:p-3 shadow-xl lg:bg-transparent lg:backdrop-blur-none lg:shadow-none">
                    {/* Single line heading with smaller text */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 text-[#134635] leading-tight tracking-tight whitespace-nowrap">
                      AnimaLife Mission
                    </h2>

                    <div className="w-16 md:w-20 lg:w-24 xl:w-32 h-1 md:h-1.5 bg-[#d4704a] mb-4 md:mb-6 lg:mb-8 rounded-full"></div>

                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#134635]/90 leading-relaxed font-light">
                      To revolutionize pet wellness through research-backed
                      food, because 'good enough' isn't enough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AnimaLife Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-why-bg.webp"
            alt="Why AnimaLife Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/5" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2d5a3d] leading-tight tracking-tight">
                Why AnimaLife?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
              {/* R&D Focused */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center md:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto md:mx-0">
                  <Image
                    src="/mission-icon1.svg"
                    alt="R&D Focused Icon"
                    width={112}
                    height={112}
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2d5a3d] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    R&D Focused
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#2d5a3d]/80 leading-relaxed">
                    We test kibble size, digestion, and stool quality (yes,
                    really!) before launch
                  </p>
                </div>
              </div>

              {/* Nutritional Philosophy */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center md:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto md:mx-0">
                  <Image
                    src="/mission-icon2.svg"
                    alt="Nutritional Philosophy Icon"
                    width={112}
                    height={112}
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2d5a3d] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    Nutritional Philosophy
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#2d5a3d]/80 leading-relaxed">
                    High-quality animal protein, essential amino acids, and
                    balanced nutrition, formulated to support digestion,
                    vitality, and everyday wellbeing.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center md:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto md:mx-0">
                  <Image
                    src="/mission-icon3.svg"
                    alt="Vision Icon"
                    width={112}
                    height={112}
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2d5a3d] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    Vision
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#2d5a3d]/80 leading-relaxed">
                    AnimaLife is the foundation of a comprehensive pet nutrition
                    brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Expansion Section - Enhanced hover effects and mobile optimization */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[#F5F1E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            {/* Single line heading with smaller text */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#2d5a3d] leading-tight tracking-tight max-w-4xl mx-auto">
              Our future product expansion includes:
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {productCards.map((card) => (
              <Card
                key={card.id}
                className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group rounded-xl sm:rounded-2xl"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 h-full">
                  {/* Much smaller cards on mobile */}
                  <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] relative">
                    <div className="absolute inset-0">
                      <Image
                        src="/about-card-bg.webp"
                        alt="Card background"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Minimal text content */}
                      <div className="p-2 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-white/90 leading-tight line-clamp-2">
                          {card.subtitle}
                        </p>

                        {card.comingSoon && hoveredCard === card.id && (
                          <div className="mt-1 sm:mt-2">
                            <Badge className="bg-[#d4704a] hover:bg-[#b85a3a] text-white px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-semibold animate-in fade-in-0 slide-in-from-top-2 duration-300">
                              Coming Soon!
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Much bigger plate images taking most of the card space */}
                      <div className="relative flex-1 flex items-end justify-center pb-1 sm:pb-2 overflow-hidden">
                        <div
                          className={`
              relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60
              transition-all duration-700 ease-out
              ${
                hoveredCard === card.id
                  ? "transform scale-110 -translate-y-2 rotate-12"
                  : "transform scale-100 translate-y-0 rotate-0"
              }
            `}
                        >
                          <Image
                            src={getPlateImage(card.id) || "/placeholder.svg"}
                            alt={`${card.title} plate`}
                            fill
                            className="object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                            sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 240px"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`
          absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent
          transition-opacity duration-500
          ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}
        `}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
