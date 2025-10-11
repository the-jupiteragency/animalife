import { Locale } from '@/lib/i18n/config';

const baseUrl = 'https://www.myanimalife.com';

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    "name": "AnimaLife Egypt",
    "alternateName": "أنيمالايف مصر",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.svg`,
    "description": "Premium pet food and nutrition company in Egypt and Middle East",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "32H Mourad Street",
      "addressLocality": "Giza",
      "addressRegion": "Giza Governorate",
      "postalCode": "12511",
      "addressCountry": "EG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+20 (122) 229-4101",
      "email": "Info@myanimalife.com",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/animalife.egypt",
      "https://www.instagram.com/animalife.egypt"
    ]
  };
}

export function generateWebsiteSchema(locale: Locale) {
  const isArabic = locale === 'ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    "url": baseUrl,
    "name": "AnimaLife Egypt",
    "description": isArabic 
      ? "أفضل طعام كلاب وقطط في مصر - تغذية علمية متكاملة ومتوازنة للحيوانات الأليفة"
      : "Premium pet food and nutrition for dogs and cats in Egypt and Middle East",
    "publisher": {
      "@id": `${baseUrl}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": [
      {
        "@type": "Language",
        "name": "Arabic",
        "alternateName": "ar"
      },
      {
        "@type": "Language", 
        "name": "English",
        "alternateName": "en"
      }
    ]
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  locale: Locale
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateProductSchema(
  name: string,
  description: string,
  image: string,
  price?: string,
  locale: Locale = 'ar'
) {
  const isArabic = locale === 'ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `${baseUrl}${image}`,
    "brand": {
      "@type": "Brand",
      "name": "AnimaLife"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "AnimaLife Egypt"
    },
    "category": isArabic ? "طعام حيوانات أليفة" : "Pet Food",
    "offers": price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EGP",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@id": `${baseUrl}#organization`
      }
    } : undefined
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  locale: Locale
) {
  const isArabic = locale === 'ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${baseUrl}${image}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "AnimaLife Egypt",
      "url": baseUrl
    },
    "publisher": {
      "@id": `${baseUrl}#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/${locale}/academy`
    },
    "inLanguage": isArabic ? "ar-EG" : "en-US"
  };
}