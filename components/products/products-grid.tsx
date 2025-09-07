"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ProductModal } from "@/components/product-modal";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// const newIngredients = [
//   {
//     name: "Real Chicken Meat (Main Protein Source)",
//     keyNutrients: "Essential amino acids, protein",
//     healthBenefits: [
//       "Supplies essential amino acids for muscle development and overall growth",
//       "Easily digestible protein promotes gut health",
//       "Supports metabolic and physical activity needs",
//       "Aligns with veterinary recommendations for adult dogs maintenance",
//     ],
//   },
//   {
//     name: "Rice",
//     keyNutrients: "Carbohydrates",
//     healthBenefits: [
//       "Gentle on the stomach, promotes easy digestion",
//       "Fast-release energy source for active dogs",
//     ],
//   },
//   {
//     name: "Nutrient-Rich Grains",
//     keyNutrients: "Omega 6, plant protein, antioxidants, micronutrients",
//     healthBenefits: [
//       "Omega 6 supports skin elasticity and coat shine",
//       "Adds plant protein to diversify amino acid profile",
//       "Contains antioxidants and micronutrients for immune support",
//     ],
//   },
//   {
//     name: "Chicken Fat",
//     keyNutrients: "Fatty acids",
//     healthBenefits: [
//       "Promotes healthy, glossy fur",
//       "Concentrated energy source",
//       "Enhances palatability and encourages consumption",
//     ],
//   },
//   {
//     name: "Beetroot",
//     keyNutrients: "Fiber",
//     healthBenefits: [
//       "Promotes gut flora balance and stool quality, helping digest better",
//       "Aids in fullness satisfaction without adding excess calories",
//     ],
//   },
//   {
//     name: "Carrots",
//     keyNutrients: "Vitamins A, C, K, beta-carotene",
//     healthBenefits: [
//       "Better immune support",
//       "Healthy skin and coat",
//       "Improved eyesight",
//     ],
//   },
//   {
//     name: "Green Peas",
//     keyNutrients: "Vitamins, fiber, protein",
//     healthBenefits: [
//       "Supports and maintains healthy digestion",
//       "Healthy skin and heart function",
//       "Contributes to a healthier immune system",
//     ],
//   },
//   {
//     name: "Additional Vitamins and Minerals (A, D3, E, B1, B2, B6, B12, Zinc, Copper, Calcium, Phosphorus)",
//     keyNutrients: "Vitamins and minerals",
//     healthBenefits: [
//       "Vitamin E for radiant skin and coat",
//       "Vitamin A and antioxidant vitamins for natural defenses",
//       "B Vitamins for nervous system health",
//       "Provides essential micronutrients for muscular and nerve function",
//       "Scientifically formulated micro-premix",
//       "Essential for skeletal strength and growth",
//     ],
//   },
// ];
const ingredient = [
  "Real Chicken Meat (Main Protein Source)",
  "Rice",
  "Nutrient-Rich Grains",
  "Chicken Fat",
  "Beetroot",
  "Carrots",
  "Green Peas",
  "Additional Vitamins and Minerals (A, D3, E, B1, B2, B6, B12, Zinc, Copper, Calcium, Phosphorus)",
];
const allProducts = [
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
    ageGroup: "Adult",
    breedSize: "Small",
    feeding: [
      { weight: "3-5 kg", daily: "84-116g", meals: "2" },
      { weight: "5-8 kg", daily: "116-163g", meals: "2" },
      { weight: "8-10 kg", daily: "163-195g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Small",
    feeding: [
      { weight: "3-5 kg", daily: "84-116g", meals: "2" },
      { weight: "5-8 kg", daily: "116-163g", meals: "2" },
      { weight: "8-10 kg", daily: "163-195g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Small",
    feeding: [
      { weight: "3-5 kg", daily: "84-116g", meals: "2" },
      { weight: "5-8 kg", daily: "116-163g", meals: "2" },
      { weight: "8-10 kg", daily: "163-195g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Medium & Large",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Medium & Large",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Medium & Large",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Medium & Large",
    feeding: [
      { weight: "10-15 kg", daily: "195-274g", meals: "2" },
      { weight: "15-20 kg", daily: "274-353g", meals: "2" },
      { weight: "20-25 kg", daily: "353-432g", meals: "2" },
      { weight: "25-30 kg", daily: "432-577g", meals: "2" },
      { weight: "30-35 kg", daily: "577-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
    ],
    ingredients: ingredient,
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
    ageGroup: "Adult",
    breedSize: "Giant",
    feeding: [
      { weight: "30-35 kg", daily: "511-590g", meals: "2" },
      { weight: "35-40 kg", daily: "590-670g", meals: "2" },
      { weight: "40-45 kg", daily: "670-748g", meals: "2" },
      { weight: "45-50 kg", daily: "748-828g", meals: "2" },
      { weight: "50-55 kg", daily: "828-968g", meals: "2" },
      { weight: "55-60 kg", daily: "968-1144g", meals: "2" },
    ],
    ingredients: ingredient,
    keyBenefits: [
      "Supports dental health by reducing tartar",
      "Controls fast eating & helps reduce bloating",
      "Tailored for giant breeds with wider jaws & bigger teeth",
    ],
  },
];

const filterOptions = {
  ageGroup: ["Adult"],
  breedSize: ["Small", "Medium & Large", "Giant"],
  size: ["1kg", "3kg", "5kg", "10kg"],
};

export function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof allProducts)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    ageGroup: [] as string[],
    breedSize: [] as string[],
    size: [] as string[],
  });
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("name");

  const openProductModal = (product: (typeof allProducts)[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleFilterChange = (
    category: keyof typeof filters,
    value: string,
    checked: boolean
  ) => {
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const clearFilters = () => {
    setFilters({
      ageGroup: [],
      breedSize: [],
      size: [],
    });
    setPriceRange([0, 2000]);
  };

  const filteredProducts = allProducts
    .filter((product) => {
      // Search filter
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Age group filter
      if (
        filters.ageGroup.length > 0 &&
        !filters.ageGroup.includes(product.ageGroup)
      ) {
        return false;
      }

      // Breed size filter
      if (
        filters.breedSize.length > 0 &&
        !filters.breedSize.includes(product.breedSize)
      ) {
        return false;
      }

      // Size filter
      if (filters.size.length > 0 && !filters.size.includes(product.size)) {
        return false;
      }

      // Price filter
      const price = Number.parseInt(product.price.replace(" EGP", ""));
      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (
            Number.parseInt(a.price.replace(" EGP", "")) -
            Number.parseInt(b.price.replace(" EGP", ""))
          );
        case "price-high":
          return (
            Number.parseInt(b.price.replace(" EGP", "")) -
            Number.parseInt(a.price.replace(" EGP", ""))
          );
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#0A3D2C]">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-[#0A3D2C] hover:text-[#1e3a2a]"
        >
          <X className="w-4 h-4 mr-1" />
          Clear
        </Button>
      </div>

      {/* Breed Size Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-800">Breed Size</h4>
        {filterOptions.breedSize.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`breed-${option}`}
              checked={filters.breedSize.includes(option)}
              onCheckedChange={(checked) =>
                handleFilterChange("breedSize", option, checked as boolean)
              }
            />
            <label
              htmlFor={`breed-${option}`}
              className="text-sm text-gray-700 cursor-pointer"
            >
              {option} Breed
            </label>
          </div>
        ))}
      </div>

      {/* Size Filter */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-800">Package Size</h4>
        {filterOptions.size.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`size-${option}`}
              checked={filters.size.includes(option)}
              onCheckedChange={(checked) =>
                handleFilterChange("size", option, checked as boolean)
              }
            />
            <label
              htmlFor={`size-${option}`}
              className="text-sm text-gray-700 cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  // Product Card Component - Enhanced with hover animations
  function ProductCard({
    product,
    onClick,
    hasDiscount = false,
  }: {
    product: (typeof allProducts)[0];
    onClick: () => void;
    hasDiscount?: boolean;
  }) {
    const [isHovered, setIsHovered] = useState(false);
    const isComingSoon =
      product.breedSize === "Small" || product.breedSize === "Giant";

    return (
      <Card
        className={`cursor-pointer bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover:scale-[1.02] ${isComingSoon ? "opacity-75" : ""}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          {/* Image Banner */}
          <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-50">
            <img
              src={product.frontImage || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Coming Soon Badge */}
            {isComingSoon && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-orange-500 text-white font-semibold shadow-lg">
                  Coming Soon
                </Badge>
              </div>
            )}

            {/* Discount Badge */}
            {hasDiscount && (
              <div className="absolute top-3 right-3">
                <Badge
                  className="text-white font-semibold shadow-lg"
                  style={{ backgroundColor: "#BA643B" }}
                >
                  20% OFF
                </Badge>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section */}
          <div className="p-4 transition-all duration-300 group-hover:bg-gray-50/50">
            <h3 className="font-bold text-[#2d5a3d] mb-3 line-clamp-2 text-sm sm:text-lg leading-tight group-hover:text-[#1e3a2a] transition-colors duration-300">
              {product.name}
            </h3>

            <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-gray-600">
              <Badge
                variant="outline"
                className="text-[#2d5a3d] border-[#2d5a3d] text-xs font-medium flex-shrink-0"
              >
                {product.product}
              </Badge>
              <Badge
                variant="outline"
                className="text-[#2d5a3d] border-[#2d5a3d] text-xs font-medium flex-shrink-0"
              >
                {product.size}
              </Badge>
              <Badge
                variant="outline"
                className="text-[#2d5a3d] border-[#2d5a3d] text-xs font-medium flex-shrink-0"
              >
                1-7 Years
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className="text-gray-600 border-gray-300 text-xs"
              >
                {product.ageGroup}
              </Badge>
              <Badge
                variant="outline"
                className="text-gray-600 border-gray-300 text-xs"
              >
                {product.breedSize}
              </Badge>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xl font-bold text-[#2d5a3d] group-hover:text-[#1e3a2a] transition-colors duration-300">
                {product.price}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <section
      className="py-12 min-h-screen"
      style={{ backgroundColor: "#FFFCEF" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 bg-white rounded-xl p-6 h-fit sticky top-6 shadow-lg border border-gray-100">
            <FilterSidebar />
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="mb-4 border-[#2d5a3d] text-[#2d5a3d] hover:bg-[#2d5a3d] hover:text-white"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-[#2d5a3d]">
                    Filter Products
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-gray-700 font-medium">
                Showing{" "}
                <span className="text-[#2d5a3d] font-bold">
                  {filteredProducts.length}
                </span>{" "}
                of{" "}
                <span className="text-[#2d5a3d] font-bold">
                  {allProducts.length}
                </span>{" "}
                products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d5a3d] focus:border-[#2d5a3d] bg-white shadow-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => openProductModal(product)}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-6">
                  <Filter className="w-20 h-20 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  No products found
                </h3>
                <p className="text-gray-500 mb-6 text-lg">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  onClick={clearFilters}
                  className="bg-[#2d5a3d] hover:bg-[#1e3a2a] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Clear all filters
                </Button>
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
