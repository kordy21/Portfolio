export const SITE_CONFIG = {
  name: "Mohamed Abdelhamed",
  nameAr: "محمد عبدالحامد",
  title: "Frontend Engineer",
  titleAr: "مهندس واجهات أمامية",
  email: "m.abdelhamed941@gmail.com",
  phone: "+20 155 725 0005",
  location: "Cairo, Egypt",
  locationAr: "القاهرة، مصر",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  description:
    "Frontend Engineer with 1.5+ years building production-ready web applications, admin dashboards, and business platforms.",
  descriptionAr:
    "مهندس واجهات أمامية بخبرة تزيد على عام ونصف في بناء تطبيقات ويب جاهزة للإنتاج.",
} as const;

export const NAV_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/projects", key: "nav.projects" },
  { href: "/experience", key: "nav.experience" },
  { href: "/contact", key: "nav.contact" },
] as const;

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
