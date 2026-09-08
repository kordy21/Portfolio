import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href={`/${locale}`}
              className="font-semibold text-base hover:text-accent transition-colors"
            >
              {locale === "ar" ? SITE_CONFIG.nameAr : SITE_CONFIG.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-[240px]">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href === "/" ? "" : link.href}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="line-separator" />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {year} {locale === "ar" ? SITE_CONFIG.nameAr : SITE_CONFIG.name}.{" "}
            {t("footer.rights")}
          </span>
          <span>{t("footer.madeWith")} React & Next.js</span>
        </div>
      </div>
    </footer>
  );
}
