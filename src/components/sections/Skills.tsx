import { useTranslations, useLocale } from "next-intl";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale();

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-custom">
        <Reveal className="mb-12">
          <span className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-3 block">
            Stack
          </span>
          <h2 className="text-display-2 font-bold tracking-tight">{t("title")}</h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-lg">{t("subtitle")}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.id} delay={ci * 0.07}>
              <div className="p-5 border border-border/80 rounded-xl hover:border-accent.blue/40 bg-card/40 transition-colors duration-300 h-full">
                <h3 className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-4 flex items-center justify-between">
                  <span>{locale === "ar" ? category.label.ar : category.label.en}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent.blue/50" />
                </h3>
                <StaggerContainer className="flex flex-wrap gap-2" stagger={0.04} delay={0.1}>
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <span className="tech-tag">{skill.name}</span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
