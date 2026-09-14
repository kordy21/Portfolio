import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { stats } from "@/data/skills";

export function AboutSnippet() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Heading + Profile photo visual (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-3 block">
                {t("subtitle")}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display-1 font-bold tracking-tight text-foreground mb-6">
                {t("title")}
              </h2>
            </Reveal>

            {/* Profile Avatar Card with subtle blue ring */}
            <Reveal delay={0.2} className="mb-8">
              <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card p-3 shadow-md group">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-muted">
                  <Image
                    src="/images/profile-1.jpeg"
                    alt="Mohamed Abdelhamed Mahmoud"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-background/90 text-foreground border border-border/60">
                      Frontend Engineer
                    </span>
                    <span className="text-accent.blue bg-accent.blue/10 px-2 py-1 rounded border border-accent.blue/30 font-medium">
                      Cairo, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Stats with subtle blue accent highlight */}
            <StaggerContainer className="grid grid-cols-3 gap-4" stagger={0.1} delay={0.2}>
              {stats.map((stat, idx) => (
                <StaggerItem key={stat.value}>
                  <div className="p-3 rounded-lg border border-border/70 bg-card/60">
                    <div className={`text-2xl font-bold mb-0.5 ${idx === 1 ? 'text-accent.blue' : 'text-foreground'}`}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-snug">
                      {locale === "ar" ? stat.label.ar : stat.label.en}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Summary, Highlights & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("summary")}
              </p>
            </Reveal>

            {/* Quick engineering capability badges with blue hints */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    en: "Component Architecture & Design Systems",
                    ar: "هندسة المكونات وأنظمة التصميم",
                  },
                  {
                    en: "Scalable State Management (Redux Toolkit)",
                    ar: "إدارة حالة قابلة للتوسع (Redux)",
                  },
                  {
                    en: "Bilingual Internationalization (RTL/LTR)",
                    ar: "دعم اللغات والتوجيه (RTL/LTR)",
                  },
                  {
                    en: "Production-ready REST API Integration",
                    ar: "تكامل احترافي مع واجهات REST API",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg border border-border/70 bg-card/40 hover:border-accent.blue/40 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-accent.blue shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-foreground">
                      {locale === "ar" ? item.ar : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-5 border border-border/90 rounded-xl bg-card/60 relative overflow-hidden">
                <div className="absolute top-0 end-0 w-32 h-32 bg-accent.blue/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-2 text-accent.blue text-xs font-mono uppercase tracking-widest">
                  <Code2 size={14} />
                  <span>{t("philosophy_title")}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("philosophy")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm text-muted-foreground italic border-s-2 border-accent.blue ps-4">
                {t("currentFocus")}
              </p>
            </Reveal>

            <Reveal delay={0.3} className="pt-2">
              <Link
                href={`/${locale}/about`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent.blue transition-colors"
              >
                <span>{t("cta")}</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent.blue"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
