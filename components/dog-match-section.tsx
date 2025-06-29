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

const dogCategories = [
  {
    id: "puppy",
    title: "Puppy",
    dogImage: "/dog-1.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#D4C4A8]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    products: [
      {
        name: "Small Breed Puppy",
        price: "220 EGP",
        size: "1.5kg",
        image: "/package-1kg-small.webp",
        description:
          "Specially formulated for small breed puppies up to 12 months",
        features: [
          "High protein for growth",
          "Small kibble size",
          "DHA for brain development",
        ],
        sizes: [
          { size: "1.5kg", price: "220 EGP", image: "/package-1kg-small.webp" },
          { size: "3kg", price: "420 EGP", image: "/package-1kg-small.webp" },
          { size: "7kg", price: "900 EGP", image: "/package-1kg-small.webp" },
        ],
      },
    ],
  },
  {
    id: "small-adult",
    title: "Small Breed Adult",
    dogImage: "/dog-2.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#C4956B]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    products: [
      {
        name: "Small Breed Adult",
        price: "200 EGP",
        size: "1.5kg",
        image: "/package-1kg-small.webp",
        description: "Complete nutrition for adult small breed dogs",
        features: [
          "Optimal protein levels",
          "Joint support",
          "Dental care formula",
        ],
        sizes: [
          { size: "1.5kg", price: "200 EGP", image: "/package-1kg-small.webp" },
          { size: "3kg", price: "380 EGP", image: "/package-1kg-small.webp" },
          { size: "7kg", price: "850 EGP", image: "/package-1kg-small.webp" },
        ],
      },
    ],
  },
  {
    id: "medium-adult",
    title: "Medium & Large Breed Adult",
    dogImage: "/dog-3.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#D4A574]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    products: [
      {
        name: "Large Breed Puppy",
        price: "220 EGP",
        size: "1.5kg",
        image: "/package-1kg-medium.webp",
        description:
          "Controlled calcium for proper bone development in large breed puppies",
        features: [
          "Controlled calcium/phosphorus",
          "Large kibble size",
          "Joint development support",
        ],
        sizes: [
          {
            size: "1.5kg",
            price: "220 EGP",
            image: "/package-1kg-medium.webp",
          },
          { size: "3kg", price: "420 EGP", image: "/package-3kg-medium.webp" },
          { size: "7kg", price: "900 EGP", image: "/package-3kg-medium.webp" },
        ],
      },
    ],
  },
  {
    id: "giant-adult",
    title: "Giant Breed Adult",
    dogImage: "/dog-4.webp",
    cardBg: "/card1-bg.webp",
    hoverColor: "from-[#E8DCC0] to-[#B8956A]",
    defaultColor: "from-[#F5F1E8] to-[#E8DCC0]",
    products: [
      {
        name: "Medium & Large Adult",
        price: "200 EGP",
        size: "1.5kg",
        image: "/package-1kg-medium.webp",
        description:
          "Balanced nutrition for active medium and large breed adult dogs",
        features: [
          "High energy formula",
          "Joint support",
          "Muscle maintenance",
        ],
        sizes: [
          {
            size: "1.5kg",
            price: "200 EGP",
            image: "/package-1kg-medium.webp",
          },
          { size: "3kg", price: "380 EGP", image: "/package-3kg-medium.webp" },
          { size: "7kg", price: "850 EGP", image: "/package-3kg-medium.webp" },
        ],
      },
    ],
  },
];

export function DogMatchSection() {
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
              Find Your Dog's Perfect Match
            </h2>
            <p className="text-sm sm:text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right nutrition based on your dog's breed size and life
              stage
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
                className="flex gap-3 overflow-x-auto scrollbar-hide pb-4"
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
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Auto-sliding + Manual scroll */}
            <div className="hidden lg:block w-screen max-w-none relative left-1/2 right-1/2 -mx-[50vw] px-0">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
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
}: {
  category: any;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
  openProductModal: (product: any) => void;
  isMobile?: boolean;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card
          className={`flex-shrink-0 m-2 cursor-pointer transform transition-all duration-500 hover:scale-105 border-0 rounded-xl md:rounded-2xl overflow-hidden group ${
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
                className={`absolute ${isMobile ? "top-3 left-3 right-3" : "top-6 left-6 right-6"} text-left transition-all duration-300 z-10`}
              >
                <h3
                  className={`font-bold text-[#2d5a3d] leading-tight transition-all duration-300 group-hover:scale-105 ${
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
            className={`font-bold text-[#2d5a3d] flex items-center gap-3 ${
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

        <div className="space-y-4">
          {category.products.map((product: any, productIndex: number) => (
            <Card
              key={productIndex}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group border-2 hover:border-[#2d5a3d]/20"
            >
              <CardContent className={isMobile ? "p-3" : "p-4 md:p-6"}>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div
                    className={`relative flex-shrink-0 ${isMobile ? "w-10 h-12" : "w-16 h-20 md:w-20 md:h-24"}`}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain rounded group-hover:scale-110 transition-transform duration-300"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-bold text-[#2d5a3d] group-hover:text-[#1e3a2a] transition-colors duration-300 mb-2 ${
                        isMobile ? "text-sm" : "text-sm md:text-base"
                      }`}
                    >
                      {product.name}
                    </h4>
                    <p
                      className={`text-gray-600 mb-2 line-clamp-2 ${isMobile ? "text-xs" : "text-xs md:text-sm"}`}
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p
                        className={`font-bold text-[#2d5a3d] group-hover:text-[#1e3a2a] transition-colors duration-300 ${
                          isMobile ? "text-sm" : "text-sm md:text-base"
                        }`}
                      >
                        {product.price}
                      </p>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(product);
                        }}
                        className={`bg-[#2d5a3d] hover:bg-[#1e3a2a] text-white ${
                          isMobile
                            ? "text-xs px-3 py-1.5 h-auto"
                            : "text-xs md:text-sm"
                        }`}
                      >
                        {isMobile ? "View" : "View Details"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
