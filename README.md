# 🚀 Mohamed Abdelhamed — Senior Frontend Engineer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18n](https://img.shields.io/badge/i18n-Arabic%20%7C%20English-blueviolet?style=for-the-badge)](https://next-intl.dev/)

<br />

**A premium, high-performance, bilingual (Arabic / English) personal portfolio & case-study showcase built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, and next-intl.**

[View Live Demo](#-getting-started) • [Explore Projects](#-projects-showcase) • [Architecture](#%EF%B8%8F-architecture--project-structure) • [Contact](#-connect--contact)

</div>

---

## 🌟 Highlights & Key Features

- **🌐 Complete Internationalization (i18n):**
  - Full support for **Arabic (العربية)** and **English (EN)** via `next-intl`.
  - Dynamic **RTL (Right-to-Left)** and **LTR (Left-to-Right)** layout adaptation for typography, margins, navigation, and directional animations.
  - Localized route segments (`/en`, `/ar`, `/en/projects/carehub`, `/ar/projects/carehub`).

- **🌓 Dual Theme System (Dark / Light / System):**
  - Polished design tokens with CSS variables for light, dark, and system preference modes.
  - Vibrant blue secondary accents (`#1d72f2` / `#448fff`) paired with refined monochrome foundations.
  - Zero hydration flicker via `next-themes`.

- **⚡ Modern Next.js 15 App Router Architecture:**
  - Optimized Server Components for blazing-fast initial load times and SEO.
  - Selective `"use client"` hydration only where interactive animations and state are needed.
  - Zero duplicate UI code across locales.

- **📁 Scalable, Data-Driven Architecture:**
  - Add or update projects purely by editing `src/data/projects.ts`.
  - Automated dynamic case study routing (`/[locale]/projects/[slug]`).
  - Next/Previous case study navigation and dynamic filters.

- **🎭 Sophisticated Motion & Interaction Design:**
  - Accessible viewport reveals, staggered card grids, character/word reveals, and magnetic buttons.
  - Full compliance with `prefers-reduced-motion` for accessibility.

- **📱 Pixel-Perfect Responsive Design:**
  - Designed intentionally for mobile (320px+), tablets, laptops, and ultra-wide displays (1920px).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + CSS Design Tokens |
| **Internationalization** | [next-intl](https://next-intl.dev/) (RTL & LTR routing) |
| **Motion & Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Theme Management** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand SVG Primitives |
| **Typography** | Inter, Cairo, Playfair Display, JetBrains Mono |

---

## 🏗️ Architecture & Project Structure

```text
portfolio/
├── messages/                      # Translation catalogs
│   ├── ar.json                   # Arabic locale strings
│   └── en.json                   # English locale strings
├── public/
│   └── images/                   # Static assets & project media
│       ├── profile.jpg           # Developer identity visual
│       └── projects/             # Categorized project covers & galleries
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/             # Localized routes (/en, /ar)
│   │   │   ├── layout.tsx        # Root locale layout (RTL/LTR, fonts, providers)
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── about/            # About page
│   │   │   ├── contact/          # Interactive contact page
│   │   │   ├── experience/       # Career timeline & education
│   │   │   └── projects/         # Filterable projects grid
│   │   │       └── [slug]/       # Dynamic case-study detail page
│   │   ├── globals.css           # Design tokens, variables & base styles
│   │   └── page.tsx              # Root locale redirect
│   ├── components/
│   │   ├── animations/           # Reusable motion primitives (Reveal, Magnetic, etc.)
│   │   ├── layout/               # Global Navbar, Footer, PageWrappers
│   │   ├── navigation/           # ThemeToggle, LanguageSwitcher, MobileMenu
│   │   ├── projects/             # ProjectCard, ProjectGrid, Case Study blocks
│   │   ├── sections/             # Hero, AboutSnippet, Skills, Featured, PromoBanner
│   │   └── ui/                   # SocialIcons & interactive primitives
│   ├── data/                     # Single source of truth (Content Layer)
│   │   ├── experience.ts         # Career history & education
│   │   ├── projects.ts           # All 10 bilingual project entries
│   │   ├── skills.ts             # Categorized tech stack & stats
│   │   └── social.ts             # Social & contact links
│   ├── i18n/                     # next-intl routing & request configuration
│   └── lib/                      # Utilities, cn helper, constants
├── next.config.ts                # Next.js & next-intl configuration
├── tailwind.config.ts            # Design system color tokens & extensions
└── tsconfig.json                 # TypeScript strict configuration
```

---

## 💼 Projects Showcase

The portfolio includes detailed case studies extracted from real production applications and business platforms:

| Project | Category | Key Technologies |
| :--- | :--- | :--- |
| **CareHub** | Healthcare Platform & Dashboard | `Next.js` • `Redux Toolkit` • `Tailwind CSS` • `REST APIs` |
| **Work Brand** | Office Space & Studio Management | `React.js` • `Redux Toolkit` • `Dynamic Forms` • `CRUD` |
| **Elamwal** | Financial News Platform & CMS | `React.js` • `Editorial CMS` • `Media Workflows` • `REST APIs` |
| **Jasour** | Community & Service Hub | `React.js` • `Tailwind CSS` • `REST APIs` |
| **Tamayoz** | Modern EdTech & E-Learning Platform | `React.js` • `Course Management` • `CSS3` |
| **Elmonjez** | Productivity & Team Workflow Dashboard | `React.js` • `Tailwind CSS` • `REST APIs` |
| **Speedegy** | High-Performance Web Platform | `React.js` • `Core Web Vitals` • `Performance` |
| **Artzk** | Visual Art & Creative Showcase | `React.js` • `Media Gallery UI` • `CSS3` |
| **TrueNorth** | Corporate Strategy & Business Growth | `React.js` • `Corporate UI` • `Tailwind CSS` |
| **Marktita** | E-Commerce & Marketplace System | `React.js` • `Product Catalogs` • `Cart & Checkout` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `18.18.0` or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) (automatically directs to `/en` or `/ar`).

### Production Build & Verification

```bash
# Type check with TypeScript
npx tsc --noEmit

# Build production bundle
npm run build

# Preview production build locally
npm run start
```

---

## ➕ Adding a New Project (Zero UI Code Modification)

The architecture is designed to be 100% extensible. To add a new project, simply append an entry to [`src/data/projects.ts`](src/data/projects.ts):

```typescript
{
  slug: "new-platform",
  title: { en: "New Platform", ar: "منصة جديدة" },
  shortDescription: {
    en: "Brief description for project cards.",
    ar: "وصف موجز يظهر في بطاقات المشاريع."
  },
  description: {
    en: "Full in-depth project description for the case study...",
    ar: "شرح تفصيلي كامل لدراسة الحالة..."
  },
  challenge: {
    en: "The technical challenge...",
    ar: "التحدي التقني..."
  },
  solution: {
    en: "The architectural solution...",
    ar: "الحل البرمجي والهندسي..."
  },
  role: {
    en: "Your core responsibilities...",
    ar: "دورك ومسؤولياتك في المشروع..."
  },
  category: { en: "Web Platform", ar: "منصة ويب" },
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  year: "2026",
  image: "/images/projects/new-platform/cover.webp",
  gallery: [
    "/images/projects/new-platform/01.webp"
  ],
  keyFeatures: [
    { en: "High-performance interface", ar: "واجهة عالية الأداء" }
  ]
}
```

The projects directory, dynamic routing (`/projects/new-platform`), category filters, and detail case studies will update automatically!

---

## 📬 Connect & Contact

**Mohamed Abdelhamed Mahmoud**  
Frontend Engineer — Cairo, Egypt

- 📧 **Email:** [m.abdelhamed941@gmail.com](mailto:m.abdelhamed941@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/your-profile](https://linkedin.com)
- 🐙 **GitHub:** [github.com/your-username](https://github.com)
- 📱 **Phone:** `+20 155 725 0005`

---

<div align="center">

*Designed & Engineered with clean code, modern aesthetics, and attention to detail.*

</div>
# Portfolio
# Portfolio
