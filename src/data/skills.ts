export interface SkillCategory {
  id: string;
  label: { en: string; ar: string };
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "expert" | "proficient" | "familiar";
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: { en: "Frontend", ar: "الواجهة الأمامية" },
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "TypeScript", level: "proficient" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3", level: "expert" },
    ],
  },
  {
    id: "styling",
    label: { en: "Styling", ar: "التصميم" },
    skills: [
      { name: "Tailwind CSS", level: "expert" },
      { name: "Bootstrap", level: "proficient" },
      { name: "shadcn/ui", level: "proficient" },
    ],
  },
  {
    id: "state",
    label: { en: "State Management", ar: "إدارة الحالة" },
    skills: [
      { name: "Redux Toolkit", level: "expert" },
      { name: "Context API", level: "expert" },
    ],
  },
  {
    id: "apis",
    label: { en: "APIs & Integration", ar: "الواجهات والتكامل" },
    skills: [
      { name: "RESTful APIs", level: "expert" },
      { name: "Axios", level: "expert" },
      { name: "Authentication", level: "proficient" },
      { name: "CRUD Operations", level: "expert" },
    ],
  },
  {
    id: "tools",
    label: { en: "Tools & Platforms", ar: "الأدوات والمنصات" },
    skills: [
      { name: "GitHub", level: "expert" },
      { name: "Figma", level: "proficient" },
      { name: "Postman", level: "proficient" },
      { name: "Apidog", level: "proficient" },
    ],
  },
  {
    id: "specialties",
    label: { en: "Specialties", ar: "التخصصات" },
    skills: [
      { name: "Admin Dashboards", level: "expert" },
      { name: "Responsive Design", level: "expert" },
      { name: "Component Architecture", level: "expert" },
    ],
  },
];

export const stats = [
  { value: "1.5+", label: { en: "Years Experience", ar: "سنوات خبرة" } },
  { value: "10+", label: { en: "Projects Delivered", ar: "مشروع مُنجز" } },
  { value: "3+", label: { en: "Production Apps", ar: "تطبيق في الإنتاج" } },
];
