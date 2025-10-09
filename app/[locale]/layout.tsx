import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LocaleProvider } from '@/components/LocaleProvider';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale}>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </LocaleProvider>
  );
}