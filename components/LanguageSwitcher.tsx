"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Locale, locales } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  scrolled: boolean;
}

export default function LanguageSwitcher({
  currentLocale,
  scrolled,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const segments = pathname.split("/");

    // Remove current locale from path
    if (locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1);
    }

    // Add new locale
    const newPath = `/${newLocale}${segments.join("/")}`;
    router.push(newPath);
  };

  return (
    <Button
      variant="icon"
      size="sm"
      onClick={switchLanguage}
      className={`text-lg font-medium border-white/20 transition-colors ${
        scrolled ? "text-white" : "text-[#BA643B] md:text-[#BA643B]"
      }`}
    >
      {currentLocale === "en" ? "AR" : "EN"}
    </Button>
  );
}
