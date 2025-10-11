import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { DogMatchSection } from "@/components/dog-match-section";
// import { CompleteDietSection } from "@/components/complete-diet-section";
// import { PartnersSection } from "@/components/partners-section";
import { AcademySection } from "@/components/academy-section";
import { AboutSection } from "@/components/about-section";

import { Locale } from '@/lib/i18n/config';
import { generatePageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  return generatePageMetadata('home', locale);
}

export default function Home({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <main className="min-h-screen">
      <HeroSection locale={locale} />
      <ProductsSection locale={locale} />
      <AboutSection locale={locale} />
      <DogMatchSection locale={locale} />
      {/* <CompleteDietSection /> */}
      {/* <PartnersSection /> */}
      <AcademySection locale={locale} />
    </main>
  );
}
