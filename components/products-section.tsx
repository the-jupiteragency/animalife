"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

import { ProductModal } from "./product-modal";
import Image from "next/image";
import Link from "next/link";

const productCategories = [
  "All Products",
  "Small Breed Puppy",
  "Small breed adult",
  "Large Breed Puppy",
  "Medium & Large breed adult",
];

const products = [
  {
    id: 1,
    name: "Small Breed Puppy",
    category: "Small Breed Puppy",
    product: "Dog Food",
    size: "1kg",
    price: "200 EGP",
    image: "/package-1kg-small.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1kg", price: "200 EGP", image: "/package-1kg-small.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-small.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-small.webp" },
    ],
  },
  {
    id: 2,
    name: "Small Breed Adult",
    category: "Small breed adult",
    product: "Dog Food",
    size: "3kg",
    price: "380 EGP",
    image: "/package-3kg-small.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1kg", price: "200 EGP", image: "/package-1kg-small.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-small.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-small.webp" },
    ],
  },
  {
    id: 3,
    name: "Small Breed Adult",
    category: "Small breed adult",
    product: "Dog Food",
    size: "5kg",
    price: "850 EGP",
    image: "/package-5kg-small.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1kg", price: "200 EGP", image: "/package-1kg-small.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-small.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-small.webp" },
    ],
  },
  {
    id: 4,
    name: "Medium & Large Breed Adult",
    category: "Large Breed Puppy",
    product: "Dog Food",
    size: "1kg",
    price: "500 EGP",
    image: "/package-1kg-medium.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1kg", price: "200 EGP", image: "/package-1kg-medium.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-medium.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-medium.webp" },
      { size: "10kg", price: "1000 EGP", image: "/package-10kg-medium.webp" },
    ],
  },
  {
    id: 5,
    name: "Medium & Large Breed Adult",
    category: "Large Breed Puppy",
    product: "Dog Food",
    size: "3kg",
    price: "380 EGP",
    image: "/package-3kg-medium.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1.5kg", price: "200 EGP", image: "/package-1kg-medium.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-medium.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-medium.webp" },
      { size: "10kg", price: "1000 EGP", image: "/package-10kg-medium.webp" },
    ],
  },
  {
    id: 6,
    name: "Medium & Large Breed Adult",
    category: "Medium & Large breed adult",
    product: "Dog Food",
    size: "5kg",
    price: "850 EGP",
    image: "/package-5kg-medium.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1.5kg", price: "200 EGP", image: "/package-1kg-medium.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-medium.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-medium.webp" },
      { size: "10kg", price: "1000 EGP", image: "/package-10kg-medium.webp" },
    ],
  },
  {
    id: 7,
    name: "Medium & Large Breed Adult",
    category: "Medium & Large breed adult",
    product: "Dog Food",
    size: "10kg",
    price: "1000 EGP",
    image: "/package-10kg-medium.webp",
    hoverImage: "/cardhover.png",
    sizes: [
      { size: "1.5kg", price: "200 EGP", image: "/package-1kg-medium.webp" },
      { size: "3kg", price: "380 EGP", image: "/package-3kg-medium.webp" },
      { size: "5kg", price: "850 EGP", image: "/package-5kg-medium.webp" },
      { size: "10kg", price: "1000 EGP", image: "/package-10kg-medium.webp" },
    ],
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const filterScrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredProducts.length <= 4) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        const maxSlides = Math.max(0, filteredProducts.length - 4);
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredProducts.length, isAutoPlaying]);

  // Reset slide index when category changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeCategory]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openProductModal = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-8 md:py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header - Mobile responsive with smaller font and justified layout */}
        <div className="flex flex-row items-center justify-between mb-6 md:mb-12 gap-2">
          <h2 className="text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold text-[#0A3024] leading-tight flex-1">
            Our Products{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              - Find Your Pet's Perfect Match
            </span>
          </h2>
          <Button
            asChild
            variant="ghost"
            className="text-[#2d5a3d] hover:text-[#1e3a2a] font-medium p-1 sm:p-2 text-xs sm:text-sm"
          >
            <Link href="/products" className="flex items-center">
              <span className="whitespace-nowrap">View more</span>
              <IoIosArrowForward className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>

        {/* Category Filter - Mobile horizontal scroll */}
        <div className="mb-6 md:mb-12">
          <div
            ref={filterScrollRef}
            className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-2 md:pb-0 md:flex-wrap"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {productCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category
                    ? "bg-[#2d5a3d] text-white hover:bg-[#1e3a2a]"
                    : "border-[#2d5a3d] text-[#2d5a3d] hover:bg-[#2d5a3d]/5"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setIsAutoPlaying(true);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Mobile: Horizontal Slider */}
          <div className="block md:hidden">
            <div
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => openProductModal(product)}
                  isMobile={true}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Auto-sliding + Manual scroll */}
          <div className="hidden md:block w-screen max-w-none relative left-1/2 right-1/2 -mx-[50vw] px-0">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => openProductModal(product)}
                  isMobile={false}
                />
              ))}
            </div>

            {/* Auto-slide indicators */}
            {filteredProducts.length > 4 && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({
                  length: Math.max(0, filteredProducts.length - 3),
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
  );
}

// Product Card Component - Responsive design
function ProductCard({
  product,
  onClick,
  isMobile = false,
}: {
  product: (typeof products)[0];
  onClick: () => void;
  isMobile?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`flex-shrink-0 cursor-pointer bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
        isMobile ? "w-48 sm:w-56" : "w-full sm:w-80"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Banner */}
        <div
          className={`relative w-full overflow-hidden bg-gray-50 ${isMobile ? "h-40 sm:h-48" : "h-64"}`}
        >
          <Image
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        {/* Content Section */}
        <div className={`${isMobile ? "p-3" : "p-4"}`}>
          <h3
            className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${isMobile ? "text-sm" : "text-lg"}`}
          >
            {product.name}
          </h3>

          <div
            className={`flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 text-gray-600 ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          >
            <span>Product:</span>
            <span className="font-medium text-gray-900">{product.product}</span>
            <span>•</span>
            <span>Size:</span>
            <span className="font-medium text-gray-900">{product.size}</span>
          </div>

          <p
            className={`font-bold text-gray-900 ${isMobile ? "text-base" : "text-xl"}`}
          >
            {product.price}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
