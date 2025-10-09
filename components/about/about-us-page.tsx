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
    id: "fresh-food",
    title: "Fresh Food",
    subtitle:
      "Offering pet owners natural and freshly prepared meals for their dogs.",
    image: "/aboutcard3.webp",
    comingSoon: true,
  },
];

import { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/translations";

interface AboutUsPageProps {
  locale: Locale;
}

const getPlateImage = (cardId: string): string => {
  const images: Record<string, string> = {
    "dry-food": "/aboutcard3.webp",
    "canned-food": "/aboutcard2.webp",
    "fresh-food": "/aboutcard1.webp",
  };
  return images[cardId] || "/placeholder.svg";
};
export function AboutUsPage({ locale }: AboutUsPageProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isArabic = locale === "ar";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative md:min-h-[50vh] overflow-hidden flex items-center">
        {/* Desktop Background Image */}
        <div className="hidden md:block absolute inset-0">
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${isArabic ? "transform scale-x-[-1]" : ""}`}
            style={{
              backgroundImage: "url('/about-hero-image.webp')",
            }}
          />
        </div>

        {/* Mobile Background Image */}
        <div className="md:hidden w-full relative">
          <img
            src="/about-hero-image.webp"
            alt={t(locale, "about.hero.title")}
            className={`w-full h-auto object-cover ${isArabic ? "transform scale-x-[-1]" : ""}`}
            style={{ backgroundColor: "#FFFCEF" }}
          />

          {/* Mobile Title Overlay */}
          <div className={`absolute top-7 ${isArabic ? "right-4" : "left-4"}`}>
            <h1 className="text-2xl font-bold text-white leading-tight">
              {t(locale, "about.hero.title")
                .split("\n")
                .map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
            </h1>
          </div>

          {/* Mobile Content Below Image */}
          <div className="px-4 py-6 text-center">
            <p className="text-sm text-[#2d5a3d] leading-relaxed max-w-sm mx-auto">
              {t(locale, "about.hero.description")}
            </p>
          </div>
        </div>

        {/* Desktop Content Overlay */}
        <div className="hidden md:block absolute inset-0 z-10 container mx-auto px-4 py-24  items-center">
          <div className="max-w-2xl">
            <div className="text-[#F9F4DF] animate-fade-in-up">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                {t(locale, "about.hero.title")
                  .split("\n")
                  .map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
              </h1>

              <p className="text-lg lg:text-xl mb-8 text-[#ebe7d9] leading-relaxed">
                {t(locale, "about.hero.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative overflow-hidden">
        {/* Mobile Layout */}
        <div className="block md:hidden relative h-[50vh] min-h-[400px]">
          <Image
            src="/about-mission-sec.webp"
            alt={t(locale, "about.mission.title")}
            fill
            className={`object-cover object-center ${isArabic ? "transform scale-x-[-1]" : ""}`}
            sizes="100vw"
          />

          {/* Mobile Content Overlay - Right Side */}
          <div className={`absolute inset-0 flex items-center justify-end `}>
            <div
              className={`w-1/2 p-4 rounded-l-2xl ${isArabic ? "mr-10" : "ml-4"}`}
            >
              <h2 className="text-lg font-bold mb-3 text-[#134635] leading-tight">
                {t(locale, "about.mission.title")}
              </h2>
              <div className="w-12 h-1 bg-[#d4704a] mb-3 rounded-full"></div>
              <p className="text-xs text-[#134635]/90 leading-relaxed font-light">
                {t(locale, "about.mission.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative min-h-screen">
          <div className="absolute inset-0">
            <Image
              src="/about-mission-sec.webp"
              alt={t(locale, "about.mission.title")}
              fill
              className={`object-cover object-center ${isArabic ? "transform scale-x-[-1]" : ""}`}
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
                      {t(locale, "about.mission.title")}
                    </h2>

                    <div className="w-16 md:w-20 lg:w-24 xl:w-32 h-1 md:h-1.5 bg-[#d4704a] mb-4 md:mb-6 lg:mb-8 rounded-full"></div>

                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#134635]/90 leading-relaxed font-light">
                      {t(locale, "about.mission.description")}
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
            alt={t(locale, "about.whyAnimaLife.title")}
            fill
            className={`object-cover object-center ${isArabic ? "transform scale-x-[-1]" : ""}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/5" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2d5a3d] leading-tight tracking-tight">
                {t(locale, "about.whyAnimaLife.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
              {/* R&D Focused */}
              <div
                className={`space-y-4 sm:space-y-6 lg:space-y-8 text-center ${isArabic ? "md:text-right" : "md:text-left"}`}
              >
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
                    {t(locale, "about.whyAnimaLife.rdFocused.title")}
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#2d5a3d]/80 leading-relaxed">
                    {t(locale, "about.whyAnimaLife.rdFocused.description")}
                  </p>
                </div>
              </div>

              {/* Nutritional Philosophy */}
              <div
                className={`space-y-4 sm:space-y-6 lg:space-y-8 text-center ${isArabic ? "md:text-right" : "md:text-left"}`}
              >
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
                    {t(
                      locale,
                      "about.whyAnimaLife.nutritionalPhilosophy.title"
                    )}
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#2d5a3d]/80 leading-relaxed">
                    {t(
                      locale,
                      "about.whyAnimaLife.nutritionalPhilosophy.description"
                    )}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div
                className={`space-y-4 sm:space-y-6 lg:space-y-8 text-center ${isArabic ? "md:text-right" : "md:text-left"}`}
              >
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
                    {t(locale, "about.whyAnimaLife.vision.title")}
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#2d5a3d]/80 leading-relaxed">
                    {t(locale, "about.whyAnimaLife.vision.description")}
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
              {t(locale, "about.wellness.title")}
            </h2>
            <div className="w-20 h-1 bg-[#d4704a] mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#134635]/80 max-w-4xl mx-auto leading-relaxed">
              {t(locale, "about.wellness.description")}
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
                      {t(locale, "about.wellness.ingredients.chicken.title")}
                    </h3>
                    <p className="text-sm text-[#134635]/60 font-medium mb-2">
                      {t(locale, "about.wellness.ingredients.chicken.subtitle")}
                    </p>
                    <p className="text-sm text-[#d4704a] font-semibold mb-4">
                      <span className="text-[#134635]/80">
                        {isArabic
                          ? "العناصر الغذائية الرئيسية:"
                          : "Key Nutrients:"}
                      </span>{" "}
                      {t(
                        locale,
                        "about.wellness.ingredients.chicken.keyNutrients"
                      )}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#134635] mb-3">
                      {t(locale, "about.wellness.ingredients.healthBenefits")}
                    </h4>
                    <ul className="space-y-2 text-sm text-[#134635]/80">
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-75">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          1.
                        </span>
                        <span>
                          <strong>
                            {isArabic
                              ? "تغذية متكاملة:"
                              : "Complete Nutrient Balance:"}
                          </strong>{" "}
                          {isArabic
                            ? "مكوَّنة من كل العناصر الغذائية الَّذي يحتاجها جسم الكلب لتساعد على بناء العضلات ونمو صحي."
                            : "Supplies essential amino acids for muscle development and overall growth"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-100">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          2.
                        </span>
                        <span>
                          <strong>
                            {isArabic
                              ? "يساعد على الهضم:"
                              : "Enhanced Digestive Health:"}
                          </strong>{" "}
                          {isArabic
                            ? "البروتين الخفيف على المعدة بيدعم صحة الجهاز الهضمي."
                            : "Easily digestible protein promotes gut health"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-150">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          3.
                        </span>
                        <span>
                          <strong>
                            {isArabic
                              ? "طاقة لحياة نشيطة:"
                              : "Energy for an Active Life:"}
                          </strong>{" "}
                          {isArabic
                            ? "بيدعم احتياجات جسم الكلب ليزداد نشاط وحيوية"
                            : "Supports metabolic and physical activity needs"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2  transition-transform duration-300 delay-200">
                        <span className="text-[#d4704a] mt-1 font-bold">
                          4.
                        </span>
                        <span>
                          <strong>
                            {isArabic
                              ? "تغذية معتمدة على نصايح دكاترة البيطري:"
                              : "Veterinary-Informed Nutrition:"}
                          </strong>{" "}
                          {isArabic
                            ? "متوافقة مع توصياتهم لتحافظ على صحة الكلاب الأكبر سنًا"
                            : "Aligns with veterinary recommendations for adult dogs maintenance"}
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
                    {isArabic ? "أرز" : "Rice"}
                  </h3>
                  <p className="text-xs text-[#f4a261] font-semibold mb-3">
                    <span className="text-[#134635]/80">
                      {isArabic ? "العناصر الغذائية:" : "Key Nutrients:"}
                    </span>{" "}
                    {isArabic
                      ? "كربوهيدرات سهلة الهضم"
                      : "Easily digestible carbohydrate"}
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#f4a261] font-bold">1.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "يدعّم الجهاز الهضمي وخفيف على المعدة"
                            : "Enhanced Digestive Health: Gentle on the stomach, promotes easy digestion"}
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#f4a261] font-bold">2.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "مصدر طاقة سريع لنشاط طول اليوم"
                            : "Energy for an Active Life: Fast-release energy source for active dogs"}
                        </strong>
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
                    {isArabic
                      ? "الحبوب الغنية بالعناصر الغذائية"
                      : "Nutrient-Rich Grains"}
                  </h3>
                  <p className="text-xs text-[#e76f51] font-semibold mb-3">
                    <span className="text-[#134635]/80">
                      {isArabic
                        ? "العناصر الغذائية الرئيسية:"
                        : "Key Nutrients:"}
                    </span>{" "}
                    {isArabic
                      ? "بروتين نباتي، أحماض دهنية أوميغا"
                      : "Plant protein, omega fatty acids"}
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#e76f51] font-bold">1.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "بشرة ومعطف مشع:"
                            : "Radiant Skin and Coat:"}
                        </strong>{" "}
                        {isArabic
                          ? "أوميغا 6 يدعم مرونة الجلد ولمعان المعطف"
                          : "Omega 6 supports skin elasticity and coat shine"}
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#e76f51] font-bold">2.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "توازن غذائي كامل:"
                            : "Complete Nutrient Balance:"}
                        </strong>{" "}
                        {isArabic
                          ? "يضيف بروتين نباتي لتنويع ملف الأحماض الأمينية"
                          : "Adds plant protein to diversify amino acid profile"}
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                      <span className="text-[#e76f51] font-bold">3.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "تعزيز الدفاعات الطبيعية:"
                            : "Boosting Natural Defenses:"}
                        </strong>{" "}
                        {isArabic
                          ? "يحتوي على مضادات الأكسدة والمغذيات الدقيقة لدعم المناعة"
                          : "Contains antioxidants and micronutrients for immune support"}
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
                    {isArabic ? "دهن الدجاج" : "Chicken Fat"}
                  </h3>
                  <p className="text-xs text-[#2a9d8f] font-semibold mb-3">
                    <span className="text-[#134635]/80">
                      {isArabic ? "العناصر الغذائية:" : "Key Nutrients:"}
                    </span>{" "}
                    {isArabic
                      ? "دهون كمصدر للطاقة وأحماض دهنية أساسية ومهمة للجسم"
                      : "Energy-dense fats, essential fatty acids"}
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#2a9d8f] font-bold">1.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "جلد صحي وفرو لامع:"
                            : "Radiant Skin and Coat:"}
                        </strong>{" "}
                        {isArabic
                          ? "يحافظ على صحة جلد الكلب و لمعان الفرو."
                          : "Promotes healthy, glossy fur"}
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#2a9d8f] font-bold">2.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "طاقة لحياة نشيطة:"
                            : "Energy for an Active Life:"}
                        </strong>{" "}
                        {isArabic
                          ? "مصدر قوي للطاقة"
                          : "Concentrated energy source"}
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                      <span className="text-[#2a9d8f] font-bold">3.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "طعم لا يُقاوَم:"
                            : "Taste That is Tempting:"}
                        </strong>{" "}
                        {isArabic
                          ? "يفتح الشهية ويحفّز على التناول"
                          : "Enhances palatability and encourages consumption"}
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
                    {isArabic ? "البنجر" : "Beetroot"}
                  </h3>
                  <p className="text-xs text-[#8e44ad] font-semibold mb-3">
                    <span className="text-[#134635]/80">
                      {isArabic ? "العناصر الغذائية:" : "Key Nutrients:"}
                    </span>{" "}
                    {isArabic
                      ? "الألياف القابلة للذوبان والألياف غير القابلة للذوبان"
                      : "Soluble and insoluble fiber"}
                  </p>
                  <h4 className="text-xs font-semibold text-[#134635] mb-2">
                    {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                  </h4>
                  <ul className="space-y-1 text-xs text-[#134635]/80">
                    <li className="flex items-start gap-1  transition-transform duration-300">
                      <span className="text-[#8e44ad] font-bold">1.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "يدعّم الجهاز الهضمي:"
                            : "Enhanced Digestive Health:"}
                        </strong>{" "}
                        {isArabic
                          ? "يعزّز توازن البكتيريا النافعة في الأمعاء ويساعد في دعم وتحسين عملية الهضم"
                          : "Promotes gut flora balance and stool quality, helping digest better"}
                      </span>
                    </li>
                    <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                      <span className="text-[#8e44ad] font-bold">2.</span>
                      <span>
                        <strong>
                          {isArabic
                            ? "التحكّم الصحّي في الوزن:"
                            : "Healthy Weight Control:"}
                        </strong>{" "}
                        {isArabic
                          ? "يساعد على الإحساس بالشبع والامتلاء من غير زيادة في السُّعرات الحرارية."
                          : "Aids in fullness satisfaction without adding excess calories"}
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
                        {isArabic ? "الجزر" : "Carrots"}
                      </h3>
                      <p className="text-xs text-[#ff9500] font-semibold mb-2">
                        <span className="text-[#134635]/80">
                          {isArabic
                            ? "العناصر الغذائية الرئيسية:"
                            : "Key Nutrients:"}
                        </span>{" "}
                        {isArabic
                          ? "ألياف وفيتامين A، K"
                          : "Fiber and Vitamin A, K"}
                      </p>
                      <h4 className="text-xs font-semibold text-[#134635] mb-2">
                        {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                      </h4>
                      <ul className="space-y-1 text-xs text-[#134635]/80">
                        <li className="flex items-start gap-1  transition-transform duration-300">
                          <span className="text-[#ff9500] font-bold">1.</span>
                          <span>
                            {isArabic
                              ? "دعم وتعزيز جهاز المناعة"
                              : "Better Immune Support"}
                          </span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                          <span className="text-[#ff9500] font-bold">2.</span>
                          <span>
                            {isArabic
                              ? "جلد صحي وفَرْو لامع"
                              : "Healthy Skin and Coat"}
                          </span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                          <span className="text-[#ff9500] font-bold">3.</span>
                          <span>
                            {isArabic ? "تحسن في البصر" : "Improved Eye-sight"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* Green Peas */}
                    <div>
                      <div className="w-10 h-10 bg-gradient-to-br from-[#27ae60] to-[#229954] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Bean color="#e6e6e6" />
                      </div>
                      <h3 className="text-base font-bold text-[#134635] mb-2 group-hover:text-[#27ae60] transition-colors duration-300">
                        {isArabic ? "البازلاء الخضراء" : "Green Peas"}
                      </h3>
                      <p className="text-xs text-[#27ae60] font-semibold mb-2">
                        <span className="text-[#134635]/80">
                          {isArabic
                            ? "العناصر الغذائية الرئيسية:"
                            : "Key Nutrients:"}
                        </span>{" "}
                        {isArabic
                          ? "بروتين، ألياف وفيتامين A، K، C"
                          : "Protein, Fiber and Vitamin A, K, C"}
                      </p>
                      <h4 className="text-xs font-semibold text-[#134635] mb-2">
                        {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                      </h4>
                      <ul className="space-y-1 text-xs text-[#134635]/80">
                        <li className="flex items-start gap-1  transition-transform duration-300">
                          <span className="text-[#27ae60] font-bold">1.</span>
                          <span>
                            {isArabic
                              ? "يدعم الهضم الصحي ويُساعد على استمراره."
                              : "Supports and maintains Healthy Digestion"}
                          </span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-75">
                          <span className="text-[#27ae60] font-bold">2.</span>
                          <span>
                            {isArabic
                              ? "جلد صحي وتعزيز ودعم وظائف القلب"
                              : "Healthy Skin and Heart Function"}
                          </span>
                        </li>
                        <li className="flex items-start gap-1  transition-transform duration-300 delay-100">
                          <span className="text-[#27ae60] font-bold">3.</span>
                          <span>
                            {isArabic
                              ? "غني بالفيتامينات التي تُسهم في دعم الجهاز المناعي وتعزيز كفاءته"
                              : "Rich in vitamins that contribute to a healthier immune system"}
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
                        {isArabic
                          ? "الفيتامينات والمعادن الإضافية"
                          : "Additional Vitamins and Minerals"}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">
                        <strong>
                          {isArabic ? "الفيتامينات:" : "Vitamins:"}
                        </strong>{" "}
                        A, D3, E,{" "}
                        {isArabic
                          ? "فيتامينات B (B1، B2، B6، B12)"
                          : "B Vitamins (B1, B2, B6, B12)"}
                        <br />
                        <strong>
                          {isArabic ? "المعادن:" : "Minerals:"}
                        </strong>{" "}
                        {isArabic
                          ? "الزنك، النحاس، الكالسيوم، الفوسفور"
                          : "Zinc, Copper, Calcium, Phosphorus"}
                      </p>
                    </div>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-4">
                    {isArabic ? "الفوائد الصحية:" : "Health Benefits:"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="space-y-2  transition-transform duration-300">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">1.</span>
                        <span>
                          {isArabic
                            ? "جلد صحّي وفَرْو لامع :"
                            : "Radiant Skin and Coat:"}
                        </span>
                      </h4>
                      <p
                        className={`text-white/80 text-xs ${isArabic ? "mr-5" : "ml-5"}`}
                      >
                        {isArabic ? "فيتامين E" : "Vitamin E"}
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-75">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">2.</span>
                        <span>
                          {isArabic
                            ? "تعزيز المناعة:"
                            : "Boosting Natural Defenses:"}
                        </span>
                      </h4>
                      <p
                        className={`text-white/80 text-xs ${isArabic ? "mr-5" : "ml-5"}`}
                      >
                        {isArabic
                          ? "فيتامين A، والفيتامينات المضادة للأكسدة"
                          : "Vitamin A, and antioxidant vitamins"}
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-100">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">3.</span>
                        <span>
                          {isArabic
                            ? "دعم صحة الجهاز العصبي:"
                            : "Targeted Wellness Support:"}
                        </span>
                      </h4>
                      <p
                        className={`text-white/80 text-xs ${isArabic ? "mr-5" : "ml-5"}`}
                      >
                        {isArabic
                          ? "فيتامينات B"
                          : "B Vitamins for nervous system health"}
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-150">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">4.</span>
                        <span>
                          {isArabic
                            ? "نظام تغذوي صحي ومتوازن:"
                            : "Complete Nutrient Balance:"}
                        </span>
                      </h4>
                      <p
                        className={`text-white/80 text-xs ${isArabic ? "mr-5" : "ml-5"}`}
                      >
                        {isArabic
                          ? "يوفّر المكونات الغذائية الضرورية للحفاظ على كفاءة العضلات والأعصاب"
                          : "Provides essential micronutrients essential for muscular and nerve function"}
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-200">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">5.</span>
                        <span>
                          {isArabic
                            ? "تغذية معتمدة من الأطباء البيطريين:"
                            : "Veterinary-Informed Nutrition:"}
                        </span>
                      </h4>
                      <p
                        className={`text-white/80 text-xs ${isArabic ? "mr-5" : "ml-5"}`}
                      >
                        {isArabic
                          ? "مُصمَّمة علميًا بعناصر دقيقة عالية الجودة"
                          : "Scientifically formulated micro-premix"}
                      </p>
                    </div>
                    <div className="space-y-2  transition-transform duration-300 delay-250">
                      <h4 className="text-white font-semibold text-sm flex items-start gap-2">
                        <span className="text-yellow-300 font-bold">6.</span>
                        <span>
                          {isArabic
                            ? "دعم صحة العظام:"
                            : "Bone Health Support:"}
                        </span>
                      </h4>
                      <p
                        className={`text-white/80 text-xs ${isArabic ? "mr-5" : "ml-5"}`}
                      >
                        {isArabic
                          ? "ضروري لقوة ونمو الهيكل العظمي"
                          : "Essential for skeletal strength and growth"}
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
              {t(locale, "about.futureProducts.title")}
            </h2>
          </div>

          <div className="flex justify-center gap-8 max-w-2xl mx-auto">
            {productCards.map((card) => (
              <Card
                key={card.id}
                className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group rounded-xl sm:rounded-2xl w-44 sm:w-56 lg:w-64 flex-shrink-0"
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
                      <div className="p-4 sm:p-3 md:p-4 lg:p-6 flex-shrink-0">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1 leading-tight">
                          {card.id === "dry-food"
                            ? t(locale, "about.futureProducts.dryFood")
                            : t(locale, "about.futureProducts.freshFood")}
                        </h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-white/90 leading-tight line-clamp-2">
                          {card.id === "dry-food"
                            ? t(locale, "about.futureProducts.dryFoodSubtitle")
                            : t(
                                locale,
                                "about.futureProducts.freshFoodSubtitle"
                              )}
                        </p>

                        {card.comingSoon && hoveredCard === card.id && (
                          <div className="mt-1 sm:mt-2">
                            <Badge className="bg-[#d4704a] hover:bg-[#b85a3a] text-white px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-semibold animate-in fade-in-0 slide-in-from-top-2 duration-300">
                              {t(locale, "about.futureProducts.comingSoon")}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Much bigger plate images taking most of the card space */}
                      <div className="relative flex-1 flex items-end justify-center pb-1 sm:pb-2 overflow-hidden">
                        <div
                          className={`
              relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36
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
