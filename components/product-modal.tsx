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
import { Check, ShieldCheck, Microscope, Handshake } from "lucide-react";
import Image from "next/image";
import { Locale } from "@/lib/i18n/config";
import {
  t,
  translateSize,
  translateWeight,
  getProductName,
  getProductBenefits,
} from "@/lib/i18n/translations";

interface Product {
  id: number;
  name: string;
  category: string;
  product: string;
  size: string;
  price: string;
  frontImage: string;
  backImage: string;
  hoverImage?: string;
  ageGroup?: string;
  breedSize?: string;
  feeding: Array<{
    weight: string;
    daily: string;
    meals: string;
  }>;
  ingredient?: string[];
  ingredients?: string[];
  keyBenefits?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
}

export function ProductModal({
  product,
  isOpen,
  onClose,
  locale = "en",
}: ProductModalProps) {
  const [currentImage, setCurrentImage] = useState("");
  const [showMagnify, setShowMagnify] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (product) {
      setCurrentImage(product.frontImage);
    }
  }, [product]);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0 m-2 sm:m-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full max-h-[95vh]">
          {/* Product Images */}
          <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 flex-shrink-0">
            <div
              className="aspect-square bg-white rounded-lg overflow-hidden mb-3 sm:mb-4 flex items-center justify-center p-2 sm:p-4 relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowMagnify(true)}
              onMouseLeave={() => setShowMagnify(false)}
            >
              <div className="relative w-full h-full max-w-60 sm:max-w-80 max-h-60 sm:max-h-80">
                <Image
                  src={currentImage}
                  alt={`${product.name} - ${product.size}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 50vw"
                />
              </div>

              {/* Magnify Glass Effect */}
              {showMagnify && (
                <div
                  className="absolute w-52 h-52 border-2 border-white rounded-full pointer-events-none z-10 shadow-lg hidden sm:block"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: "600%",
                    backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
              )}
            </div>

            {/* Front/Back Image Toggle */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded border-2  overflow-hidden transition-all ${
                  currentImage === product.frontImage
                    ? "border-[#2d5a3d]"
                    : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => setCurrentImage(product.frontImage)}
              >
                <div className="relative w-full h-full p-1">
                  <Image
                    src={product.frontImage}
                    alt={`${product.name} Front`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </div>
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded border-2  overflow-hidden transition-all ${
                  currentImage === product.backImage
                    ? "border-[#2d5a3d]"
                    : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => setCurrentImage(product.backImage)}
              >
                <div className="relative w-full h-full p-1">
                  <Image
                    src={product.backImage}
                    alt={`${product.name} Back`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 overflow-y-auto">
            <div
              className={`p-3 sm:p-4 lg:p-6 ${locale === "ar" ? "text-right" : "text-left"}`}
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              <DialogHeader className="mb-3 sm:mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2d5a3d] mb-2 leading-tight">
                      {getProductName(product.name, locale)}
                    </DialogTitle>
                    <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                      <Badge
                        variant="outline"
                        className="text-[#2d5a3d] border-[#2d5a3d] text-xs sm:text-sm"
                      >
                        {t(locale, "products.productType")}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[#2d5a3d] border-[#2d5a3d] text-xs sm:text-sm"
                      >
                        {getProductName(product.category, locale)}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[#2d5a3d] border-[#2d5a3d] text-xs sm:text-sm"
                      >
                        {t(locale, "products.ageRange")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d5a3d]">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Product Size Display */}
              <div className="mb-4 sm:mb-6 w-1/3">
                <h4 className="font-semibold mb-3 text-[#2d5a3d] text-sm sm:text-base">
                  {t(locale, "products.modal.packageSize")}
                </h4>
                <Card className="border-[#2d5a3d] bg-[#2d5a3d]/5 shadow-md">
                  <CardContent className="p-2 sm:p-4 text-center">
                    <div className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                      {translateSize(product.size, locale)}
                    </div>
                    <div className="text-xs sm:text-sm text-[#2d5a3d] font-medium">
                      {product.price}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Simple Features */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Microscope className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                  <span>{t(locale, "products.modal.expertDeveloped")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                  <span>{t(locale, "products.modal.tested")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Handshake className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                  <span>{t(locale, "products.modal.trustedIngredients")}</span>
                </div>
              </div>

              <Separator className="my-4 sm:my-6" />

              {/* Product Details Tabs */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-8 sm:h-10">
                  <TabsTrigger value="details" className="text-xs sm:text-sm">
                    {t(locale, "products.modal.tabs.details")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="ingredients"
                    className="text-xs sm:text-sm"
                  >
                    {t(locale, "products.modal.tabs.ingredients")}
                  </TabsTrigger>
                  <TabsTrigger value="feeding" className="text-xs sm:text-sm">
                    {t(locale, "products.modal.tabs.feeding")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-3 sm:mt-4">
                  <div
                    className={`space-y-3 sm:space-y-4 ${locale === "ar" ? "text-right" : "text-left"}`}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <h4 className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                      {t(locale, "products.modal.keyBenefits")}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {(() => {
                        const benefits = getProductBenefits(
                          product.category,
                          locale
                        );
                        return benefits.length > 0 ? (
                          benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className={`flex items-center gap-2`}
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#2d5a3d] flex-shrink-0" />
                              <span className="text-xs sm:text-sm">
                                {benefit}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="text-xs sm:text-sm">
                            {t(locale, "products.modal.noBenefits")}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ingredients" className="mt-4">
                  <div
                    className={`space-y-3 sm:space-y-4 ${locale === "ar" ? "text-right" : "text-left"}`}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div className={`flex items-center gap-2 mb-4 `}>
                      <div className="w-1 h-6 bg-[#2d5a3d] rounded-full"></div>
                      <h4 className="font-bold text-[#2d5a3d] text-base">
                        {t(locale, "products.modal.premiumIngredients")}
                      </h4>
                    </div>
                    <div
                      className={`max-h-96 overflow-y-auto space-y-6 custom-scrollbar ${locale === "ar" ? "pl-2" : "pr-2"}`}
                    >
                      {(product.ingredients &&
                        Array.isArray(product.ingredients) &&
                        product.ingredients.length > 0) ||
                      (product.ingredient &&
                        Array.isArray(product.ingredient) &&
                        product.ingredient.length > 0) ? (
                        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100 shadow-sm">
                          <ul className="space-y-2">
                            {t(locale, "products.ingredients").map(
                              (ingredientItem: string, index: number) => (
                                <li
                                  key={index}
                                  className={`flex items-center gap-2 `}
                                >
                                  <div className="w-2 h-2 bg-[#2d5a3d] rounded-full flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700">
                                    {ingredientItem}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <div className="text-gray-400 mb-2">
                            <svg
                              className="w-12 h-12 mx-auto"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-500 font-medium">
                            {t(locale, "products.modal.noIngredients")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: #f1f1f1;
                      border-radius: 3px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: #2d5a3d;
                      border-radius: 3px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: #1e3a2a;
                    }
                  `}</style>
                </TabsContent>

                <TabsContent value="feeding" className="mt-3 sm:mt-4">
                  <div
                    className={`space-y-3 sm:space-y-4 ${locale === "ar" ? "text-right" : "text-left"}`}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <h4 className="font-semibold text-[#2d5a3d] text-sm sm:text-base">
                      {t(locale, "products.modal.dailyFeedingGuide")}
                    </h4>
                    <div className="space-y-2">
                      {product.feeding?.map((guide, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 text-xs sm:text-sm"
                        >
                          <span className="font-medium">
                            {translateWeight(guide.weight, locale)}
                          </span>
                          <span className="text-[#2d5a3d] font-medium">
                            {translateWeight(guide.daily, locale)}{" "}
                            {t(locale, "products.units.daily")}, {guide.meals}{" "}
                            {t(locale, "products.units.meals")}
                          </span>
                        </div>
                      )) || (
                        <div className="text-xs sm:text-sm">
                          {t(locale, "products.modal.noFeeding")}
                        </div>
                      )}
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
