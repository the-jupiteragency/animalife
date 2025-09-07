"use client";

export function ProductsHero() {
  return (
    <section className="relative md:min-h-[50vh] overflow-hidden flex items-center">
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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
          className="w-full h-auto object-fill"
          style={{ backgroundColor: "#FFFCEF" }}
        />
      </div>

      <div className="absolute md:relative inset-0 md:inset-auto z-10 container mx-auto px-4 py-16 md:py-24 flex items-center">
        <div className="max-w-2xl">
          {/* Content positioned on the left */}
          <div className="text-[#FFFCEF] animate-fade-in-up">
            <h1 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-6 leading-tight">
              Our <span className="text-[#FFFCEF]">Products</span>
            </h1>

            <p className="text-xs sm:text-base md:text-lg lg:text-xl mb-2 md:mb-8 text-[#ebe7d9] w-1/2 leading-relaxed">
              Discover our complete range of scientifically formulated nutrition
              solutions for every life stage & breed size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
