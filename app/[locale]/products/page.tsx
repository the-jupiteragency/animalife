import { ProductsHero } from "@/components/products/products-hero";
import { ProductsGrid } from "@/components/products/products-grid";

import { Locale } from '@/lib/i18n/config';

export default function ProductsPage({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <main className="min-h-screen">
      <ProductsHero locale={locale} />
      <ProductsGrid locale={locale} />
    </main>
  );
}
