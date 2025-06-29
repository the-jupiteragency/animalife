import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AnimalLife | Science-Driven Pet Nutrition & Wellness",
  description:
    "AnimalLife offers science-driven, complete, and balanced nutrition for pets. Discover products tailored to your pet's unique needs, expert advice, and a passionate community of animal lovers.",
  keywords: [
    "AnimalLife",
    "pet nutrition",
    "dog food",
    "cat food",
    "science-based pet care",
    "pet wellness",
    "healthy pets",
    "animal health",
    "pet products",
    "pet academy",
    "pet community",
  ],
  authors: [{ name: "AnimalLife Team", url: "https://animalife.vercel.app" }],
  creator: "AnimalLife",
  openGraph: {
    title: "AnimalLife | Science-Driven Pet Nutrition & Wellness",
    description:
      "AnimalLife offers science-driven, complete, and balanced nutrition for pets. Discover products tailored to your pet's unique needs, expert advice, and a passionate community of animal lovers.",
    url: "https://animalife.vercel.app",
    siteName: "AnimalLife",
    images: [
      {
        url: "/hero1.webp",
        width: 1200,
        height: 630,
        alt: "AnimalLife - Science-Driven Pet Nutrition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4838",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
