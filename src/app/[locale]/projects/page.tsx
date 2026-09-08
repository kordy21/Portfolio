import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("projects_title") };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <div className="pt-32 section-spacing">
      <div className="container-custom">
        <Reveal className="mb-16">
          <span className="text-xs font-mono text-accent uppercase tracking-widest mb-4 block">
            Work
          </span>
          <h1 className="text-display-1 font-bold tracking-tight mb-4">{t("title")}</h1>
          <p className="text-muted-foreground text-base max-w-xl">{t("subtitle")}</p>
        </Reveal>

        <ProjectGrid />
      </div>
    </div>
  );
}
