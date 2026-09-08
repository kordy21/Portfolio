"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, ChevronDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  const name = locale === "ar" ? SITE_CONFIG.nameAr : SITE_CONFIG.name;
  const title = locale === "ar" ? SITE_CONFIG.titleAr : SITE_CONFIG.title;

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      {/* Primary Accent blur */}
      <div
        className="absolute top-1/4 start-1/4 w-96 h-96 rounded-full opacity-[0.06] dark:opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: "hsl(var(--accent))" }}
        aria-hidden
      />

      {/* Subtle Blue Secondary Accent blur */}
      <div
        className="absolute top-1/3 end-1/6 w-[420px] h-[420px] rounded-full opacity-[0.08] dark:opacity-[0.11] blur-3xl pointer-events-none"
        style={{ background: "hsl(var(--accent-blue))" }}
        aria-hidden
      />

      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7">
            {/* Availability badge with blue accent glow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-sm text-xs text-muted-foreground font-mono shadow-xs hover:border-accent.blue/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
              <span>{t("available")}</span>
              <span className="text-border">|</span>
              <span className="text-accent.blue flex items-center gap-1 font-sans">
                <Sparkles size={12} className="text-accent.blue" />
                Frontend Architecture
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-3">
              <motion.p
                initial={shouldReduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="text-base text-muted-foreground font-medium"
              >
                {t("greeting")}
              </motion.p>
            </div>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={shouldReduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
                className="text-hero font-bold tracking-tight leading-[1.05] text-foreground"
                style={{ fontFamily: locale === "ar" ? "var(--font-cairo)" : undefined }}
              >
                {name}
                <span className="text-accent.blue">.</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={shouldReduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
                className="text-display-2 font-medium text-muted-foreground"
              >
                {title}
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {t("tagline")}
            </motion.p>

            {/* CTAs with refined blue subtle hover states */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <MagneticButton>
                <Link
                  href={`/${locale}/projects`}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-accent.blue hover:text-white shadow-sm transition-all duration-200"
                >
                  {t("cta_projects")}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/40 backdrop-blur-xs rounded-lg text-sm font-medium text-foreground hover:border-accent.blue/50 hover:text-accent.blue hover:bg-accent.blue/5 transition-all duration-200"
                >
                  {t("cta_contact")}
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {[
                { href: SITE_CONFIG.github, icon: GithubIcon, label: "GitHub" },
                { href: SITE_CONFIG.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: `mailto:${SITE_CONFIG.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border/80 flex items-center justify-center text-muted-foreground hover:text-accent.blue hover:border-accent.blue/50 hover:bg-accent.blue/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}

              <span className="text-xs text-muted-foreground font-mono ms-2 px-2.5 py-1 rounded-md bg-muted/60 border border-border/60">
                {locale === "ar" ? SITE_CONFIG.locationAr : SITE_CONFIG.location}
              </span>
            </motion.div>
          </div>

          {/* Hero Featured Visual Preview Card (Right 5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Subtle Blue Glow under Card */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-accent.blue/20 via-accent/15 to-accent.blue/20 blur-xl opacity-60" />

              <div className="relative rounded-2xl border border-border/80 bg-card/95 shadow-xl backdrop-blur-md overflow-hidden">
                {/* Header Window Bar */}
                <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent.blue animate-ping" />
                    featured_work.tsx
                  </span>
                  <span className="text-[11px] text-accent.blue font-mono font-medium">CareHub</span>
                </div>

                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted group">
                  <Image
                    src="/images/projects/carehub/cover.webp"
                    alt="CareHub Production Preview"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-foreground">CareHub Production App</p>
                      <p className="text-[11px] text-muted-foreground font-mono">Next.js • Redux Toolkit • Tailwind</p>
                    </div>
                    <Link
                      href={`/${locale}/projects/carehub`}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-foreground/90 text-background hover:bg-accent.blue hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>{t("cta_projects")}</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Mini Stats Footer */}
                <div className="p-4 grid grid-cols-3 gap-2 text-center bg-card">
                  <div className="p-2 rounded-lg bg-muted/40 border border-border/60">
                    <p className="text-xs font-bold text-foreground">1.5+ Yrs</p>
                    <p className="text-[10px] text-muted-foreground">{locale === "ar" ? "خبرة" : "Experience"}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/40 border border-border/60">
                    <p className="text-xs font-bold text-accent.blue">10+ Apps</p>
                    <p className="text-[10px] text-muted-foreground">{locale === "ar" ? "مشاريع" : "Delivered"}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/40 border border-border/60">
                    <p className="text-xs font-bold text-emerald-500">100%</p>
                    <p className="text-[10px] text-muted-foreground">{locale === "ar" ? "إنتاج" : "Production"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-[11px] text-muted-foreground font-mono tracking-widest">
          {t("scroll")}
        </span>
        <ChevronDown size={14} className="text-accent.blue animate-[scrollBounce_1.5s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}
