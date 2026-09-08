"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-semibold text-sm tracking-tight hover:text-accent.blue transition-colors"
          aria-label="Home"
        >
          {locale === "ar" ? SITE_CONFIG.nameAr : SITE_CONFIG.name}
          <span className="text-accent.blue font-bold">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const href = `/${locale}${link.href === "/" ? "" : link.href}`;
            const isActive = pathname === href || (link.href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={link.href}
                href={href}
                className={`relative px-3 py-1.5 text-sm transition-colors ${
                  isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-[2px] bg-accent.blue rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
