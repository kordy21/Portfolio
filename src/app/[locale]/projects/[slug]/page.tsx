import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug, getAllSlugs } from "@/data/projects";
import { getLocalizedValue } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const title = getLocalizedValue(project.title, locale);
  const desc = getLocalizedValue(project.shortDescription, locale);
  return {
    title: `${title} — Mohamed Abdelhamed`,
    description: desc,
    openGraph: { title, description: desc, images: [{ url: project.image }] },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "projects" });

  const title = getLocalizedValue(project.title, locale);
  const category = getLocalizedValue(project.category, locale);
  const shortDesc = getLocalizedValue(project.shortDescription, locale);
  const description = getLocalizedValue(project.description, locale);
  const challenge = getLocalizedValue(project.challenge, locale);
  const solution = getLocalizedValue(project.solution, locale);
  const role = getLocalizedValue(project.role, locale);

  // Adjacent projects for navigation
  const allSlugs = getAllSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevProject = prevSlug ? getProjectBySlug(prevSlug) : null;
  const nextProject = nextSlug ? getProjectBySlug(nextSlug) : null;

  return (
    <article>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container-custom">
          {/* Back link */}
          <Reveal className="mb-10">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              {t("backToProjects")}
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <Reveal>
                <span className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-4 block">
                  {category}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-display-1 font-bold tracking-tight mb-4">{title}</h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">{shortDesc}</p>
              </Reveal>

              {/* Action buttons */}
              <Reveal delay={0.3} className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-accent.blue hover:text-white transition-all shadow-sm"
                  >
                    <ExternalLink size={14} />
                    {t("viewLive")}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-sm font-medium hover:border-accent.blue hover:text-accent.blue hover:bg-accent.blue/5 transition-all"
                  >
                    {t("viewCode")}
                  </a>
                )}
              </Reveal>
            </div>

            {/* Right: metadata */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px border border-border rounded-lg overflow-hidden bg-border">
                {[
                  { label: t("year"), value: project.year || "—" },
                  { label: t("category"), value: category },
                  ...(project.client ? [{ label: t("client"), value: getLocalizedValue(project.client, locale) }] : []),
                ].map(({ label, value }) => (
                  <div key={label} className="bg-card p-4">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
                <div className="bg-card p-4 col-span-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    {t("technologies")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cover Image ──────────────────────────────────────────────── */}
      <Reveal className="w-full bg-muted" direction="none">
        <div className="container-custom py-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </Reveal>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto">

          {/* Overview */}
          <Reveal className="mb-16">
            <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              {t("overview")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </Reveal>

          <div className="line-separator mb-16" />

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <Reveal>
              <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                {t("challenge")}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{challenge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                {t("solution")}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
            </Reveal>
          </div>

          <div className="line-separator mb-16" />

          {/* Role */}
          <Reveal className="mb-16">
            <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              {t("role")}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{role}</p>
          </Reveal>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <>
              <div className="line-separator mb-16" />
              <Reveal className="mb-16">
                <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">
                  {t("keyFeatures")}
                </h2>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-accent/40 transition-colors">
                        <span className="text-accent mt-0.5 text-xs font-mono shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-foreground">
                          {getLocalizedValue(feature, locale)}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </Reveal>
            </>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <>
              <div className="line-separator mb-16" />
              <Reveal>
                <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">
                  {t("gallery")}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={img}
                        alt={`${title} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </>
          )}
        </div>
      </div>

      {/* ── Project Navigation ───────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 gap-4">
            {/* Prev */}
            <div>
              {prevProject && (
                <Link
                  href={`/${locale}/projects/${prevProject.slug}`}
                  className="group block p-5 border border-border rounded-lg hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                    <ArrowLeft size={12} />
                    {t("prevProject")}
                  </div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                    {getLocalizedValue(prevProject.title, locale)}
                  </p>
                </Link>
              )}
            </div>

            {/* Next */}
            <div className="flex justify-end">
              {nextProject && (
                <Link
                  href={`/${locale}/projects/${nextProject.slug}`}
                  className="group block p-5 border border-border rounded-lg hover:border-accent/40 transition-colors text-end"
                >
                  <div className="flex items-center justify-end gap-2 text-xs font-mono text-muted-foreground mb-2">
                    {t("nextProject")}
                    <ArrowRight size={12} />
                  </div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                    {getLocalizedValue(nextProject.title, locale)}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
