export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Project {
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  challenge: LocalizedString;
  solution: LocalizedString;
  role: LocalizedString;
  category: LocalizedString;
  technologies: string[];
  year?: string;
  client?: LocalizedString;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image: string;
  gallery?: string[];
  keyFeatures?: LocalizedString[];
}

export const projects: Project[] = [
  // ─── CV Projects (with full data) ───────────────────────────────────────────

  {
    slug: "carehub",
    title: { en: "CareHub", ar: "كيرهب" },
    shortDescription: {
      en: "A production-ready healthcare platform with admin dashboard and patient-facing interfaces.",
      ar: "منصة رعاية صحية جاهزة للإنتاج مع لوحة تحكم إدارية وواجهات للمرضى.",
    },
    description: {
      en: "CareHub is a comprehensive healthcare web application built with Next.js. It features a fully responsive patient-facing interface, a complete admin dashboard for managing appointments, users, and healthcare data, integrated REST APIs, and robust authentication workflows. The platform is actively maintained and continues to receive new features.",
      ar: "كيرهب هو تطبيق ويب شامل للرعاية الصحية مبني باستخدام Next.js. يتضمن واجهة استجابة كاملة للمرضى، ولوحة تحكم إدارية متكاملة لإدارة المواعيد والمستخدمين وبيانات الرعاية الصحية، مع تكامل كامل لـ REST APIs وسير عمل مصادقة قوية.",
    },
    challenge: {
      en: "Building a scalable healthcare platform that serves both patients and administrators simultaneously, with complex data flows, secure authentication, and high SEO requirements for medical content.",
      ar: "بناء منصة رعاية صحية قابلة للتوسع تخدم المرضى والمديرين في آن واحد، مع تدفقات بيانات معقدة ومصادقة آمنة ومتطلبات SEO عالية للمحتوى الطبي.",
    },
    solution: {
      en: "Leveraged Next.js server-side rendering for improved SEO and performance. Built a reusable component architecture with Redux Toolkit for centralized state management, and designed a clean separation between patient and admin interfaces.",
      ar: "استخدام Next.js للعرض من جانب الخادم لتحسين تحسين محركات البحث والأداء. بناء هندسة مكونات قابلة لإعادة الاستخدام مع Redux Toolkit لإدارة الحالة المركزية.",
    },
    role: {
      en: "Led the entire frontend implementation from architecture design to production deployment. Responsible for component library, API integration, authentication flows, and ongoing feature development.",
      ar: "قادة تنفيذ الواجهة الأمامية بالكامل من تصميم الهندسة المعمارية حتى النشر في بيئة الإنتاج.",
    },
    category: { en: "Healthcare Platform", ar: "منصة رعاية صحية" },
    technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "JavaScript", "REST APIs"],
    year: "2025",
    featured: true,
    image: "/images/projects/carehub/cover.webp",
    gallery: [
      "/images/projects/carehub/01.webp",
      "/images/projects/carehub/02.webp",
    ],
    keyFeatures: [
      { en: "Responsive patient-facing interface", ar: "واجهة استجابة للمرضى" },
      { en: "Complete admin dashboard", ar: "لوحة تحكم إدارية متكاملة" },
      { en: "REST API integration & authentication", ar: "تكامل REST API والمصادقة" },
      { en: "Server-side rendering for SEO", ar: "العرض من جانب الخادم لتحسين محركات البحث" },
      { en: "Reusable component architecture", ar: "هندسة مكونات قابلة لإعادة الاستخدام" },
    ],
  },

  {
    slug: "work-brand",
    title: { en: "Work Brand", ar: "وورك براند" },
    shortDescription: {
      en: "A scalable office management platform for private offices, virtual offices, and studio bookings.",
      ar: "منصة إدارة مكاتب قابلة للتوسع للمكاتب الخاصة والافتراضية وحجوزات الاستوديو.",
    },
    description: {
      en: "Work Brand is a comprehensive office management and booking platform designed to handle private offices, virtual offices, and studio bookings across multiple locations. The platform includes a fully featured admin dashboard built from scratch, along with seamless user-facing booking flows and complex form management.",
      ar: "وورك براند هو منصة شاملة لإدارة المكاتب والحجز مصممة للتعامل مع المكاتب الخاصة والافتراضية وحجوزات الاستوديو عبر مواقع متعددة.",
    },
    challenge: {
      en: "Designing a unified platform that elegantly handles multiple office types, dynamic booking logic across locations, and a complex admin interface — all while maintaining excellent UX and performance.",
      ar: "تصميم منصة موحدة تتعامل بأناقة مع أنواع مكاتب متعددة ومنطق حجز ديناميكي عبر المواقع وواجهة إدارة معقدة.",
    },
    solution: {
      en: "Built with React.js and Redux Toolkit for predictable state management. Designed the admin dashboard architecture from scratch with modular components. Collaborated closely with backend engineers to define API contracts and optimized data fetching for complex booking workflows.",
      ar: "مبني باستخدام React.js وRedux Toolkit لإدارة الحالة. صممت هندسة لوحة التحكم الإدارية من الصفر بمكونات معيارية.",
    },
    role: {
      en: "Led frontend development for the complete platform and admin dashboard. Designed and implemented the entire admin dashboard from scratch. Collaborated with backend engineers, built booking and office management features, and owned production delivery.",
      ar: "قادة تطوير الواجهة الأمامية للمنصة الكاملة ولوحة التحكم الإدارية. صممت ونفذت لوحة التحكم الإدارية بالكامل من الصفر.",
    },
    category: { en: "Office Management", ar: "إدارة المكاتب" },
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Axios"],
    year: "2025",
    featured: true,
    image: "/images/projects/work-brand/cover.webp",
    gallery: [
      "/images/projects/work-brand/01.webp",
      "/images/projects/work-brand/02.webp",
    ],
    keyFeatures: [
      { en: "Multi-location office booking system", ar: "نظام حجز مكاتب متعدد المواقع" },
      { en: "Admin dashboard built from scratch", ar: "لوحة تحكم إدارية مبنية من الصفر" },
      { en: "Dynamic forms & CRUD operations", ar: "نماذج ديناميكية وعمليات CRUD" },
      { en: "Authentication & authorization", ar: "المصادقة والتفويض" },
      { en: "Responsive mobile-first design", ar: "تصميم متجاوب يعطي الأولوية للجوال" },
    ],
  },

  {
    slug: "elamwal",
    title: { en: "Elamwal", ar: "الأموال" },
    shortDescription: {
      en: "A financial news website delivering daily updates on economy, banking, and stock markets.",
      ar: "موقع أخبار مالية يقدم تحديثات يومية عن الاقتصاد والبنوك وأسواق الأسهم.",
    },
    description: {
      en: "Elamwal is a financial news platform built with React, featuring a fully functional news publishing system with dynamic article management, category organization, media uploads, and a CMS dashboard for editors. The platform focuses on fast content delivery and SEO-optimized rendering.",
      ar: "الأموال هو منصة أخبار مالية مبنية بـ React، تتضمن نظام نشر أخبار وظيفي بالكامل مع إدارة مقالات ديناميكية وتنظيم الفئات ورفع الوسائط.",
    },
    challenge: {
      en: "Building a high-performance news platform with complex content management, fast rendering for SEO, and an efficient editorial workflow for managing a high volume of daily financial articles.",
      ar: "بناء منصة أخبار عالية الأداء مع إدارة محتوى معقدة وعرض سريع لتحسين محركات البحث وسير عمل تحريري فعال.",
    },
    solution: {
      en: "Implemented optimized rendering strategies for news content. Built a clean editorial CMS dashboard with dynamic article management, publishing workflows, and media handling. Integrated all business APIs with efficient data fetching patterns.",
      ar: "تطبيق استراتيجيات عرض محسّنة لمحتوى الأخبار. بناء لوحة تحكم تحريرية نظيفة مع إدارة مقالات ديناميكية وسير عمل النشر.",
    },
    role: {
      en: "Built the complete frontend for both the public news platform and the CMS dashboard. Developed dynamic article management, categories, media uploads, and publishing workflows. Responsible for ongoing feature development and production support.",
      ar: "بناء الواجهة الأمامية الكاملة لمنصة الأخبار العامة ولوحة تحكم CMS. تطوير إدارة المقالات والفئات ورفع الوسائط.",
    },
    category: { en: "News Platform", ar: "منصة إخبارية" },
    technologies: ["React.js", "JavaScript", "REST APIs", "Axios", "CSS3"],
    year: "2025",
    featured: true,
    image: "/images/projects/elamwal/cover.webp",
    gallery: [
      "/images/projects/elamwal/01.webp",
    ],
    keyFeatures: [
      { en: "Financial news publishing platform", ar: "منصة نشر أخبار مالية" },
      { en: "CMS editorial dashboard", ar: "لوحة تحكم تحريرية CMS" },
      { en: "Dynamic article & category management", ar: "إدارة ديناميكية للمقالات والفئات" },
      { en: "Media upload workflows", ar: "سير عمل رفع الوسائط" },
      { en: "SEO-optimized content rendering", ar: "عرض محتوى محسّن لمحركات البحث" },
    ],
  },

  // ─── Domain-based Projects (placeholders — update with real data) ─────────────

  {
    slug: "jasour",
    title: { en: "Jasour", ar: "جسور" },
    shortDescription: {
      en: "A modern web platform connecting people and services.",
      ar: "منصة ويب حديثة تربط الناس بالخدمات.",
    },
    description: {
      en: "Jasour is a web platform focused on seamless connectivity and service delivery. Built with a modern frontend stack, it delivers a polished and responsive user experience.",
      ar: "جسور هو منصة ويب تركز على التواصل السلس وتقديم الخدمات. مبنية بتقنيات الواجهة الأمامية الحديثة.",
    },
    challenge: {
      en: "Creating an intuitive platform that effectively connects users with the services they need while maintaining excellent performance and usability.",
      ar: "إنشاء منصة بديهية تربط المستخدمين بالخدمات التي يحتاجونها مع الحفاظ على أداء ممتاز وسهولة الاستخدام.",
    },
    solution: {
      en: "Implemented a clean, component-based frontend architecture with optimized API integration and responsive design across all devices.",
      ar: "تطبيق هندسة واجهة أمامية نظيفة قائمة على المكونات مع تكامل API محسّن وتصميم متجاوب على جميع الأجهزة.",
    },
    role: {
      en: "Frontend development, API integration, and responsive UI implementation.",
      ar: "تطوير الواجهة الأمامية وتكامل API وتطبيق واجهة مستخدم متجاوبة.",
    },
    category: { en: "Web Platform", ar: "منصة ويب" },
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    year: "2024",
    liveUrl: "https://jasour.net",
    image: "/images/projects/jasour/cover.webp",
    keyFeatures: [
      { en: "Responsive web interface", ar: "واجهة ويب متجاوبة" },
      { en: "API integration", ar: "تكامل API" },
      { en: "Modern UI/UX", ar: "واجهة مستخدم حديثة" },
    ],
  },

  {
    slug: "tamayoz",
    title: { en: "Tamayoz", ar: "تميّز" },
    shortDescription: {
      en: "An educational platform providing e-learning solutions for students and educators.",
      ar: "منصة تعليمية تقدم حلول التعلم الإلكتروني للطلاب والمعلمين.",
    },
    description: {
      en: "Tamayoz is an e-learning platform designed to deliver engaging educational content to students. The platform features course management, user authentication, and a clean learning interface.",
      ar: "تميّز هو منصة تعلم إلكتروني مصممة لتقديم محتوى تعليمي جذاب للطلاب. تتضمن إدارة الدورات ومصادقة المستخدم وواجهة تعلم نظيفة.",
    },
    challenge: {
      en: "Designing an accessible, engaging educational experience that works across devices and accommodates both students and instructors.",
      ar: "تصميم تجربة تعليمية سهلة الوصول وجذابة تعمل عبر الأجهزة وتستوعب الطلاب والمدرسين.",
    },
    solution: {
      en: "Built a responsive educational interface with intuitive navigation, content delivery optimization, and accessible design principles.",
      ar: "بناء واجهة تعليمية متجاوبة مع تنقل بديهي وتحسين تقديم المحتوى ومبادئ تصميم يسهل الوصول إليها.",
    },
    role: {
      en: "Frontend development and educational UI design.",
      ar: "تطوير الواجهة الأمامية وتصميم واجهة المستخدم التعليمية.",
    },
    category: { en: "Education Platform", ar: "منصة تعليمية" },
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    year: "2024",
    liveUrl: "https://tamayoz-edu.com",
    image: "/images/projects/tamayoz/cover.webp",
    keyFeatures: [
      { en: "Course management system", ar: "نظام إدارة الدورات" },
      { en: "Student & instructor interfaces", ar: "واجهات للطلاب والمدرسين" },
      { en: "Responsive design", ar: "تصميم متجاوب" },
    ],
  },

  {
    slug: "elmonjez",
    title: { en: "Elmonjez", ar: "المنجز" },
    shortDescription: {
      en: "A business productivity platform for task and project management.",
      ar: "منصة إنتاجية أعمال لإدارة المهام والمشاريع.",
    },
    description: {
      en: "Elmonjez is a productivity platform focused on helping businesses manage tasks, projects, and team workflows efficiently. Features a clean dashboard interface with real-time data management.",
      ar: "المنجز هو منصة إنتاجية تركز على مساعدة الشركات في إدارة المهام والمشاريع وسير عمل الفريق بكفاءة.",
    },
    challenge: {
      en: "Creating a powerful yet simple task management interface that scales for teams while keeping the UX clean and intuitive.",
      ar: "إنشاء واجهة إدارة مهام قوية وبسيطة في نفس الوقت تتسع للفرق مع الحفاظ على UX نظيفة وبديهية.",
    },
    solution: {
      en: "Implemented a modular dashboard architecture with efficient state management and optimized rendering for real-time task updates.",
      ar: "تطبيق هندسة لوحة تحكم معيارية مع إدارة حالة فعّالة وعرض محسّن لتحديثات المهام الفورية.",
    },
    role: {
      en: "Frontend development and dashboard architecture.",
      ar: "تطوير الواجهة الأمامية وهندسة لوحة التحكم.",
    },
    category: { en: "Productivity Platform", ar: "منصة إنتاجية" },
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    year: "2024",
    liveUrl: "https://elmonjez.com",
    image: "/images/projects/elmonjez/cover.webp",
    keyFeatures: [
      { en: "Task & project management", ar: "إدارة المهام والمشاريع" },
      { en: "Team workflow dashboard", ar: "لوحة تحكم سير عمل الفريق" },
      { en: "Clean admin interface", ar: "واجهة إدارية نظيفة" },
    ],
  },

  {
    slug: "speedegy",
    title: { en: "Speedegy", ar: "سبيديجي" },
    shortDescription: {
      en: "A high-performance web platform built for speed and scalability.",
      ar: "منصة ويب عالية الأداء مبنية للسرعة وقابلية التوسع.",
    },
    description: {
      en: "Speedegy is a web platform prioritizing performance and user experience. Built with modern frontend technologies with a focus on fast load times and smooth interactions.",
      ar: "سبيديجي هو منصة ويب تعطي الأولوية للأداء وتجربة المستخدم. مبنية بتقنيات واجهة أمامية حديثة مع التركيز على أوقات تحميل سريعة.",
    },
    challenge: {
      en: "Delivering a high-performance platform with excellent core web vitals and smooth user experience across all connection speeds.",
      ar: "تقديم منصة عالية الأداء مع نقاط ويب أساسية ممتازة وتجربة مستخدم سلسة عبر جميع سرعات الاتصال.",
    },
    solution: {
      en: "Optimized frontend performance through efficient bundling, lazy loading, and component-level optimizations.",
      ar: "تحسين أداء الواجهة الأمامية من خلال التجميع الفعّال والتحميل الكسول وتحسينات على مستوى المكونات.",
    },
    role: {
      en: "Frontend development and performance optimization.",
      ar: "تطوير الواجهة الأمامية وتحسين الأداء.",
    },
    category: { en: "Web Platform", ar: "منصة ويب" },
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    year: "2024",
    liveUrl: "https://speedegy.com",
    image: "/images/projects/speedegy/cover.webp",
    keyFeatures: [
      { en: "Optimized performance & Core Web Vitals", ar: "أداء محسّن ومقاييس الويب الأساسية" },
      { en: "Responsive design", ar: "تصميم متجاوب" },
      { en: "Modern frontend stack", ar: "تقنيات واجهة أمامية حديثة" },
    ],
  },

  {
    slug: "artzksa",
    title: { en: "Artzk", ar: "أرتزك" },
    shortDescription: {
      en: "A creative platform for art and design, connecting artists with their audience.",
      ar: "منصة إبداعية للفن والتصميم تربط الفنانين بجمهورهم.",
    },
    description: {
      en: "Artzk is a creative platform designed for artists and designers in Saudi Arabia. It features a visually rich interface for showcasing artwork, portfolio management, and community engagement.",
      ar: "أرتزك هو منصة إبداعية مصممة للفنانين والمصممين في المملكة العربية السعودية. يتضمن واجهة غنية بصرياً لعرض الأعمال الفنية وإدارة المحافظ.",
    },
    challenge: {
      en: "Building a visually striking platform that showcases creative work beautifully while maintaining excellent performance and accessibility.",
      ar: "بناء منصة بصرية مذهلة تعرض الأعمال الإبداعية بشكل جميل مع الحفاظ على أداء ممتاز وإمكانية وصول.",
    },
    solution: {
      en: "Designed an image-rich, performance-optimized interface with elegant galleries, smooth transitions, and an intuitive browsing experience.",
      ar: "تصميم واجهة غنية بالصور ومحسّنة للأداء مع معارض أنيقة وانتقالات سلسة وتجربة تصفح بديهية.",
    },
    role: {
      en: "Frontend development, gallery UI, and creative interface design.",
      ar: "تطوير الواجهة الأمامية وواجهة المعرض وتصميم الواجهة الإبداعية.",
    },
    category: { en: "Creative Platform", ar: "منصة إبداعية" },
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    year: "2024",
    liveUrl: "https://artzksa.com",
    image: "/images/projects/artzksa/cover.webp",
    keyFeatures: [
      { en: "Visual art showcase galleries", ar: "معارض عرض الفن البصري" },
      { en: "Artist portfolio management", ar: "إدارة محافظ الفنانين" },
      { en: "Community engagement features", ar: "ميزات تفاعل المجتمع" },
    ],
  },

  {
    slug: "truennorth",
    title: { en: "TrueNorth", ar: "ترونورث" },
    shortDescription: {
      en: "A business solutions platform focused on direction, strategy, and growth.",
      ar: "منصة حلول أعمال تركز على التوجيه والاستراتيجية والنمو.",
    },
    description: {
      en: "TrueNorth is a professional business platform delivering strategic solutions and tools. Features a clean corporate design with intuitive navigation and data-driven interfaces.",
      ar: "ترونورث هو منصة أعمال احترافية تقدم حلول وأدوات استراتيجية. يتضمن تصميماً مؤسسياً نظيفاً مع تنقل بديهي وواجهات مدفوعة بالبيانات.",
    },
    challenge: {
      en: "Delivering a professional corporate platform that communicates trust, expertise, and clarity through clean design and effective information architecture.",
      ar: "تقديم منصة مؤسسية احترافية تتواصل الثقة والخبرة والوضوح من خلال تصميم نظيف وهندسة معلومات فعّالة.",
    },
    solution: {
      en: "Built a clean, corporate-grade interface with clear information hierarchy, optimized content sections, and professional visual design.",
      ar: "بناء واجهة نظيفة على مستوى الشركات مع تسلسل هرمي واضح للمعلومات وأقسام محتوى محسّنة وتصميم بصري احترافي.",
    },
    role: {
      en: "Frontend development and corporate UI implementation.",
      ar: "تطوير الواجهة الأمامية وتطبيق واجهة مستخدم مؤسسية.",
    },
    category: { en: "Business Platform", ar: "منصة أعمال" },
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    year: "2024",
    liveUrl: "https://truennorth.com",
    image: "/images/projects/truennorth/cover.webp",
    keyFeatures: [
      { en: "Corporate design system", ar: "نظام تصميم مؤسسي" },
      { en: "Strategic content presentation", ar: "عرض المحتوى الاستراتيجي" },
      { en: "Professional interface", ar: "واجهة احترافية" },
    ],
  },

  {
    slug: "marktita",
    title: { en: "Marktita", ar: "ماركتيتا" },
    shortDescription: {
      en: "An e-commerce and marketplace platform for seamless buying and selling.",
      ar: "منصة تجارة إلكترونية وسوق للشراء والبيع بسلاسة.",
    },
    description: {
      en: "Marktita is a marketplace platform designed to connect buyers and sellers. Features product listings, search and filtering, shopping cart functionality, and a smooth checkout experience.",
      ar: "ماركتيتا هو منصة سوق مصممة لربط المشترين والبائعين. يتضمن قوائم المنتجات والبحث والتصفية وعربة التسوق وتجربة دفع سلسة.",
    },
    challenge: {
      en: "Building a scalable marketplace with complex product management, efficient search and filtering, and a smooth end-to-end purchase flow.",
      ar: "بناء سوق قابل للتوسع مع إدارة منتجات معقدة وبحث وتصفية فعّالة وسير شراء سلس من البداية إلى النهاية.",
    },
    solution: {
      en: "Implemented an efficient product listing architecture with optimized filtering, responsive product cards, and a streamlined cart and checkout flow.",
      ar: "تطبيق هندسة قوائم منتجات فعّالة مع تصفية محسّنة وبطاقات منتجات متجاوبة وسير عربة ودفع مبسط.",
    },
    role: {
      en: "Frontend development, product UI, and marketplace interface design.",
      ar: "تطوير الواجهة الأمامية وواجهة المنتج وتصميم واجهة السوق.",
    },
    category: { en: "E-Commerce", ar: "تجارة إلكترونية" },
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    year: "2024",
    liveUrl: "https://marktita.com",
    image: "/images/projects/marktita/cover.webp",
    keyFeatures: [
      { en: "Product listings & marketplace", ar: "قوائم المنتجات والسوق" },
      { en: "Search & filtering system", ar: "نظام البحث والتصفية" },
      { en: "Shopping cart & checkout", ar: "عربة التسوق والدفع" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
