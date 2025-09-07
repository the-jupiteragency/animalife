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
          className="w-full h-auto object-cover"
          style={{ backgroundColor: "#FFFCEF" }}
        />

        {/* Mobile Title Overlay */}
        <div className="absolute top-10 left-4">
          <h1 className="text-xl font-bold text-white leading-tight">
            Our Products
          </h1>
        </div>

        {/* Mobile Content Below Image */}
        <div className="px-4 py-6 text-center">
          <p className="text-sm text-[#2d5a3d] leading-relaxed max-w-sm mx-auto">
            Discover our complete range of scientifically formulated nutrition
            solutions for every life stage & breed size.
          </p>
        </div>
      </div>

      {/* Desktop Content Overlay */}
      <div className="hidden md:block absolute inset-0 z-10 container mx-auto px-4 py-24  items-center">
        <div className="max-w-2xl">
          <div className="text-[#FFFCEF] animate-fade-in-up">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Our <span className="text-[#FFFCEF]">Products</span>
            </h1>

            <p className="text-lg lg:text-xl mb-8 text-[#ebe7d9] w-1/2 leading-relaxed">
              Discover our complete range of scientifically formulated nutrition
              solutions for every life stage & breed size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
