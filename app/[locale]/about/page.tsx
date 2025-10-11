import { AboutUsPage } from "@/components/about/about-us-page";

import { Locale } from "@/lib/i18n/config";
import { generatePageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  return generatePageMetadata('about', locale);
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main className="min-h-screen">
      <AboutUsPage locale={locale} />
    </main>
  );
}
