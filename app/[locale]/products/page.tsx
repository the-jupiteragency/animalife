import { ProductsHero } from "@/components/products/products-hero";
import { ProductsGrid } from "@/components/products/products-grid";

import { Locale } from '@/lib/i18n/config';
import { generatePageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  return generatePageMetadata('products', locale);
}

export default function ProductsPage({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <main className="min-h-screen">
      <ProductsHero locale={locale} />
      <ProductsGrid locale={locale} />
    </main>
  );
}
