"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { type Project } from "@/data/projects";
import { getLocalizedValue } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations("projects");

  const title = getLocalizedValue(project.title, locale);
  const shortDesc = getLocalizedValue(project.shortDescription, locale);
  const category = getLocalizedValue(project.category, locale);
  const href = `/${locale}/projects/${project.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={href} className="group block">
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-lg bg-muted mb-4 ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-expo-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 dark:group-hover:bg-foreground/5 transition-colors duration-300" />

          {/* Arrow */}
          <div className="absolute top-4 end-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <div className="w-9 h-9 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center shadow-md border border-border group-hover:border-accent.blue/50">
              <ArrowUpRight size={16} className="text-foreground group-hover:text-accent.blue transition-colors" />
            </div>
          </div>

          {/* Year badge */}
          {project.year && (
            <div className="absolute bottom-3 start-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-[10px] font-mono text-muted-foreground border border-border/40">
              {project.year}
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-base text-foreground group-hover:text-accent.blue transition-colors duration-200">
              {title}
            </h3>
            <span className="text-xs text-muted-foreground font-mono shrink-0 mt-0.5">
              {category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{shortDesc}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-tag text-[11px] py-0.5">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-tag text-[11px] py-0.5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
