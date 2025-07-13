"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

import { ProductModal } from "./product-modal";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const productCategories = [
  "All Products",
  "Small Breed Adult",
  "Medium & Large Breed Adult",
  "Giant Breed Adult",
];

const products = [
  // Small Breed Products
  {
    id: 1,
    name: "Small Breed Adult",
    category: "Small Breed Adult",
    product: "Dog Food",
    size: "1kg",
    price: "",
    frontImage: "/dog-packages/small-f-1kg.webp",
    backImage: "/dog-packages/small-b-1kg.webp",
    hoverImage: "/small.webp",
    feeding: [
      { weight: "3-5 kg", daily: "84-116g", meals: "2" },
      { weight: "5-8 kg", daily: "116-163g", meals: "2" },
      { weight: "8-10 kg", daily: "163-195g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Perfect for toy breeds and small dogs",
      "Easy to chew without choking",
      "Well-broken down for better digestion and absorption",
      "Crunchy texture supports dental health via plaque & tartar control",
    ],
  },
  {
    id: 2,
    name: "Small Breed Adult",
    category: "Small Breed Adult",
    product: "Dog Food",
    size: "3kg",
    price: "",
    frontImage: "/dog-packages/small-f-3kg.webp",
    backImage: "/dog-packages/small-b-3kg.webp",
    hoverImage: "/small.webp",
    feeding: [
      { weight: "3-5 kg", daily: "84-116g", meals: "2" },
      { weight: "5-8 kg", daily: "116-163g", meals: "2" },
      { weight: "8-10 kg", daily: "163-195g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Perfect for toy breeds and small dogs",
      "Easy to chew without choking",
      "Well-broken down for better digestion and absorption",
      "Crunchy texture supports dental health via plaque & tartar control",
    ],
  },
  {
    id: 3,
    name: "Small Breed Adult",
    category: "Small Breed Adult",
    product: "Dog Food",
    size: "5kg",
    price: "",
    frontImage: "/dog-packages/small-f-5kg.webp",
    backImage: "/dog-packages/small-b-5kg.webp",
    hoverImage: "/small.webp",
    feeding: [
      { weight: "3-5 kg", daily: "84-116g", meals: "2" },
      { weight: "5-8 kg", daily: "116-163g", meals: "2" },
      { weight: "8-10 kg", daily: "163-195g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Perfect for toy breeds and small dogs",
      "Easy to chew without choking",
      "Well-broken down for better digestion and absorption",
      "Crunchy texture supports dental health via plaque & tartar control",
    ],
  },
  // Medium & Large Breed Products
  {
    id: 4,
    name: "Medium & Large Breed Adult",
    category: "Medium & Large Breed Adult",
    product: "Dog Food",
    size: "1kg",
    price: "",
    frontImage: "/dog-packages/medium-f-1kg.webp",
    backImage: "/dog-packages/medium-b-1kg.webp",
    hoverImage: "/medium&larg.webp",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Suitable for many breeds",
      "Promotes well-chewed bites with less mess and fewer crumbs",
      "Ideal for adult medium and large dogs",
      "Supports strong bones and healthy joints",
      "Aids digestion and overall wellbeing",
    ],
  },
  {
    id: 5,
    name: "Medium & Large Breed Adult",
    category: "Medium & Large Breed Adult",
    product: "Dog Food",
    size: "3kg",
    price: "",
    frontImage: "/dog-packages/medium-f-3kg.webp",
    backImage: "/dog-packages/medium-b-3kg.webp",
    hoverImage: "/medium&larg.webp",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Suitable for many breeds",
      "Promotes well-chewed bites with less mess and fewer crumbs",
      "Ideal for adult medium and large dogs",
      "Supports strong bones and healthy joints",
      "Aids digestion and overall wellbeing",
    ],
  },
  {
    id: 6,
    name: "Medium & Large Breed Adult",
    category: "Medium & Large Breed Adult",
    product: "Dog Food",
    size: "5kg",
    price: "",
    frontImage: "/dog-packages/medium-f-5kg.webp",
    backImage: "/dog-packages/medium-b-5kg.webp",
    hoverImage: "/medium&larg.webp",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Suitable for many breeds",
      "Promotes well-chewed bites with less mess and fewer crumbs",
      "Ideal for adult medium and large dogs",
      "Supports strong bones and healthy joints",
      "Aids digestion and overall wellbeing",
    ],
  },
  {
    id: 7,
    name: "Medium & Large Breed Adult",
    category: "Medium & Large Breed Adult",
    product: "Dog Food",
    size: "10kg",
    price: "",
    frontImage: "/dog-packages/medium-f-10kg.webp",
    backImage: "/dog-packages/medium-b-10kg.webp",
    hoverImage: "/medium&larg.webp",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Suitable for many breeds",
      "Promotes well-chewed bites with less mess and fewer crumbs",
      "Ideal for adult medium and large dogs",
      "Supports strong bones and healthy joints",
      "Aids digestion and overall wellbeing",
    ],
  },
  // Giant Breed Products
  {
    id: 8,
    name: "Giant Breed Adult",
    category: "Giant Breed Adult",
    product: "Dog Food",
    size: "10kg",
    price: "",
    frontImage: "/dog-packages/gaint-f-10kg.webp",
    backImage: "/dog-packages/gaint-b-10kg.webp",
    hoverImage: "/gaint.webp",
    feeding: [
      { weight: "30-35 kg", daily: "511-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
      { weight: "45-50 kg", daily: "748-828g", meals: "2" },
      { weight: "50-55 kg", daily: "828-968g", meals: "2" },
      { weight: "55-60 kg", daily: "968-1144g", meals: "2" },
    ],
    ingredients: [
      "Dried chicken proteins",
      "Rice",
      "Complex carbohydrate sources",
      "High quality fibers Maize",
      "Beet Pulp",
      "Brewers yeast",
      "Mannan Oligo-sacharides sources",
      "Animal fats",
      "Amino acids",
      "Antioxidants",
      "Natural flavors",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Pantothenic acid",
      "Niacin",
      "Folic acid",
      "Blotin",
      "Calclum",
      "Phosphorus",
      "Magnesium",
      "Iron",
      "Copper",
      "Manganese",
      "Zinc",
      "lodine & Selenium",
    ],
    keyBenefits: [
      "Supports dental health by reducing tartar",
      "Controls fast eating & helps reduce bloating",
      "Tailored for giant breeds with wider jaws & bigger teeth",
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
    <section id="products" className="py-8 md:py-20 bg-[#F5F1E8] md:h-[800px]">
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
            {/* {filteredProducts.length > 4 && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({
                  length: Math.max(0, filteredProducts.length - 3),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlideIndex(index);
                      setIsAutoPlaying(true);
                    }}
                    className={`
                      h-2 rounded-full transition-all duration-300
                      ${index === currentSlideIndex ? "bg-[#2d5a3d] w-8" : "bg-[#2d5a3d]/30 hover:bg-[#2d5a3d]/50 w-2"}
                    `}
                  />
                ))}
              </div>
            )} */}
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
  const isComingSoon =
    product.category === "Small Breed Adult" ||
    product.category === "Giant Breed Adult";

  return (
    <Card
      className={`flex-shrink-0 cursor-pointer bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
        isMobile ? "w-48 sm:w-56" : "w-full sm:w-80"
      } ${isComingSoon ? "opacity-75" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Banner */}
        <div
          className={`relative w-full overflow-hidden bg-gray-50 ${isMobile ? "h-40 sm:h-48" : "h-72"}`}
        >
          <Image
            src={
              isHovered
                ? product.hoverImage || product.backImage
                : product.frontImage
            }
            alt={`${product.name} - ${product.size}`}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Coming Soon Badge */}
          {(product.category === "Small Breed Adult" ||
            product.category === "Giant Breed Adult") && (
            <div
              className={`absolute top-2 right-2 ${isMobile ? "scale-75" : ""}`}
            >
              <Badge className="bg-orange-500 text-white font-semibold shadow-lg text-xs">
                Coming Soon
              </Badge>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className={`${isMobile ? "p-3" : "p-4"}`}>
          <h3
            className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${isMobile ? "text-sm" : "text-lg"}`}
          >
            {product.name}
          </h3>

          <div
            className={`space-y-1 mb-2 sm:mb-3 ${isMobile ? "text-xs" : "text-sm"}`}
          >
            <div className="flex flex-wrap items-center gap-1 text-gray-600">
              <span>Product:</span>
              <span className="font-medium text-gray-900">
                {product.product}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1 text-gray-600">
              <span>Size:</span>
              <span className="font-medium text-gray-900">{product.size}</span>
              <span>•</span>
              <span>Age:</span>
              <span className="font-medium text-gray-900">1-7 Years</span>
            </div>
          </div>

          <p
            className={`font-bold text-gray-900 ${isMobile ? "text-base" : "text-xl"}`}
          >
            {product.price}
          </p>

          {/* Hover indicator */}
          <div
            className={`text-xs text-gray-500 mt-1 ${isMobile ? "hidden" : ""}`}
          >
            Hover to see back • Click for details
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
