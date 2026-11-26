import { LocalizedString } from "./projects";

export interface Achievement {
  text: LocalizedString;
}

export interface Experience {
  id: string;
  company: LocalizedString;
  role: LocalizedString;
  period: LocalizedString;
  periodStart: string;
  periodEnd?: string;
  description: LocalizedString;
  technologies: string[];
  achievements: LocalizedString[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "target-digital",
    company: { en: "Target Digital Solution", ar: "تارجت ديجيتال سوليوشن" },
    role: { en: "Frontend Engineer", ar: "مهندس واجهات أمامية" },
    period: { en: "Feb 2025 – Present", ar: "فبراير 2025 – الآن" },
    periodStart: "2025-02",
    current: true,
    description: {
      en: "Serving as the primary frontend engineer across multiple production projects. Owning frontend implementation, component architecture, and API integration across multiple company products.",
      ar: "العمل كمهندس الواجهة الأمامية الرئيسي عبر مشاريع إنتاج متعددة. امتلاك تنفيذ الواجهة الأمامية وهندسة المكونات وتكامل API عبر منتجات الشركة المتعددة.",
    },
    technologies: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript", "REST APIs"],
    achievements: [
      {
        en: "Served as the primary frontend engineer across multiple production projects",
        ar: "عمل كمهندس الواجهة الأمامية الرئيسي عبر مشاريع إنتاج متعددة",
      },
      {
        en: "Owned frontend implementation, component architecture, and API integration",
        ar: "امتلاك تنفيذ الواجهة الأمامية وهندسة المكونات وتكامل API",
      },
      {
        en: "Collaborated directly with backend developers to define API requirements",
        ar: "التعاون المباشر مع مطوري الواجهة الخلفية لتحديد متطلبات API",
      },
      {
        en: "Built reusable component libraries and scalable Redux state management",
        ar: "بناء مكتبات مكونات قابلة لإعادة الاستخدام وإدارة حالة Redux قابلة للتوسع",
      },
      {
        en: "Onboarded and mentored a newly hired frontend developer",
        ar: "تأهيل وإرشاد مطور واجهة أمامية تم تعيينه حديثاً",
      },
    ],
  },
  {
    id: "fassla",
    company: { en: "Fassla", ar: "فاصلة" },
    role: { en: "WordPress Developer", ar: "مطور ووردبريس" },
    period: { en: "Jul 2024 – Feb 2025", ar: "يوليو 2024 – فبراير 2025" },
    periodStart: "2024-07",
    periodEnd: "2025-02",
    description: {
      en: "Built and maintained custom WordPress themes, plugins and responsive websites for diverse clients, focused on performance and user-friendly design.",
      ar: "بناء وصيانة قوالب وإضافات ووردبريس مخصصة ومواقع متجاوبة لعملاء متنوعين، مع التركيز على الأداء وتصميمات سهلة الاستخدام.",
    },
    technologies: ["WordPress", "JavaScript", "ACF", "WooCommerce", "Dokan", "WPForms", "Tutor LMS"],
    achievements: [
      {
        en: "Built and maintained custom themes, plugins, and responsive websites",
        ar: "بناء وصيانة قوالب وإضافات مخصصة ومواقع متجاوبة",
      },
      {
        en: "Worked with ACF, WooCommerce, Dokan, WPForms and Tutor LMS",
        ar: "العمل مع ACF و WooCommerce و Dokan و WPForms و Tutor LMS",
      },
      {
        en: "Focused on performance optimization and delivering user-friendly designs",
        ar: "التركيز على تحسين الأداء وتقديم تصميمات سهلة الاستخدام",
      },
    ],
  },
];

export interface Education {
  id: string;
  institution: LocalizedString;
  degree: LocalizedString;
  field: LocalizedString;
  period: LocalizedString;
  grade: LocalizedString;
}

export const education: Education[] = [
  {
    id: "modern-academy",
    institution: {
      en: "Modern Academy for Computer Science and Management Technology",
      ar: "الأكاديمية الحديثة للعلوم الحاسوبية وتكنولوجيا الإدارة",
    },
    degree: { en: "Bachelor of Computer Science", ar: "بكالوريوس علوم الحاسب" },
    field: { en: "Computer Science", ar: "علوم الحاسب" },
    period: { en: "2017 – 2021", ar: "2017 – 2021" },
    grade: { en: "Very Good", ar: "جيد جداً" },
  },
];
