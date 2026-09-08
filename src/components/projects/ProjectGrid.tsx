"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getLocalizedValue } from "@/lib/utils";

const FILTERS = [
  { key: "all", match: null },
  { key: "react", match: "React" },
  { key: "nextjs", match: "Next.js" },
  { key: "healthcare", match: "Healthcare" },
  { key: "ecommerce", match: "E-Commerce" },
  { key: "education", match: "Education" },
  { key: "business", match: "Business" },
] as const;

export function ProjectGrid() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    const filter = FILTERS.find((f) => f.key === active);
    if (!filter || !filter.match) return projects;
    return projects.filter(
      (p) =>
        p.technologies.some((tech) =>
          tech.toLowerCase().includes(filter.match!.toLowerCase())
        ) ||
        getLocalizedValue(p.category, locale)
          .toLowerCase()
          .includes(filter.match!.toLowerCase())
    );
  }, [active, locale]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActive(filter.key)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
              active === filter.key
                ? "border-accent.blue text-accent.blue bg-accent.blue/10 shadow-xs"
                : "border-border/80 text-muted-foreground hover:border-accent.blue/40 hover:text-foreground"
            }`}
          >
            {t(`filters.${filter.key}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">{t("noResults")}</p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project, i) => (
            <motion.div key={project.slug} layout>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
