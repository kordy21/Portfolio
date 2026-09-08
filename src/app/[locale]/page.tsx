import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { PromoBanner } from "@/components/sections/PromoBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("home_title"),
    description: t("home_desc"),
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <Skills />
      <FeaturedProjects />
      <PromoBanner />
    </>
  );
}
