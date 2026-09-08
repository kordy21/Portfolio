"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Reveal } from "@/components/animations/Reveal";
import { SITE_CONFIG } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Min 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    // Mock submission — plug in EmailJS / Resend / Formspree here
    await new Promise((r) => setTimeout(r, 1500));
    // Simulate success (change to "error" to test error state)
    setStatus("success");
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-transparent border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:ring-1 ${
      errors[field]
        ? "border-destructive focus:ring-destructive/30"
        : "border-border/80 focus:border-accent.blue focus:ring-accent.blue/20"
    }`;

  return (
    <div className="pt-32 section-spacing">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Info ── */}
          <div>
            <Reveal>
              <span className="text-xs font-mono text-accent.blue uppercase tracking-widest mb-4 block">
                Contact
              </span>
              <h1 className="text-display-1 font-bold tracking-tight mb-4">{t("title")}</h1>
              <p className="text-muted-foreground leading-relaxed mb-10">{t("subtitle")}</p>
            </Reveal>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: t("location"),
                  value: locale === "ar" ? SITE_CONFIG.locationAr : SITE_CONFIG.location,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: SITE_CONFIG.email,
                  href: `mailto:${SITE_CONFIG.email}`,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <Reveal key={label}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted-foreground">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <div className="flex items-center gap-3 pt-2">
                  {[
                    { href: SITE_CONFIG.github, icon: GithubIcon, label: "GitHub" },
                    { href: SITE_CONFIG.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="p-4 border border-border rounded-lg bg-muted/30">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    {t("availability")}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <p className="text-sm font-medium text-foreground">{t("available_text")}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{t("response_time")}</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <Reveal delay={0.1}>
            <div className="p-6 md:p-8 border border-border rounded-xl bg-card">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-success" />
                    </div>
                    <h2 className="text-xl font-semibold">{t("success_title")}</h2>
                    <p className="text-sm text-muted-foreground">{t("success_body")}</p>
                    <button
                      onClick={() => { setForm(INITIAL); setStatus("idle"); }}
                      className="mt-4 text-sm text-accent hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                          {t("name")}
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder={t("name_placeholder")}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass("name")}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                          {t("email")}
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder={t("email_placeholder")}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass("email")}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                        {t("subject")}
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder={t("subject_placeholder")}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass("subject")}
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                        {t("message")}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder={t("message_placeholder")}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass("message")} resize-none`}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>

                    {/* Error state */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-sm text-destructive">
                        <AlertCircle size={14} />
                        {t("error_body")}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 px-6 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-accent.blue hover:text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          {t("sending")}
                        </span>
                      ) : t("send")}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
