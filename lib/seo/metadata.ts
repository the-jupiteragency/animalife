import { Metadata } from 'next';
import { Locale } from '@/lib/i18n/config';

const baseUrl = 'https://www.myanimalife.com';

const primaryKeywords = {
  ar: [
    'طعام كلاب مصر',
    'طعام قطط مصر', 
    'أكل حيوانات أليفة',
    'أنيمالايف',
    'طعام كلاب طبيعي',
    'تغذية حيوانات أليفة',
    'طبيب بيطري مصر',
    'رعاية حيوانات أليفة مصر',
    'أفضل طعام كلاب',
    'طعام كلاب صحي',
    'حيوانات أليفة مصر',
    'علاج حيوانات أليفة',
    'طعام حيوانات فاخر',
    'تغذية علمية للحيوانات'
  ],
  en: [
    'pet food Egypt',
    'dog food Egypt',
    'cat food Egypt',
    'AnimaLife Egypt',
    'premium pet food',
    'pet nutrition Egypt',
    'veterinary Egypt',
    'pet care Egypt',
    'healthy dog food',
    'natural pet food',
    'pet treatment Egypt',
    'animal nutrition',
    'pet wellness Egypt',
    'scientific pet nutrition'
  ]
};

export function generatePageMetadata(
  page: 'home' | 'about' | 'products' | 'academy',
  locale: Locale
): Metadata {
  const isArabic = locale === 'ar';
  const keywords = primaryKeywords[locale];

  const pageData = {
    home: {
      title: isArabic 
        ? 'أنيمالايف مصر | أفضل طعام كلاب وقطط في مصر والشرق الأوسط'
        : 'AnimaLife Egypt | Premium Pet Food & Nutrition in Egypt & Middle East',
      description: isArabic
        ? 'أنيمالايف مصر - أفضل طعام كلاب وقطط في مصر والشرق الأوسط. تغذية علمية متكاملة ومتوازنة للحيوانات الأليفة مع استشارات بيطرية مجانية. اكتشف منتجاتنا المصممة خصيصاً لاحتياجات حيوانك الأليف.'
        : 'AnimaLife Egypt - Premium pet food and nutrition for dogs and cats in Egypt and Middle East. Complete and balanced scientific nutrition for pets with free veterinary consultations. Discover our products designed specifically for your pet\'s needs.',
      path: ''
    },
    about: {
      title: isArabic
        ? 'عن أنيمالايف | قصتنا في تغذية الحيوانات الأليفة في مصر'
        : 'About AnimaLife | Our Story in Pet Nutrition in Egypt',
      description: isArabic
        ? 'تعرف على قصة أنيمالايف مصر ورسالتنا في توفير أفضل تغذية علمية للحيوانات الأليفة. فريقنا من الخبراء البيطريين ملتزم بصحة وسعادة حيوانك الأليف في مصر والشرق الأوسط.'
        : 'Learn about AnimaLife Egypt\'s story and our mission to provide the best scientific nutrition for pets. Our team of veterinary experts is committed to your pet\'s health and happiness in Egypt and the Middle East.',
      path: '/about'
    },
    products: {
      title: isArabic
        ? 'منتجات أنيمالايف | طعام كلاب وقطط عالي الجودة في مصر'
        : 'AnimaLife Products | Premium Dog & Cat Food in Egypt',
      description: isArabic
        ? 'اكتشف مجموعة منتجات أنيمالايف من طعام الكلاب والقطط عالي الجودة في مصر. تغذية متكاملة ومتوازنة لجميع أحجام وأعمار الحيوانات الأليفة مع ضمان الجودة والطعم الرائع.'
        : 'Discover AnimaLife\'s range of premium dog and cat food products in Egypt. Complete and balanced nutrition for all sizes and ages of pets with guaranteed quality and great taste.',
      path: '/products'
    },
    academy: {
      title: isArabic
        ? 'أكاديمية أنيمالايف | نصائح ومقالات رعاية الحيوانات الأليفة'
        : 'AnimaLife Academy | Pet Care Tips & Articles',
      description: isArabic
        ? 'أكاديمية أنيمالايف - مصدرك الموثوق للمعرفة العلمية ونصائح رعاية الحيوانات الأليفة. مقالات متخصصة من خبراء بيطريين لضمان صحة وسعادة حيوانك الأليف في مصر.'
        : 'AnimaLife Academy - Your trusted source for scientific knowledge and pet care tips. Specialized articles from veterinary experts to ensure your pet\'s health and happiness in Egypt.',
      path: '/academy'
    }
  };

  const page_data = pageData[page];
  const canonical = `${baseUrl}${locale === 'ar' ? '/ar' : '/en'}${page_data.path}`;

  return {
    title: page_data.title,
    description: page_data.description,
    keywords: keywords.join(', '),
    alternates: {
      canonical,
      languages: {
        'ar': `${baseUrl}/ar${page_data.path}`,
        'en': `${baseUrl}/en${page_data.path}`,
      }
    },
    openGraph: {
      title: page_data.title,
      description: page_data.description,
      url: canonical,
      siteName: 'AnimaLife Egypt',
      locale: isArabic ? 'ar_EG' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/hero1.webp',
          width: 1200,
          height: 630,
          alt: page_data.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: page_data.title,
      description: page_data.description,
      images: ['/hero1.webp']
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
      }
    }
  };
}