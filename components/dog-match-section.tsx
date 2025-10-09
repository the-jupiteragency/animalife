"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProductModal } from "./product-modal";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Heart,
  Utensils,
  Shield,
  Sparkles,
  Zap,
  TrendingUp,
  Bone,
  PawPrint,
  ShieldCheck,
  HandHeart,
  Pill,
  HeartPulse,
} from "lucide-react";

const getDogCategories = (locale: Locale) => [
  {
    id: "small-adult",
    title: t(locale, 'products.categories.small'),
    dogImage: "/dog-2.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#C4956B]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    features: t(locale, 'dogMatch.features.small'),
  },
  {
    id: "medium-adult",
    title: t(locale, 'products.categories.medium'),
    dogImage: "/dog-3.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#D4A574]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    features: t(locale, 'dogMatch.features.medium'),
  },
  {
    id: "giant-adult",
    title: t(locale, 'products.categories.giant'),
    dogImage: "/dog-4.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#B8956A]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    features: t(locale, 'dogMatch.features.giant'),
  },
];

import { Locale } from '@/lib/i18n/config';
import { t } from '@/lib/i18n/translations';

export function DogMatchSection({ locale }: { locale: Locale }) {
  const dogCategories = getDogCategories(locale);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openProductModal = (product: any) => {
    setSelectedProduct({
      ...product,
      id: Math.random(),
      category: "Dog Food",
      product: "Dog Food",
      hoverImage: product.image,
    });
    setIsModalOpen(true);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || dogCategories.length <= 4) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        const maxSlides = Math.max(0, dogCategories.length - 4);
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <TooltipProvider>
      <section className="py-8 md:py-20 bg-[#F5F1E8] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#2d5a3d] leading-tight">
              {t(locale, 'dogMatch.title')}
            </h2>
            <p className="text-sm sm:text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              {t(locale, 'dogMatch.subtitle')}
            </p>
          </div>

          {/* Products Section */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Mobile: Horizontal Slider */}
            <div className="block lg:hidden">
              <div
                className="flex gap-3 justify-start overflow-x-auto scrollbar-hide pb-4 px-3"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {dogCategories.map((category) => (
                  <DogCategoryCard
                    key={category.id}
                    category={category}
                    hoveredCard={hoveredCard}
                    setHoveredCard={setHoveredCard}
                    openProductModal={openProductModal}
                    isMobile={true}
                    locale={locale}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Auto-sliding + Manual scroll */}
            <div className="hidden lg:block">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 justify-center overflow-x-auto scrollbar-hide pb-4 px-12"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {dogCategories.map((category) => (
                  <DogCategoryCard
                    key={category.id}
                    category={category}
                    hoveredCard={hoveredCard}
                    setHoveredCard={setHoveredCard}
                    openProductModal={openProductModal}
                    isMobile={false}
                    locale={locale}
                  />
                ))}
              </div>

              {/* Auto-slide indicators */}
              {dogCategories.length > 4 && (
                <div className="flex justify-center mt-6 gap-2">
                  {Array.from({
                    length: Math.max(0, dogCategories.length - 3),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlideIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${index === currentSlideIndex ? "bg-[#2d5a3d] w-8" : "bg-[#2d5a3d]/30 hover:bg-[#2d5a3d]/50 w-2"}
                      `}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </TooltipProvider>
  );
}

// Dog Category Card Component - Using ProductCard sizing pattern
function DogCategoryCard({
  category,
  hoveredCard,
  setHoveredCard,
  openProductModal,
  isMobile = false,
  locale,
}: {
  category: any;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
  openProductModal: (product: any) => void;
  isMobile?: boolean;
  locale: Locale;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card
          className={`flex-shrink-0 m-2 transform transition-all duration-500 hover:scale-105 border-0 rounded-xl md:rounded-2xl overflow-hidden group ${
            isMobile ? "w-44 sm:w-56" : "w-full sm:w-80"
          }`}
          onMouseEnter={() => setHoveredCard(category.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent className="p-0">
            <div
              className={`relative overflow-hidden ${isMobile ? "aspect-[4/5]" : "aspect-[3/4]"}`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={
                    hoveredCard === category.id
                      ? "/card2-bg.webp"
                      : category.cardBg || "/placeholder.svg"
                  }
                  alt=""
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>

              {/* Dog Image */}
              <div
                className={`absolute ${isMobile ? "bottom-[-1rem] right-0" : "bottom-[-3rem] right-0"} flex items-end justify-end p-0 z-10 w-full h-full pointer-events-none`}
              >
                <div className="relative w-full h-full aspect-square">
                  <Image
                    src={category.dogImage || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-contain object-bottom-right transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                    sizes={
                      isMobile
                        ? "(max-width: 640px) 250px, 300px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                    }
                  />
                </div>
              </div>

              {/* Title */}
              <div
                className={`absolute ${isMobile ? "top-3 left-3 right-3" : "top-6 left-6 right-6"} transition-all duration-300 z-10`}
              >
                <h3
                  className={`font-bold text-[#2d5a3d] leading-tight transition-all duration-300 group-hover:scale-105 ${locale === 'ar' ? 'text-right' : 'text-left'} ${
                    isMobile ? "text-sm" : "text-xl lg:text-2xl"
                  }`}
                >
                  {category.title}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={`${isMobile ? "h-[85vh] rounded-t-3xl" : "w-full sm:max-w-lg"} overflow-y-auto`}
      >
        <SheetHeader className="pb-6">
          <SheetTitle
            className={`font-bold text-[#2d5a3d] flex items-center gap-3 ${locale === 'ar' ? 'text-right' : 'text-left'} ${
              isMobile ? "text-lg" : "text-2xl md:text-3xl"
            }`}
          >
            <div
              className={`relative rounded-full overflow-hidden ${isMobile ? "w-8 h-8" : "w-12 h-12"}`}
            >
              <Image
                src={category.dogImage || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            {category.title}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Enhanced Product Description Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-[#F5F1E8]/30 overflow-hidden">
            <div className="bg-gradient-to-r from-[#2d5a3d] to-[#1e3a2a] p-4 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <h4
                className={`font-bold text-white relative z-10 flex items-center gap-3 ${locale === 'ar' ? 'text-right' : 'text-left'} ${isMobile ? "text-base" : "text-md"}`}
              >
                {t(locale, 'dogMatch.modalTitle')} {category.title}
              </h4>
            </div>

            <CardContent
              className={`${isMobile ? "p-4" : "p-6"} bg-white/80 backdrop-blur-sm`}
            >
              {category.description ? (
                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2d5a3d]/10 rounded-full mb-4">
                    <Bone className="w-8 h-8 text-[#2d5a3d]" />
                  </div>
                  <p
                    className={`text-gray-700 font-medium leading-relaxed ${isMobile ? "text-sm" : "text-base"}`}
                  >
                    {category.description}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {category.features?.map((feature: string, index: number) => {
                    const getFeatureIcon = (index: number, feature: string) => {
                      const iconClass = `${isMobile ? "w-5 h-5" : "w-6 h-6"} text-[#2d5a3d]`;

                      // Icon mapping based on common feature keywords
                      if (
                        feature.toLowerCase().includes("nutrition") ||
                        feature.toLowerCase().includes("balanced")
                      ) {
                        return <HandHeart className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("health") ||
                        feature.toLowerCase().includes("dental")
                      ) {
                        return <HeartPulse className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("digest") ||
                        feature.toLowerCase().includes("stomach")
                      ) {
                        return <PawPrint className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("vitamins") ||
                        feature.toLowerCase().includes("minerals")
                      ) {
                        return <Pill className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("bone") ||
                        feature.toLowerCase().includes("joint")
                      ) {
                        return <Shield className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("coat") ||
                        feature.toLowerCase().includes("skin")
                      ) {
                        return <Sparkles className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("immune") ||
                        feature.toLowerCase().includes("protect")
                      ) {
                        return <ShieldCheck className={iconClass} />;
                      }
                      if (
                        feature.toLowerCase().includes("growth") ||
                        feature.toLowerCase().includes("develop")
                      ) {
                        return <TrendingUp className={iconClass} />;
                      }

                      // Default icons based on index
                      const defaultIcons = [
                        Heart,
                        Utensils,
                        Shield,
                        Sparkles,
                        Zap,
                        TrendingUp,
                      ];
                      const IconComponent =
                        defaultIcons[index % defaultIcons.length];
                      return <IconComponent className={iconClass} />;
                    };

                    return (
                      <div
                        key={index}
                        className="group hover:bg-[#2d5a3d]/5 rounded-xl p-3 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 p-2 bg-[#2d5a3d]/10 rounded-lg group-hover:bg-[#2d5a3d]/20 transition-colors duration-300">
                            {getFeatureIcon(index, feature)}
                          </div>
                          <div className="flex-1">
                            <p
                              className={`text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 ${isMobile ? "text-sm" : "text-base"}`}
                            >
                              {feature}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
