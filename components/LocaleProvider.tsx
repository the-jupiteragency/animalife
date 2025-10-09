"use client";

import { useEffect } from 'react';
import { Locale, isRTL } from '@/lib/i18n/config';

interface LocaleProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = isRTL(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  return <>{children}</>;
}