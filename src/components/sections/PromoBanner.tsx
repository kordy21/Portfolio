import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MessageSquare, Terminal } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export function PromoBanner() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container-custom">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-linear-to-r from-card via-card/80 to-accent.blue/5 p-8 md:p-12 shadow-sm">
            {/* Subtle Blue ambient glow */}
            <div className="absolute -end-16 -bottom-16 w-80 h-80 rounded-full bg-accent.blue/10 blur-3xl pointer-events-none" />
            <div className="absolute start-1/4 -top-16 w-60 h-60 rounded-full bg-accent/5 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent.blue/30 bg-accent.blue/10 text-accent.blue text-xs font-mono mb-4">
                  <Sparkles size={12} />
                  <span>
                    {locale === "ar"
                      ? "جاهز للتعاون وبناء منتجات رقمية استثنائية"
                      : "Ready to engineer high-impact digital experiences"}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                  {locale === "ar"
                    ? "هل تبحث عن مهندس واجهات أمامية موثوق لمشروعك القادم؟"
                    : "Looking for a reliable frontend engineer for your next project?"}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {locale === "ar"
                    ? "أساعد الشركات وفرق العمل في تحويل المتطلبات المعقدة إلى لوحات تحكم وتطبيقات ويب تفاعلية وسريعة بأعلى معايير الجودة وتجربة المستخدم."
                    : "From concept to production: building scalable React/Next.js architectures, sleek admin dashboards, and high-performance user interfaces."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-foreground text-background hover:bg-accent.blue hover:text-white transition-all shadow-sm"
                >
                  <MessageSquare size={16} />
                  <span>{locale === "ar" ? "تواصل معي الآن" : "Let's Talk"}</span>
                </Link>
                <Link
                  href={`/${locale}/experience`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-border bg-card/60 hover:border-accent.blue/50 hover:text-accent.blue transition-all"
                >
                  <Terminal size={16} />
                  <span>{locale === "ar" ? "مسيرتي المهنية" : "View Experience"}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
