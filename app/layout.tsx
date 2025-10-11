import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { isRTL, defaultLocale } from "@/lib/i18n/config";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myanimalife.com"),
  title: {
    default:
      "AnimaLife Egypt | أفضل طعام كلاب وقطط في مصر - تغذية علمية للحيوانات الأليفة",
    template: "%s | AnimaLife Egypt",
  },
  description:
    "AnimaLife Egypt - أفضل طعام كلاب وقطط في مصر. تغذية علمية متكاملة ومتوازنة للحيوانات الأليفة. اكتشف منتجاتنا المصممة خصيصاً لاحتياجات حيوانك الأليف مع استشارات بيطرية مجانية.",
  keywords: [
    "animalife",
    "animal life",
    "animal care",
    "animal nutrition",
    "animal wellness",
    "animal health",
    "animal treatment",
    "animal veterinary",
    "animal pet care",
    "animal pet nutrition",
    "animal pet wellness",
    "animal pet health",
    "animal pet treatment",
    "animal pet veterinary",
    "animal pet food",
    "animal pet food egypt",
    "أنيمالايف",
    "animalife Egypt",
    "أنيمالايف مصر",
    "طعام حيوانات أليفة مصر",
    "pet food Egypt",
    "طعام كلاب مصر",
    "طعام قطط مصر",
    "dog food Egypt",
    "cat food Egypt",
    "AnimaLife Egypt",
    "أكل كلاب",
    "أكل قطط",
    "حيوانات أليفة مصر",
    "pets Egypt",
    "علاج حيوانات أليفة",
    "pet treatment Egypt",
    "تغذية حيوانات أليفة",
    "pet nutrition Egypt",
    "طبيب بيطري مصر",
    "veterinary Egypt",
    "كلاب مصر",
    "قطط مصر",
    "pet care Egypt",
    "رعاية حيوانات أليفة",
    "premium pet food Egypt",
    "طعام حيوانات فاخر",
    "alternative to petsegypt",
    "better than petsegypt",
    "pet food delivery Egypt",
    "توصيل طعام حيوانات مصر",
    "أفضل طعام للكلاب الصغيرة",
    "طعام كلاب كبيرة الحجم",
    "best small dog food Egypt",
    "large breed dog food Egypt",
    "puppy food Egypt",
    "طعام جراء مصر",
    "senior dog food Egypt",
    "طعام كلاب كبيرة السن",
    "pet food Middle East",
    "طعام حيوانات الشرق الأوسط",
    "pet nutrition Middle East",
    "pet shop Egypt",
    "محل حيوانات أليفة مصر",
  ],
  authors: [{ name: "AnimaLife Team", url: "https://www.myanimalife.com" }],
  creator: "AnimaLife",
  publisher: "AnimaLife",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Pet Care",
  classification: "Pet Nutrition and Wellness",
  openGraph: {
    title: "AnimaLife Egypt | أفضل طعام كلاب وقطط في مصر",
    description:
      "AnimaLife Egypt - أفضل طعام كلاب وقطط في مصر. تغذية علمية متكاملة ومتوازنة للحيوانات الأليفة مع استشارات بيطرية مجانية.",
    url: "https://www.myanimalife.com",
    siteName: "AnimaLife Egypt",
    images: [
      {
        url: "/hero1.webp",
        width: 1200,
        height: 630,
        alt: "AnimaLife Egypt - أفضل طعام كلاب وقطط في مصر",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      {
        url: "/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.myanimalife.com",
    languages: {
      ar: "https://www.myanimalife.com/ar",
      en: "https://www.myanimalife.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4838",
};

const organizationSchema = generateOrganizationSchema();
const websiteSchema = generateWebsiteSchema("ar");

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.myanimalife.com#localbusiness",
  name: "AnimaLife Egypt",
  alternateName: "أنيمالايف مصر",
  url: "https://www.myanimalife.com",
  logo: "https://www.myanimalife.com/logo.svg",
  description:
    "أفضل طعام كلاب وقطط في مصر - تغذية علمية متكاملة ومتوازنة للحيوانات الأليفة",
  telephone: "+20 (122) 229-4101",
  email: "Info@myanimalife.com",
  priceRange: "$$",
  servesCuisine: "Pet Food",
  serviceArea: {
    "@type": "Country",
    name: "Egypt",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "32H Mourad Street",
    addressLocality: "Giza",
    addressRegion: "Giza Governorate",
    postalCode: "12511",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+20 (122) 229-4101",
      email: "Info@myanimalife.com",
      availableLanguage: ["Arabic", "English"],
    },
  ],
  openingHours: "Mo-Su 09:00-18:00",
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "EGP",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pet Food Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dog Food - Small Breed Adults",
          category: "Pet Food",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Dog Food - Medium & Large Breed Adults",
          category: "Pet Food",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta
          name="google-site-verification"
          content="WQJ-sIfgQNCQskQMd7DNMmxOGLUGJC0rR-u4nvlR9zs"
        />
        <meta name="theme-color" content="#1B4838" />
        <meta name="msapplication-TileColor" content="#1B4838" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
