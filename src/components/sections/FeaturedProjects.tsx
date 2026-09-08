import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const featured = getFeaturedProjects();

  return (
    <section className="section-spacing border-t border-border">
      <div className="container-custom">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <div>
              <span className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-3 block">
                Work
              </span>
              <h2 className="text-display-2 font-bold tracking-tight">{t("featured")}</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href={`/${locale}/projects`}
              className="group hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("all")}
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} featured />
          ))}
        </div>

        {/* Mobile CTA */}
        <Reveal delay={0.2} className="mt-10 sm:hidden">
          <Link
            href={`/${locale}/projects`}
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("all")}
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
