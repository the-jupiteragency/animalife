import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { DogMatchSection } from "@/components/dog-match-section";
// import { CompleteDietSection } from "@/components/complete-diet-section";
// import { PartnersSection } from "@/components/partners-section";
// import { AcademySection } from "@/components/academy-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <DogMatchSection />
      {/* <CompleteDietSection /> */}
      {/* <PartnersSection /> */}
      {/* <AcademySection /> */}
    </main>
  );
}
