"use client";

export function ProductsHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[50vh] overflow-hidden flex items-center">
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover  bg-no-repeat"
          style={{
            backgroundImage: "url('/our-product-bg.webp')",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Content positioned on the left */}
          <div className="text-[#FFFCEF] animate-fade-in-up">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Our <span className="text-[#FFFCEF]">Products</span>
            </h1>

            <p className="text-md md:text-lg lg:text-xl mb-8 text-[#ebe7d9] leading-relaxed">
              Discover our complete range of scientifically formulated nutrition
              solutions for every life stage & breed size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
