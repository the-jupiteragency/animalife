import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://animalife.vercel.app'),
  title: {
    default: "AnimaLife | Science-Driven Pet Nutrition & Wellness",
    template: "%s | AnimaLife"
  },
  description:
    "AnimaLife offers science-driven, complete, and balanced nutrition for pets. Discover products tailored to your pet's unique needs, expert advice, and a passionate community of animal lovers.",
  keywords: [
    "AnimaLife",
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
    "premium pet food",
    "natural pet nutrition",
    "pet health supplements"
  ],
  authors: [{ name: "AnimaLife Team", url: "https://animalife.vercel.app" }],
  creator: "AnimaLife",
  publisher: "AnimaLife",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Pet Care',
  classification: 'Pet Nutrition and Wellness',
  openGraph: {
    title: "AnimaLife | Science-Driven Pet Nutrition & Wellness",
    description:
      "AnimaLife offers science-driven, complete, and balanced nutrition for pets. Discover products tailored to your pet's unique needs, expert advice, and a passionate community of animal lovers.",
    url: "https://animalife.vercel.app",
    siteName: "AnimaLife",
    images: [
      {
        url: "/hero1.webp",
        width: 1200,
        height: 630,
        alt: "AnimaLife - Science-Driven Pet Nutrition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimaLife | Science-Driven Pet Nutrition & Wellness',
    description: 'AnimaLife offers science-driven, complete, and balanced nutrition for pets. Discover products tailored to your pet\'s unique needs.',
    images: ['/hero1.webp'],
    creator: '@animalife',
    site: '@animalife'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://animalife.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4838",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AnimaLife',
  url: 'https://animalife.vercel.app',
  logo: 'https://animalife.vercel.app/logo.svg',
  description: 'AnimaLife offers science-driven, complete, and balanced nutrition for pets.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://facebook.com/animalife',
    'https://twitter.com/animalife',
    'https://instagram.com/animalife'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EG'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#1B4838" />
        <meta name="msapplication-TileColor" content="#1B4838" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
