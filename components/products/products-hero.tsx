"use client";

import { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/translations";

export function ProductsHero({ locale = "en" }: { locale?: Locale }) {
  return (
    <section className="relative md:min-h-[50vh] overflow-hidden flex items-center">
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${locale === "ar" ? "scale-x-[-1]" : ""}`}
          style={{
            backgroundImage: "url('/our-product-bg.webp')",
          }}
        />
      </div>

      {/* Mobile Background Image */}
      <div className="md:hidden w-full relative">
        <img
          src="/our-product-bg.webp"
          alt="Products Background"
          className={`w-full h-auto object-cover ${locale === "ar" ? "scale-x-[-1]" : ""}`}
          style={{ backgroundColor: "#FFFCEF" }}
        />

        {/* Mobile Title Overlay */}
        <div
          className={`absolute top-14 ${locale === "ar" ? "right-4" : "left-4"}`}
        >
          <h1
            className={`text-2xl font-bold text-white leading-tight ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t(locale, "products.page.title")}
          </h1>
        </div>

        {/* Mobile Content Below Image */}
        <div className="px-4 py-6 text-center">
          <p className="text-sm text-[#2d5a3d] leading-relaxed max-w-sm mx-auto">
            {t(locale, "products.page.subtitle")}
          </p>
        </div>
      </div>

      {/* Desktop Content Overlay */}
      <div className="hidden md:block absolute inset-0 z-10 container mx-auto px-4 py-24 items-center">
        <div
          className={`max-w-2xl ${locale === "ar" ? "ml-auto mr-0" : "ml-0 mr-auto"}`}
        >
          <div
            className={`text-[#FFFCEF] animate-fade-in-up ${locale === "ar" ? "text-right" : "text-left"}`}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {t(locale, "products.page.title")}
            </h1>

            <p className="text-lg lg:text-xl mb-8 text-[#ebe7d9] w-1/2 leading-relaxed">
              {t(locale, "products.page.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
