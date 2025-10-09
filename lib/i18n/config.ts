export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeNames = {
  en: 'English',
  ar: 'العربية'
} as const;

export const rtlLocales = ['ar'] as const;
export const isRTL = (locale: Locale) => rtlLocales.includes(locale as any);