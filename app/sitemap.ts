import { MetadataRoute } from 'next'
import { AcademyPosts } from '@/app/data/academy-posts'
import { AcademyPostsAr } from '@/app/data/academy-posts-ar'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.myanimalife.com'
  const lastModified = new Date()

  // Main pages for both languages
  const mainPages: MetadataRoute.Sitemap = [
    // Root redirects to /ar by default
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Arabic pages
    {
      url: `${baseUrl}/ar`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ar/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ar/products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ar/academy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // English pages
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/academy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]

  // Academy posts in Arabic
  const academyPostsAr: MetadataRoute.Sitemap = AcademyPostsAr.map((post) => ({
    url: `${baseUrl}/ar/academy/${post.slug}`,
    lastModified: new Date(post.date || lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Academy posts in English
  const academyPostsEn: MetadataRoute.Sitemap = AcademyPosts.map((post) => ({
    url: `${baseUrl}/en/academy/${post.slug}`,
    lastModified: new Date(post.date || lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...mainPages, ...academyPostsAr, ...academyPostsEn]
}