import { ProductsHero } from "@/components/products/products-hero";
import { ProductsGrid } from "@/components/products/products-grid";

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductsGrid />
    </main>
  );
}
