"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Truck, Shield, RotateCcw, Check } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  product: string;
  size: string;
  price: string;
  image: string;
  hoverImage: string;
  sizes: Array<{
    size: string;
    price: string;
    image: string;
  }>;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const productDetails = {
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
    "Biotin",
    "Calcium",
    "Phosphorus",
    "Magnesium",
    "Iron",
    "Copper",
    "Manganese",
    "Zinc",
    "Iodine & Selenium",
  ],
  nutritionalAnalysis: {
    "Crude Protein": "28%",
    "Crude Fat": "15%",
    "Crude Fiber": "2.9%",
    Moisture: "9%",
    Ash: "8.5%",
    Calcium: "1.1%",
    Phosphorus: "0.9%",
    "Omega-6": "3.3%",
    "Omega-3": "0.9%",
  },
  feedingGuide: [
    { weight: "1-3 kg", daily: "25-60g", meals: "2-3" },
    { weight: "3-5 kg", daily: "60-90g", meals: "2" },
    { weight: "5-10 kg", daily: "90-150g", meals: "2" },
    { weight: "10-20 kg", daily: "150-250g", meals: "2" },
    { weight: "20-30 kg", daily: "250-350g", meals: "2" },
    { weight: "30+ kg", daily: "350g+", meals: "2" },
  ],
  features: [
    "Complete & Balanced Nutrition",
    "High Quality Protein",
    "Natural Ingredients",
    "No Artificial Colors",
    "Supports Healthy Digestion",
    "Promotes Shiny Coat",
    "Strengthens Immune System",
    "Optimal Kibble Size",
  ],
};

const storeAvailability = {
  "1kg": [
    { name: "Seoudi", logo: "/seoudi.webp", url: "https://seoudi.com" },
    { name: "Oscar", logo: "/oscar.webp", url: "https://oscar.com" },
    {
      name: "Spinneys",
      logo: "/spinneys.webp",
      url: "https://spinneys.com",
    },
  ],
  "3kg": [
    { name: "Seoudi", logo: "/seoudi.webp", url: "https://seoudi.com" },
    {
      name: "Carrefour",
      logo: "/carrefour.webp",
      url: "https://carrefour.com",
    },
    {
      name: "Gourmet",
      logo: "/gourmet.webp",
      url: "https://gourmet.com",
    },
  ],
  "5kg": [
    { name: "Oscar", logo: "/oscar.webp", url: "https://oscar.com" },
    {
      name: "Carrefour",
      logo: "/carrefour.webp",
      url: "https://carrefour.com",
    },
    {
      name: "Spinneys",
      logo: "/spinneys.webp",
      url: "https://spinneys.com",
    },
    {
      name: "Gourmet",
      logo: "/gourmet.webp",
      url: "https://gourmet.com",
    },
  ],
  "10kg": [
    { name: "Seoudi", logo: "/seoudi.webp", url: "https://seoudi.com" },
    {
      name: "Carrefour",
      logo: "/carrefour.webp",
      url: "https://carrefour.com",
    },
    {
      name: "Gourmet",
      logo: "/gourmet.webp",
      url: "https://gourmet.com",
    },
  ],
  "1.5kg": [
    { name: "Oscar", logo: "/oscar.webp", url: "https://oscar.com" },
    {
      name: "Spinneys",
      logo: "/spinneys.webp",
      url: "https://spinneys.com",
    },
  ],
};

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  // Reset to first size when product changes
  useEffect(() => {
    if (product?.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
      setCurrentImage(product.sizes[0].image);
    } else if (product) {
      setSelectedSize("");
      setCurrentImage(product.image);
    }
  }, [product]);

  // Update image when size changes
  useEffect(() => {
    if (product?.sizes && selectedSize) {
      const sizeData = product.sizes.find((s) => s.size === selectedSize);
      if (sizeData) {
        setCurrentImage(sizeData.image);
      }
    }
  }, [selectedSize, product]);

  // Scroll to top on mobile when modal opens
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      setTimeout(() => {
        const modalContent = document.querySelector('[role="dialog"]');
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 100);
    }
  }, [isOpen]);

  if (!product) return null;

  const currentPrice =
    product.sizes?.find((s) => s.size === selectedSize)?.price || product.price;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0 m-2 sm:m-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full max-h-[95vh]">
          {/* Product Images - Mobile First */}
          <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 flex-shrink-0">
            <div className="aspect-square bg-white rounded-lg overflow-hidden mb-3 sm:mb-4 flex items-center justify-center p-2 sm:p-4">
              <div className="relative w-full h-full max-w-60 sm:max-w-80 max-h-60 sm:max-h-80">
                <Image
                  src={currentImage || product.image}
                  alt={`${product.name} - ${selectedSize}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 50vw"
                />
              </div>
            </div>

            {/* Size-based thumbnail images - Only show if product has sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.sizes.map((sizeOption, index) => (
                  <div
                    key={sizeOption.size}
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded border-2 cursor-pointer overflow-hidden transition-all ${
                      selectedSize === sizeOption.size
                        ? "border-[#2d5a3d]"
                        : "border-transparent hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(sizeOption.size)}
                  >
                    <div className="relative w-full h-full p-1">
                      <Image
                        src={sizeOption.image || "/placeholder.svg"}
                        alt={`${product.name} ${sizeOption.size}`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-3 sm:p-4 lg:p-6">
              <DialogHeader className="mb-3 sm:mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2d5a3d] mb-2 leading-tight">
                      {product.name}
                    </DialogTitle>
                    <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                      <Badge
                        variant="outline"
                        className="text-[#2d5a3d] border-[#2d5a3d] text-xs sm:text-sm"
                      >
                        {product.product}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[#2d5a3d] border-[#2d5a3d] text-xs sm:text-sm"
                      >
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d5a3d]">
                    {currentPrice}
                  </span>
                </div>
              </div>

              {/* Size Selection - Only show if product has sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold mb-3 text-[#2d5a3d] text-sm sm:text-base">
                    Available Sizes:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {product.sizes.map((sizeOption) => (
                      <Card
                        key={sizeOption.size}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedSize === sizeOption.size
                            ? "border-[#2d5a3d] bg-[#2d5a3d]/5 shadow-md"
                            : "hover:border-[#2d5a3d]/50"
                        }`}
                        onClick={() => setSelectedSize(sizeOption.size)}
                      >
                        <CardContent className="p-2 sm:p-4 text-center">
                          <div className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                            {sizeOption.size}
                          </div>
                          <div className="text-xs sm:text-sm text-[#2d5a3d] font-medium">
                            {sizeOption.price}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Store Availability - Only show if product has sizes and selectedSize exists */}
              {product.sizes &&
                selectedSize &&
                storeAvailability[
                  selectedSize as keyof typeof storeAvailability
                ] && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-3 text-[#2d5a3d] text-sm sm:text-base">
                      Available at these stores:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {storeAvailability[
                        selectedSize as keyof typeof storeAvailability
                      ].map((store) => (
                        <a
                          key={store.name}
                          href={store.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-[#2d5a3d]/30">
                            <CardContent className="p-3 sm:p-4 text-center">
                              <div className="relative w-full h-12 sm:h-16 mb-2 flex items-center justify-center">
                                <Image
                                  src={store.logo || "/placeholder.svg"}
                                  alt={store.name}
                                  fill
                                  className="object-contain transition-all duration-300 group-hover:scale-110"
                                  sizes="(max-width: 640px) 80px, 100px"
                                />
                              </div>
                              <div className="text-xs sm:text-sm font-medium text-[#2d5a3d] group-hover:text-[#1e3a2a]">
                                {store.name}
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {/* Simple Features */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                  <span>Free delivery on orders above 500 EGP</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                  <span>100% authentic products</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                  <span>Easy 7-day return policy</span>
                </div>
              </div>

              <Separator className="my-4 sm:my-6" />

              {/* Simplified Product Details Tabs */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-8 sm:h-10">
                  <TabsTrigger value="details" className="text-xs sm:text-sm">
                    Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="ingredients"
                    className="text-xs sm:text-sm"
                  >
                    Ingredients
                  </TabsTrigger>
                  <TabsTrigger value="feeding" className="text-xs sm:text-sm">
                    Feeding
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-3 sm:mt-4">
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {productDetails.features
                        .slice(0, 6)
                        .map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                            <span className="text-xs sm:text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ingredients" className="mt-3 sm:mt-4">
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                      Main Ingredients:
                    </h4>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      {productDetails.ingredients.slice(0, 8).join(", ")}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="feeding" className="mt-3 sm:mt-4">
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                      Daily Feeding Guide:
                    </h4>
                    <div className="space-y-2">
                      {productDetails.feedingGuide
                        .slice(0, 4)
                        .map((guide, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-100 text-xs sm:text-sm"
                          >
                            <span className="font-medium">{guide.weight}</span>
                            <span className="text-[#2d5a3d] font-medium">
                              {guide.daily}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
