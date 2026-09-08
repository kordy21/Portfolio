"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("lang");
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    // Replace the current locale segment in the URL
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <motion.button
      onClick={handleSwitch}
      aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
      whileTap={{ scale: 0.95 }}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center border border-border hover:border-accent hover:text-accent text-muted-foreground text-xs font-medium font-mono transition-colors duration-200"
    >
      {t("switch").slice(0, 2)}
    </motion.button>
  );
}
