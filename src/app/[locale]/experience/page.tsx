import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { experiences, education } from "@/data/experience";
import { getLocalizedValue } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("experience_title") };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });

  return (
    <div className="pt-32">
      {/* ── Heading ── */}
      <section className="pb-20 border-b border-border">
        <div className="container-custom">
          <Reveal>
            <span className="text-xs font-mono text-accent uppercase tracking-widest mb-4 block">
              Career
            </span>
            <h1 className="text-display-1 font-bold tracking-tight mb-4">{t("title")}</h1>
            <p className="text-muted-foreground max-w-xl">{t("subtitle")}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-spacing border-b border-border">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute start-6 top-0 bottom-0 w-px bg-border" aria-hidden />

            <StaggerContainer className="space-y-12" stagger={0.15}>
              {experiences.map((exp) => {
                const company = getLocalizedValue(exp.company, locale);
                const role = getLocalizedValue(exp.role, locale);
                const period = getLocalizedValue(exp.period, locale);
                const description = getLocalizedValue(exp.description, locale);

                return (
                  <StaggerItem key={exp.id}>
                    <div className="relative ps-14">
                      {/* Dot with blue glow */}
                      <div className="absolute start-0 top-0 w-12 h-12 rounded-full border-2 border-accent.blue bg-background shadow-[0_0_12px_rgba(29,114,242,0.25)] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent.blue" />
                      </div>

                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                          <div>
                            <h2 className="text-lg font-semibold text-foreground">{role}</h2>
                            <p className="text-base text-accent.blue font-medium">{company}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-mono text-muted-foreground bg-muted/80 border border-border/60 px-3 py-1.5 rounded-full">
                              {period}
                            </span>
                            {exp.current && (
                              <span className="flex items-center gap-1.5 text-xs font-mono text-success bg-success/10 px-2 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                                {t("present")}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                          {description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-5">
                          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                            {t("achievements")}
                          </p>
                          <ul className="space-y-2">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="text-accent text-xs font-mono mt-0.5 shrink-0">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                {getLocalizedValue(ach, locale)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="section-spacing">
        <div className="container-custom">
          <Reveal className="mb-10">
            <h2 className="text-display-2 font-bold tracking-tight">{t("education")}</h2>
          </Reveal>
          <StaggerContainer className="space-y-4">
            {education.map((edu) => (
              <StaggerItem key={edu.id}>
                <div className="p-6 border border-border rounded-lg hover:border-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-base text-foreground">
                        {getLocalizedValue(edu.degree, locale)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {getLocalizedValue(edu.institution, locale)}
                      </p>
                    </div>
                    <div className="text-end">
                      <span className="text-xs font-mono text-muted-foreground">
                        {getLocalizedValue(edu.period, locale)}
                      </span>
                      <p className="text-xs text-accent font-mono mt-0.5">
                        {getLocalizedValue(edu.grade, locale)}
                      </p>
                    </div>
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
