import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GraduationCap, Globe, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { skillCategories, stats } from "@/data/skills";
import { education } from "@/data/experience";
import { getLocalizedValue } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("about_title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="pt-32">
      {/* ── Hero with Profile Visual ── */}
      <section className="section-spacing border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-4 block">
                  {t("subtitle")}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-display-1 font-bold tracking-tight mb-8">{t("title")}</h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("summary")}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-sm text-muted-foreground italic border-s-2 border-accent.blue ps-4">
                  {t("currentFocus")}
                </p>
              </Reveal>
            </div>

            {/* Profile Visual (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card p-3 shadow-xl">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                    <Image
                      src="/images/profile-2.jpeg"
                      alt="Mohamed Abdelhamed"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-4 start-4 end-4">
                      <p className="text-sm font-semibold text-foreground">Mohamed Abdelhamed</p>
                      <p className="text-xs text-accent.blue font-mono">Frontend Engineer • Target Digital Solution</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-spacing border-b border-border">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-3 gap-8" stagger={0.12}>
            {stats.map((stat, idx) => (
              <StaggerItem key={stat.value}>
                <div className="text-center p-4 rounded-xl border border-border/60 bg-card/40">
                  <div className={`text-4xl sm:text-5xl font-bold mb-2 ${idx === 1 ? 'text-accent.blue' : 'text-foreground'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {locale === "ar" ? stat.label.ar : stat.label.en}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section-spacing border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <h2 className="text-display-2 font-bold tracking-tight">{t("philosophy_title")}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-6 border border-border/90 rounded-xl bg-card/50 relative overflow-hidden">
                <div className="absolute top-0 end-0 w-32 h-32 bg-accent.blue/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-base text-muted-foreground leading-relaxed">{t("philosophy")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section-spacing border-b border-border">
        <div className="container-custom">
          <Reveal className="mb-12">
            <h2 className="text-display-2 font-bold tracking-tight">{t("technologies")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.06}>
                <div className="p-5 border border-border/80 rounded-xl h-full hover:border-accent.blue/40 bg-card/40 transition-colors">
                  <h3 className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span>{locale === "ar" ? cat.label.ar : cat.label.en}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent.blue/60" />
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span key={skill.name} className="tech-tag">{skill.name}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="section-spacing border-b border-border">
        <div className="container-custom">
          <Reveal className="mb-10">
            <h2 className="text-display-2 font-bold tracking-tight">{t("education_title")}</h2>
          </Reveal>
          <StaggerContainer className="space-y-6">
            {education.map((edu) => (
              <StaggerItem key={edu.id}>
                <div className="flex gap-4 p-6 border border-border/90 rounded-xl hover:border-accent.blue/40 bg-card/40 transition-colors">
                  <div className="shrink-0 w-11 h-11 rounded-lg border border-accent.blue/30 bg-accent.blue/10 flex items-center justify-center text-accent.blue">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-base text-foreground mb-0.5">
                      {getLocalizedValue(edu.degree, locale)}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {getLocalizedValue(edu.institution, locale)}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span>{getLocalizedValue(edu.period, locale)}</span>
                      <span>·</span>
                      <span className="text-accent.blue font-semibold">{getLocalizedValue(edu.grade, locale)}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="section-spacing">
        <div className="container-custom">
          <Reveal className="mb-10">
            <h2 className="text-display-2 font-bold tracking-tight">{t("certifications_title")}</h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {[
              { lang: t("arabic"), level: t("arabic_level") },
              { lang: t("english"), level: t("english_level") },
            ].map(({ lang, level }) => (
              <StaggerItem key={lang}>
                <div className="flex items-center gap-4 p-5 border border-border/80 rounded-xl bg-card/40 hover:border-accent.blue/30 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-lg border border-border flex items-center justify-center text-accent.blue">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{lang}</p>
                    <p className="text-xs text-muted-foreground font-mono">{level}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
