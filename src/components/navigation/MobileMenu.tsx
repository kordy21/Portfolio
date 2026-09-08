"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t("nav.openMenu")}
        className="flex md:hidden items-center justify-center w-9 h-9 text-foreground"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: locale === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: locale === "ar" ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 end-0 z-50 w-4/5 max-w-sm bg-card border-s border-border flex flex-col p-8 md:hidden"
            >
              {/* Close */}
              <div className="flex justify-end mb-12">
                <button
                  onClick={() => setOpen(false)}
                  aria-label={t("nav.closeMenu")}
                  className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => {
                  const href = `/${locale}${link.href === "/" ? "" : link.href}`;
                  const isActive = pathname === href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 + 0.1 }}
                    >
                      <Link
                        href={href}
                        className={`block py-3 text-2xl font-medium transition-colors ${
                          isActive
                            ? "text-accent"
                            : "text-foreground hover:text-accent"
                        }`}
                      >
                        {t(link.key)}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">m.abdelhamed941@gmail.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
