"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Bean,
  Carrot,
  Droplet,
  Drumstick,
  Leaf,
  Sprout,
  Zap,
} from "lucide-react";

const productCards = [
  {
    id: "dry-food",
    title: "Dry Food",
    subtitle: "Puppies, Adult Cats, Kittens",
    image: "/aboutcard1.webp",
    comingSoon: true,
  },
  {
    id: "canned-food",
    title: "Canned Food",
    subtitle: "High-moisture, premium wet food options.",
    image: "/aboutcard2.webp",
    comingSoon: true,
  },
  {
    id: "fresh-food",
    title: "Fresh Food",
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

      {/* Wellness in Every Bite Section - Bento Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-[#F9F4DF] to-[#F5F1E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#134635] mb-4 sm:mb-6 leading-tight">
              Wellness in Every Bite
            </h2>
            <div className="w-20 h-1 bg-[#d4704a] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#134635]/80 max-w-4xl mx-auto leading-relaxed">
              We pack every bowl with purposeful ingredients, starting with real
              chicken for lean muscles and lasting energy. Gentle carbs like
              rice fuel playtime without upsetting sensitive tummies, while
              chicken fat and nutrient-rich grains keep coats shiny and tails
              wagging. Add in digestion loving beetroot, eye healthy carrots,
              and immune boosting peas, and top it off with a vet approved blend
              of vitamins and minerals, it's a full-on wellness plan for your
              best friend, made with love.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Main Protein - Large Card */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-100">
              <Card className="h-full bg-gradient-to-br from-white/90 to-[#d4704a]/5 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4704a] to-[#b85a3a] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Drumstick color="#e6e6e6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#134635] mb-2 group-hover:text-[#d4704a] transition-colors duration-300">
                      Real Chicken Meat
                    </h3>
                    <p className="text-sm text-[#134635]/60 font-medium mb-2">
                      (Main Protein Source)
                    </p>
                    <p className="text-sm text-[#d4704a] font-semibold mb-4">
                      <span className="text-[#134635]/80">Key Nutrients:</span>{" "}
                      High-quality animal protein
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#134635] mb-3">
                      Health Benefits:
                    </h4>
                    <ul className="space-y-2 text-sm text-[#134635]/80">
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-75">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          1.
                        </span>
                        <span>
                          <strong>Complete Nutrient Balance:</strong> Supplies
                          essential amino acids for muscle development and
                          overall growth
                        </span>
                      </li>
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-100">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          2.
                        </span>
                        <span>
                          <strong>Enhanced Digestive Health:</strong> Easily
                          digestible protein promotes gut health
                        </span>
                      </li>
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-150">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          3.
                        </span>
                        <span>
                          <strong>Energy for an Active Life:</strong> Supports
                          metabolic and physical activity needs
                        </span>
                      </li>
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-200">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          4.
                        </span>
                        <span>
                          <strong>Veterinary-Informed Nutrition:</strong> Aligns
                          with veterinary recommendations for adult dogs
                          maintenance
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rice */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              <Card className="h-full bg-gradient-to-br from-white/90 to-[#f4a261]/10 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-4 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f4a261] to-[#e09145] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Sprout color="#e6e6e6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#134635] mb-2 group-hover:text-[#f4a261] transition-colors duration-300">
                    Rice
                  </h3>
                  <p className="text-xs text-[#f4a261] font-semibold mb-3">
                    <span className="text-[#134635]/80">Key Nutrients:</span>{" "}
                    Easily digestible carbohydrate
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    Health Benefits:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#f4a261] font-bold">1.</span>
                      <span>
                        <strong>Enhanced Digestive Health:</strong> Gentle on
                        the stomach, promotes easy digestion
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#f4a261] font-bold">2.</span>
                      <span>
                        <strong>Energy for an Active Life:</strong> Fast-release
                        energy source for active dogs
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Nutrient-Rich Grains */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-300">
              <Card className="h-full bg-gradient-to-br from-white/90 to-[#e76f51]/10 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-4 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e76f51] to-[#c85a42] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Leaf color="#e6e6e6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#134635] mb-2 group-hover:text-[#e76f51] transition-colors duration-300">
                    Nutrient-Rich Grains
                  </h3>
                  <p className="text-xs text-[#e76f51] font-semibold mb-3">
                    <span className="text-[#134635]/80">Key Nutrients:</span>{" "}
                    Plant protein, omega fatty acids
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    Health Benefits:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#e76f51] font-bold">1.</span>
                      <span>
                        <strong>Radiant Skin and Coat:</strong> Omega 6 supports
                        skin elasticity and coat shine
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#e76f51] font-bold">2.</span>
                      <span>
                        <strong>Complete Nutrient Balance:</strong> Adds plant
                        protein to diversify amino acid profile
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                      <span className="text-[#e76f51] font-bold">3.</span>
                      <span>
                        <strong>Boosting Natural Defenses:</strong> Contains
                        antioxidants and micronutrients for immune support
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Chicken Fat */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
              <Card className="h-full bg-gradient-to-br from-white/90 to-[#2a9d8f]/10 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-4 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2a9d8f] to-[#238a7a] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Droplet color="#e6e6e6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#134635] mb-2 group-hover:text-[#2a9d8f] transition-colors duration-300">
                    Chicken Fat
                  </h3>
                  <p className="text-xs text-[#2a9d8f] font-semibold mb-3">
                    <span className="text-[#134635]/80">Key Nutrients:</span>{" "}
                    Energy-dense fats, essential fatty acids
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    Health Benefits:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#2a9d8f] font-bold">1.</span>
                      <span>
                        <strong>Radiant Skin and Coat:</strong> Promotes
                        healthy, glossy fur
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#2a9d8f] font-bold">2.</span>
                      <span>
                        <strong>Energy for an Active Life:</strong> Concentrated
                        energy source
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                      <span className="text-[#2a9d8f] font-bold">3.</span>
                      <span>
                        <strong>Taste That is Tempting:</strong> Enhances
                        palatability and encourages consumption
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Beetroot */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-500">
              <Card className="h-full bg-gradient-to-br from-white/90 to-[#8e44ad]/10 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-4 sm:p-6 h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8e44ad] to-[#7a3a96] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Carrot color="#e6e6e6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#134635] mb-2 group-hover:text-[#8e44ad] transition-colors duration-300">
                    Beetroot
                  </h3>
                  <p className="text-xs text-[#8e44ad] font-semibold mb-3">
                    <span className="text-[#134635]/80">Key Nutrients:</span>{" "}
                    Soluble and insoluble fiber
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    Health Benefits:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#8e44ad] font-bold">1.</span>
                      <span>
                        <strong>Enhanced Digestive Health:</strong> Promotes gut
                        flora balance and stool quality, helping digest better
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#8e44ad] font-bold">2.</span>
                      <span>
                        <strong>Healthy Weight Control:</strong> Aids in
                        fullness satisfaction without adding excess calories
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Carrots & Green Peas - Combined Card */}
            <div className="md:col-span-2 lg:col-span-1 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-600">
              <Card className="h-full bg-gradient-to-br from-white/90 via-[#ff9500]/5 to-[#27ae60]/5 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-4 sm:p-6 h-full">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Carrots */}
                    <div>
                      <div className="w-10 h-10 bg-gradient-to-br from-[#ff9500] to-[#e6850e] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Carrot color="#e6e6e6" />
                      </div>
                      <h3 className="text-base font-bold text-[#134635] mb-2 group-hover:text-[#ff9500] transition-colors duration-300">
                        Carrots
                      </h3>
                      <p className="text-xs text-[#ff9500] font-semibold mb-2">
                        <span className="text-[#134635]/80">
                          Key Nutrients:
                        </span>{" "}
                        Fiber and Vitamin A, K
                      </p>
                      <h4 className="text-xs font-semibold text-[#134635] mb-2">
                        Health Benefits:
                      </h4>
                      <ul className="space-y-1 text-xs text-[#134635]/80">
                        <li className="flex items-start gap-1  transition-transform duration-300">
                          <span className="text-[#ff9500] font-bold">1.</span>
                          <span>Better Immune Support</span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                          <span className="text-[#ff9500] font-bold">2.</span>
                          <span>Healthy Skin and Coat</span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                          <span className="text-[#ff9500] font-bold">3.</span>
                          <span>Improved Eye-sight</span>
                        </li>
                      </ul>
                    </div>
                    {/* Green Peas */}
                    <div>
                      <div className="w-10 h-10 bg-gradient-to-br from-[#27ae60] to-[#229954] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Bean color="#e6e6e6" />
                      </div>
                      <h3 className="text-base font-bold text-[#134635] mb-2 group-hover:text-[#27ae60] transition-colors duration-300">
                        Green Peas
                      </h3>
                      <p className="text-xs text-[#27ae60] font-semibold mb-2">
                        <span className="text-[#134635]/80">
                          Key Nutrients:
                        </span>{" "}
                        Protein, Fiber and Vitamin A, K, C
                      </p>
                      <h4 className="text-xs font-semibold text-[#134635] mb-2">
                        Health Benefits:
                      </h4>
                      <ul className="space-y-1 text-xs text-[#134635]/80">
                        <li className="flex items-start gap-1  transition-transform duration-300">
                          <span className="text-[#27ae60] font-bold">1.</span>
                          <span>Supports and maintains Healthy Digestion</span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                          <span className="text-[#27ae60] font-bold">2.</span>
                          <span>Healthy Skin and Heart Function</span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                          <span className="text-[#27ae60] font-bold">3.</span>
                          <span>
                            Rich in vitamins that contribute to a healthier
                            immune system
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vitamins & Minerals - Large Card */}
            <div className="md:col-span-2 lg:col-span-2 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-700">
              <Card className="h-full bg-gradient-to-br from-[#134635] via-[#1e5a42] to-[#2d5a3d] border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group">
                <CardContent className="p-6 sm:p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap color="#e6e6e6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                        Additional Vitamins and Minerals
                      </h3>
                      <p className="text-white/80 text-sm mb-4">
                        <strong>Vitamins:</strong> A, D3, E, B Vitamins (B1, B2,
                        B6, B12)
                        <br />
                        <strong>Minerals:</strong> Zinc, Copper, Calcium,
                        Phosphorus
                      </p>
                    </div>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-4">
                    Health Benefits:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="space-y-2  transition-transform duration-300">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">1.</span>
                        <span>Radiant Skin and Coat:</span>
                      </h4>
                      <p className="text-white/80 text-xs ml-5">Vitamin E</p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-75">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">2.</span>
                        <span>Boosting Natural Defenses:</span>
                      </h4>
                      <p className="text-white/80 text-xs ml-5">
                        Vitamin A, and antioxidant vitamins
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-100">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">3.</span>
                        <span>Targeted Wellness Support:</span>
                      </h4>
                      <p className="text-white/80 text-xs ml-5">
                        B Vitamins for nervous system health
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-150">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">4.</span>
                        <span>Complete Nutrient Balance:</span>
                      </h4>
                      <p className="text-white/80 text-xs ml-5">
                        Provides essential micronutrients essential for muscular
                        and nerve function
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-200">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">5.</span>
                        <span>Veterinary-Informed Nutrition:</span>
                      </h4>
                      <p className="text-white/80 text-xs ml-5">
                        Scientifically formulated micro-premix
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-250">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">6.</span>
                        <span>Bone Health Support:</span>
                      </h4>
                      <p className="text-white/80 text-xs ml-5">
                        Essential for skeletal strength and growth
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group rounded-xl sm:rounded-2xl"
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
