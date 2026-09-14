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
    slug: "sabortak",
    title: { en: "Sabortak", ar: "سبورتك" },
    shortDescription: {
      en: "A modern, feature-rich educational marketplace and e-learning platform.",
      ar: "سوق تعليمي حديث ومنصة تعلم إلكتروني مليئة بالميزات.",
    },
    description: {
      en: "Sabortak is a centralized hub connecting students with educators. It features an e-commerce platform for purchasing lesson access codes, teacher discovery, community engagement, and a robust Admin/Teacher dashboard for managing the entire marketplace.",
      ar: "سبورتك هي منصة تعليمية متكاملة وسوق إلكتروني يربط الطلاب بالمعلمين. تتضمن منصة تجارة إلكترونية لشراء رموز الوصول للدروس، واكتشاف المعلمين، وتفاعل المجتمع، ولوحة تحكم قوية للإدارة والمعلمين لإدارة السوق بأكمله.",
    },
    challenge: {
      en: "Developing a scalable, dual-purpose platform requiring a high-performance public marketplace with a seamless shopping experience and a highly secure, data-intensive administrative dashboard.",
      ar: "تطوير منصة مزدوجة الغرض قابلة للتوسع تتطلب سوقًا عامًا عالي الأداء مع تجربة تسوق سلسة ولوحة تحكم إدارية آمنة للغاية ومكثفة البيانات.",
    },
    solution: {
      en: "Leveraged Next.js (React 19) and Tailwind CSS for the SEO-optimized public site, and a React architecture with Bootstrap/SCSS for the dashboard. Integrated Redux Toolkit, complex data visualizations (Chart.js, ApexCharts), and rich content editors.",
      ar: "الاستفادة من Next.js (React 19) و Tailwind CSS للموقع العام المحسن لمحركات البحث، وهندسة React مع Bootstrap/SCSS للوحة التحكم. دمج Redux Toolkit وتصورات البيانات المعقدة ومحرري المحتوى الغني.",
    },
    role: {
      en: "Developed the frontend architecture and implementation for both the public e-learning marketplace and the comprehensive administrative/teacher dashboard.",
      ar: "تطوير هندسة الواجهة الأمامية والتنفيذ لكل من سوق التعلم الإلكتروني العام ولوحة التحكم الإدارية/للمعلمين الشاملة.",
    },
    category: { en: "Educational Marketplace", ar: "سوق تعليمي" },
    technologies: ["Next.js", "React 19", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "Chart.js", "Axios"],
    year: "2026",
    featured: true,
    image: "/images/projects/sabortak/cover.webp",
    gallery: [
      "/images/projects/sabortak/01.webp",
      "/images/projects/sabortak/02.webp",
    ],
    liveUrl: "https://www.sabortk.com/ar",
    keyFeatures: [
      { en: "Student & Teacher Portals with E-Commerce", ar: "بوابات للطلاب والمعلمين مع التجارة الإلكترونية" },
      { en: "Comprehensive Admin & Teacher Dashboard", ar: "لوحة تحكم إدارية ومعلمين شاملة" },
      { en: "Multi-language support (i18n)", ar: "دعم لغات متعددة" },
      { en: "Advanced Data Visualization & Analytics", ar: "تصور بيانات وتحليلات متقدمة" },
      { en: "Rich Content Editing & Interactive Data Tables", ar: "تحرير محتوى غني وجداول بيانات تفاعلية" },
    ],
  },

  {
    slug: "carehub",
    title: { en: "CareHub", ar: "كيرهب" },
    shortDescription: {
      en: "A comprehensive healthcare and medical services platform with an advanced admin dashboard.",
      ar: "منصة رعاية صحية وخدمات طبية شاملة مع لوحة تحكم إدارية متقدمة.",
    },
    description: {
      en: "CareHub is a modern healthcare platform connecting patients with medical professionals. It features multilingual support, advanced search and filtering for doctors, and an intuitive UI. The system includes a highly customized enterprise dashboard for managing medical staff, patient requests, CRM, and content management.",
      ar: "كيرهب هو منصة رعاية صحية حديثة تربط المرضى بالمتخصصين الطبيين. يتميز بدعم لغات متعددة، وبحث متقدم وتصفية للأطباء، وواجهة مستخدم بديهية. يتضمن النظام لوحة تحكم مؤسسية مخصصة لإدارة الكادر الطبي، طلبات المرضى، إدارة علاقات العملاء، وإدارة المحتوى.",
    },
    challenge: {
      en: "Building a scalable, multi-language healthcare platform with complex data management requirements, including a dedicated CRM for doctors and patients, and robust file management for medical documents.",
      ar: "بناء منصة رعاية صحية قابلة للتوسع متعددة اللغات مع متطلبات إدارة بيانات معقدة، بما في ذلك نظام CRM مخصص للأطباء والمرضى، وإدارة ملفات قوية للمستندات الطبية.",
    },
    solution: {
      en: "Leveraged Next.js (React 19) for the patient-facing site for SEO and performance, and a React (CRA) architecture for the dashboard. Integrated Redux Toolkit, React Query, and advanced charting tools (ApexCharts, Echarts) for analytics.",
      ar: "الاستفادة من Next.js (React 19) لموقع المرضى لتحسين محركات البحث والأداء، وهندسة React للوحة التحكم. دمج Redux Toolkit و React Query وأدوات رسم بياني متقدمة للتحليلات.",
    },
    role: {
      en: "Led frontend implementation for both the public-facing platform and the highly customized enterprise administrative dashboard.",
      ar: "قادة تنفيذ الواجهة الأمامية لكل من المنصة العامة ولوحة التحكم الإدارية المؤسسية المخصصة للغاية.",
    },
    category: { en: "Healthcare Platform", ar: "منصة رعاية صحية" },
    technologies: ["Next.js", "React 19", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Framer Motion"],
    year: "2026",
    featured: true,
    image: "/images/projects/carehub/cover.webp",
    gallery: [
      "/images/projects/carehub/01.webp",
      "/images/projects/carehub/02.webp",
    ],
    liveUrl: "https://carehub.eg/ar",
    keyFeatures: [
      { en: "Multilingual Support (i18n)", ar: "دعم لغات متعددة" },
      { en: "Healthcare CRM & Management Dashboard", ar: "لوحة تحكم لإدارة الرعاية الصحية و CRM" },
      { en: "Advanced Search & Filtering for Services", ar: "بحث متقدم وتصفية للخدمات" },
      { en: "Interactive File Management (Drag & Drop)", ar: "إدارة ملفات تفاعلية (سحب وإفلات)" },
      { en: "Deep Data Analytics (ApexCharts, Echarts)", ar: "تحليلات بيانات عميقة" },
    ],
  },

  {
    slug: "work-brand",
    title: { en: "WorkBrand", ar: "وورك براند" },
    shortDescription: {
      en: "An expansive business ecosystem integrating consulting, agency services, and a comprehensive ERP dashboard.",
      ar: "نظام أعمال متكامل يجمع بين الاستشارات وخدمات الوكالة ولوحة تحكم شاملة لإدارة موارد المؤسسات.",
    },
    description: {
      en: "WorkBrand is a multi-faceted business ecosystem with three distinct client portals: Website, Consulting, and Agency. It features detailed service/event pages, vendor integration, and a unified enterprise resource planning (ERP) dashboard handling high volumes of data, interactive team workflows, and CRM functionalities.",
      ar: "وورك براند هو نظام أعمال متعدد الأوجه يضم ثلاث بوابات متميزة للعملاء: موقع الويب، والاستشارات، والوكالة. يتميز بصفحات خدمات/أحداث مفصلة، وتكامل الموردين، ولوحة تحكم موحدة لإدارة موارد المؤسسات تتعامل مع كميات كبيرة من البيانات، وسير عمل الفريق، ووظائف إدارة علاقات العملاء.",
    },
    challenge: {
      en: "Developing a unified multi-portal architecture that maintains consistent brand identity while serving different business functions, coupled with a central operational ERP dashboard for complex internal workflows.",
      ar: "تطوير هندسة متعددة البوابات موحدة تحافظ على هوية العلامة التجارية المتسقة أثناء خدمة وظائف الأعمال المختلفة، إلى جانب لوحة تحكم ERP مركزية للعمليات الداخلية المعقدة.",
    },
    solution: {
      en: "Created distinct React (CRA) web applications dynamically routed. Utilized Tailwind CSS for a unified design system. Built an advanced admin hub with interactive Kanban boards, dynamic reporting, and e-commerce vendor controls.",
      ar: "إنشاء تطبيقات ويب React متميزة يتم توجيهها ديناميكيًا. استخدام Tailwind CSS لنظام تصميم موحد. بناء مركز إداري متقدم مع لوحات كانبان تفاعلية وتقارير ديناميكية وعناصر تحكم للتجارة الإلكترونية.",
    },
    role: {
      en: "Frontend Developer responsible for the multi-portal client ecosystems and the central operational dashboard unifying data across all branches.",
      ar: "مطور واجهة أمامية مسؤول عن بوابات العملاء المتعددة ولوحة التحكم التشغيلية المركزية التي توحد البيانات عبر جميع الفروع.",
    },
    category: { en: "Business Ecosystem & ERP", ar: "نظام أعمال وإدارة موارد المؤسسات" },
    technologies: ["React 19", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Framer Motion", "React Dropzone"],
    year: "2025",
    featured: true,
    image: "/images/projects/work-brand/cover.webp",
    gallery: [
      "/images/projects/work-brand/01.webp",
      "/images/projects/work-brand/02.webp",
    ],
    liveUrl: "https://www.workbrand.org/",
    keyFeatures: [
      { en: "Multi-Portal Architecture (Consulting & Agency)", ar: "بنية متعددة البوابات (استشارات ووكالة)" },
      { en: "Unified Ecosystem Management Dashboard", ar: "لوحة تحكم موحدة لإدارة النظام البيئي" },
      { en: "Interactive Workflows (Kanban & Calendars)", ar: "سير عمل تفاعلي (كانبان وتقويمات)" },
      { en: "E-Commerce & Vendor Integration", ar: "التجارة الإلكترونية وتكامل الموردين" },
      { en: "Dynamic Reporting & Advanced CRM", ar: "تقارير ديناميكية وإدارة متقدمة لعلاقات العملاء" },
    ],
  },

  {
    slug: "elamwal",
    title: { en: "Elamwal", ar: "الأموال" },
    shortDescription: {
      en: "A dynamic financial and business services portal with a robust CRM and analytics backend.",
      ar: "بوابة خدمات مالية وتجارية ديناميكية مع نظام CRM قوي وخلفية تحليلات.",
    },
    description: {
      en: "Elamwal is a user-centric financial services portal showcasing business solutions and consulting packages. It features a modern, interactive UI, JWT-based authentication, and a robust administrative dashboard tailored for high-level CRM, financial analytics, and comprehensive content management.",
      ar: "الأموال هي بوابة خدمات مالية تركز على المستخدم تعرض حلول الأعمال وباقات الاستشارات. تتميز بواجهة مستخدم تفاعلية حديثة، ومصادقة قائمة على JWT، ولوحة تحكم إدارية قوية مصممة لإدارة علاقات العملاء عالية المستوى، والتحليلات المالية، وإدارة المحتوى الشاملة.",
    },
    challenge: {
      en: "Creating a professional, highly interactive financial portal that builds trust, while engineering a complex backend dashboard capable of real-time financial analytics and robust project management.",
      ar: "إنشاء بوابة مالية احترافية وتفاعلية للغاية تبني الثقة، مع تصميم لوحة تحكم خلفية معقدة قادرة على التحليلات المالية في الوقت الفعلي وإدارة المشاريع القوية.",
    },
    solution: {
      en: "Built a React 19 application with Tailwind CSS and DaisyUI for a polished UI. The backend portal integrates advanced charting (Recharts, ApexCharts) for financial metrics, and comprehensive CRM tools for client and project management.",
      ar: "بناء تطبيق React 19 مع Tailwind CSS و DaisyUI لواجهة مستخدم مصقولة. تدمج البوابة الخلفية أدوات رسم بياني متقدمة للمقاييس المالية، وأدوات CRM شاملة لإدارة العملاء والمشاريع.",
    },
    role: {
      en: "Developed the dynamic financial services frontend and the expansive administrative portal for CRM and analytics.",
      ar: "تطوير واجهة الخدمات المالية الديناميكية واللوحة الإدارية الموسعة لإدارة علاقات العملاء والتحليلات.",
    },
    category: { en: "Financial Platform", ar: "منصة مالية" },
    technologies: ["React 19", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Recharts", "ApexCharts"],
    year: "2025",
    featured: true,
    image: "/images/projects/elamwal/cover.webp",
    gallery: [
      "/images/projects/elamwal/01.webp",
    ],
    liveUrl: "https://www.elamwal.com/",
    keyFeatures: [
      { en: "Financial Services Showcase", ar: "عرض الخدمات المالية" },
      { en: "Robust CRM & Project Management", ar: "نظام قوي لإدارة علاقات العملاء والمشاريع" },
      { en: "Advanced Financial Analytics Dashboards", ar: "لوحات تحكم متقدمة للتحليلات المالية" },
      { en: "Interactive UI Elements & Smooth Animations", ar: "عناصر واجهة مستخدم تفاعلية ورسوم متحركة سلسة" },
      { en: "Comprehensive Content Control (CMS)", ar: "تحكم شامل في المحتوى (CMS)" },
    ],
  },

  // ─── Domain-based Projects (placeholders — update with real data) ─────────────

  // {
  //   slug: "jasour",
  //   title: { en: "Jasour", ar: "جسور" },
  //   shortDescription: {
  //     en: "A modern web platform connecting people and services.",
  //     ar: "منصة ويب حديثة تربط الناس بالخدمات.",
  //   },
  //   description: {
  //     en: "Jasour is a web platform focused on seamless connectivity and service delivery. Built with a modern frontend stack, it delivers a polished and responsive user experience.",
  //     ar: "جسور هو منصة ويب تركز على التواصل السلس وتقديم الخدمات. مبنية بتقنيات الواجهة الأمامية الحديثة.",
  //   },
  //   challenge: {
  //     en: "Creating an intuitive platform that effectively connects users with the services they need while maintaining excellent performance and usability.",
  //     ar: "إنشاء منصة بديهية تربط المستخدمين بالخدمات التي يحتاجونها مع الحفاظ على أداء ممتاز وسهولة الاستخدام.",
  //   },
  //   solution: {
  //     en: "Implemented a clean, component-based frontend architecture with optimized API integration and responsive design across all devices.",
  //     ar: "تطبيق هندسة واجهة أمامية نظيفة قائمة على المكونات مع تكامل API محسّن وتصميم متجاوب على جميع الأجهزة.",
  //   },
  //   role: {
  //     en: "Frontend development, API integration, and responsive UI implementation.",
  //     ar: "تطوير الواجهة الأمامية وتكامل API وتطبيق واجهة مستخدم متجاوبة.",
  //   },
  //   category: { en: "Web Platform", ar: "منصة ويب" },
  //   technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://jasour.net",
  //   image: "/images/projects/jasour/cover.webp",
  //   keyFeatures: [
  //     { en: "Responsive web interface", ar: "واجهة ويب متجاوبة" },
  //     { en: "API integration", ar: "تكامل API" },
  //     { en: "Modern UI/UX", ar: "واجهة مستخدم حديثة" },
  //   ],
  // },

  // {
  //   slug: "tamayoz",
  //   title: { en: "Tamayoz", ar: "تميّز" },
  //   shortDescription: {
  //     en: "An educational platform providing e-learning solutions for students and educators.",
  //     ar: "منصة تعليمية تقدم حلول التعلم الإلكتروني للطلاب والمعلمين.",
  //   },
  //   description: {
  //     en: "Tamayoz is an e-learning platform designed to deliver engaging educational content to students. The platform features course management, user authentication, and a clean learning interface.",
  //     ar: "تميّز هو منصة تعلم إلكتروني مصممة لتقديم محتوى تعليمي جذاب للطلاب. تتضمن إدارة الدورات ومصادقة المستخدم وواجهة تعلم نظيفة.",
  //   },
  //   challenge: {
  //     en: "Designing an accessible, engaging educational experience that works across devices and accommodates both students and instructors.",
  //     ar: "تصميم تجربة تعليمية سهلة الوصول وجذابة تعمل عبر الأجهزة وتستوعب الطلاب والمدرسين.",
  //   },
  //   solution: {
  //     en: "Built a responsive educational interface with intuitive navigation, content delivery optimization, and accessible design principles.",
  //     ar: "بناء واجهة تعليمية متجاوبة مع تنقل بديهي وتحسين تقديم المحتوى ومبادئ تصميم يسهل الوصول إليها.",
  //   },
  //   role: {
  //     en: "Frontend development and educational UI design.",
  //     ar: "تطوير الواجهة الأمامية وتصميم واجهة المستخدم التعليمية.",
  //   },
  //   category: { en: "Education Platform", ar: "منصة تعليمية" },
  //   technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://tamayoz-edu.com",
  //   image: "/images/projects/tamayoz/cover.webp",
  //   keyFeatures: [
  //     { en: "Course management system", ar: "نظام إدارة الدورات" },
  //     { en: "Student & instructor interfaces", ar: "واجهات للطلاب والمدرسين" },
  //     { en: "Responsive design", ar: "تصميم متجاوب" },
  //   ],
  // },

  // {
  //   slug: "elmonjez",
  //   title: { en: "Elmonjez", ar: "المنجز" },
  //   shortDescription: {
  //     en: "A business productivity platform for task and project management.",
  //     ar: "منصة إنتاجية أعمال لإدارة المهام والمشاريع.",
  //   },
  //   description: {
  //     en: "Elmonjez is a productivity platform focused on helping businesses manage tasks, projects, and team workflows efficiently. Features a clean dashboard interface with real-time data management.",
  //     ar: "المنجز هو منصة إنتاجية تركز على مساعدة الشركات في إدارة المهام والمشاريع وسير عمل الفريق بكفاءة.",
  //   },
  //   challenge: {
  //     en: "Creating a powerful yet simple task management interface that scales for teams while keeping the UX clean and intuitive.",
  //     ar: "إنشاء واجهة إدارة مهام قوية وبسيطة في نفس الوقت تتسع للفرق مع الحفاظ على UX نظيفة وبديهية.",
  //   },
  //   solution: {
  //     en: "Implemented a modular dashboard architecture with efficient state management and optimized rendering for real-time task updates.",
  //     ar: "تطبيق هندسة لوحة تحكم معيارية مع إدارة حالة فعّالة وعرض محسّن لتحديثات المهام الفورية.",
  //   },
  //   role: {
  //     en: "Frontend development and dashboard architecture.",
  //     ar: "تطوير الواجهة الأمامية وهندسة لوحة التحكم.",
  //   },
  //   category: { en: "Productivity Platform", ar: "منصة إنتاجية" },
  //   technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://elmonjez.com",
  //   image: "/images/projects/elmonjez/cover.webp",
  //   keyFeatures: [
  //     { en: "Task & project management", ar: "إدارة المهام والمشاريع" },
  //     { en: "Team workflow dashboard", ar: "لوحة تحكم سير عمل الفريق" },
  //     { en: "Clean admin interface", ar: "واجهة إدارية نظيفة" },
  //   ],
  // },

  // {
  //   slug: "speedegy",
  //   title: { en: "Speedegy", ar: "سبيديجي" },
  //   shortDescription: {
  //     en: "A high-performance web platform built for speed and scalability.",
  //     ar: "منصة ويب عالية الأداء مبنية للسرعة وقابلية التوسع.",
  //   },
  //   description: {
  //     en: "Speedegy is a web platform prioritizing performance and user experience. Built with modern frontend technologies with a focus on fast load times and smooth interactions.",
  //     ar: "سبيديجي هو منصة ويب تعطي الأولوية للأداء وتجربة المستخدم. مبنية بتقنيات واجهة أمامية حديثة مع التركيز على أوقات تحميل سريعة.",
  //   },
  //   challenge: {
  //     en: "Delivering a high-performance platform with excellent core web vitals and smooth user experience across all connection speeds.",
  //     ar: "تقديم منصة عالية الأداء مع نقاط ويب أساسية ممتازة وتجربة مستخدم سلسة عبر جميع سرعات الاتصال.",
  //   },
  //   solution: {
  //     en: "Optimized frontend performance through efficient bundling, lazy loading, and component-level optimizations.",
  //     ar: "تحسين أداء الواجهة الأمامية من خلال التجميع الفعّال والتحميل الكسول وتحسينات على مستوى المكونات.",
  //   },
  //   role: {
  //     en: "Frontend development and performance optimization.",
  //     ar: "تطوير الواجهة الأمامية وتحسين الأداء.",
  //   },
  //   category: { en: "Web Platform", ar: "منصة ويب" },
  //   technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://speedegy.com",
  //   image: "/images/projects/speedegy/cover.webp",
  //   keyFeatures: [
  //     { en: "Optimized performance & Core Web Vitals", ar: "أداء محسّن ومقاييس الويب الأساسية" },
  //     { en: "Responsive design", ar: "تصميم متجاوب" },
  //     { en: "Modern frontend stack", ar: "تقنيات واجهة أمامية حديثة" },
  //   ],
  // },

  // {
  //   slug: "artzksa",
  //   title: { en: "Artzk", ar: "أرتزك" },
  //   shortDescription: {
  //     en: "A creative platform for art and design, connecting artists with their audience.",
  //     ar: "منصة إبداعية للفن والتصميم تربط الفنانين بجمهورهم.",
  //   },
  //   description: {
  //     en: "Artzk is a creative platform designed for artists and designers in Saudi Arabia. It features a visually rich interface for showcasing artwork, portfolio management, and community engagement.",
  //     ar: "أرتزك هو منصة إبداعية مصممة للفنانين والمصممين في المملكة العربية السعودية. يتضمن واجهة غنية بصرياً لعرض الأعمال الفنية وإدارة المحافظ.",
  //   },
  //   challenge: {
  //     en: "Building a visually striking platform that showcases creative work beautifully while maintaining excellent performance and accessibility.",
  //     ar: "بناء منصة بصرية مذهلة تعرض الأعمال الإبداعية بشكل جميل مع الحفاظ على أداء ممتاز وإمكانية وصول.",
  //   },
  //   solution: {
  //     en: "Designed an image-rich, performance-optimized interface with elegant galleries, smooth transitions, and an intuitive browsing experience.",
  //     ar: "تصميم واجهة غنية بالصور ومحسّنة للأداء مع معارض أنيقة وانتقالات سلسة وتجربة تصفح بديهية.",
  //   },
  //   role: {
  //     en: "Frontend development, gallery UI, and creative interface design.",
  //     ar: "تطوير الواجهة الأمامية وواجهة المعرض وتصميم الواجهة الإبداعية.",
  //   },
  //   category: { en: "Creative Platform", ar: "منصة إبداعية" },
  //   technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://artzksa.com",
  //   image: "/images/projects/artzksa/cover.webp",
  //   keyFeatures: [
  //     { en: "Visual art showcase galleries", ar: "معارض عرض الفن البصري" },
  //     { en: "Artist portfolio management", ar: "إدارة محافظ الفنانين" },
  //     { en: "Community engagement features", ar: "ميزات تفاعل المجتمع" },
  //   ],
  // },

  // {
  //   slug: "truennorth",
  //   title: { en: "TrueNorth", ar: "ترونورث" },
  //   shortDescription: {
  //     en: "A business solutions platform focused on direction, strategy, and growth.",
  //     ar: "منصة حلول أعمال تركز على التوجيه والاستراتيجية والنمو.",
  //   },
  //   description: {
  //     en: "TrueNorth is a professional business platform delivering strategic solutions and tools. Features a clean corporate design with intuitive navigation and data-driven interfaces.",
  //     ar: "ترونورث هو منصة أعمال احترافية تقدم حلول وأدوات استراتيجية. يتضمن تصميماً مؤسسياً نظيفاً مع تنقل بديهي وواجهات مدفوعة بالبيانات.",
  //   },
  //   challenge: {
  //     en: "Delivering a professional corporate platform that communicates trust, expertise, and clarity through clean design and effective information architecture.",
  //     ar: "تقديم منصة مؤسسية احترافية تتواصل الثقة والخبرة والوضوح من خلال تصميم نظيف وهندسة معلومات فعّالة.",
  //   },
  //   solution: {
  //     en: "Built a clean, corporate-grade interface with clear information hierarchy, optimized content sections, and professional visual design.",
  //     ar: "بناء واجهة نظيفة على مستوى الشركات مع تسلسل هرمي واضح للمعلومات وأقسام محتوى محسّنة وتصميم بصري احترافي.",
  //   },
  //   role: {
  //     en: "Frontend development and corporate UI implementation.",
  //     ar: "تطوير الواجهة الأمامية وتطبيق واجهة مستخدم مؤسسية.",
  //   },
  //   category: { en: "Business Platform", ar: "منصة أعمال" },
  //   technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://truennorth.com",
  //   image: "/images/projects/truennorth/cover.webp",
  //   keyFeatures: [
  //     { en: "Corporate design system", ar: "نظام تصميم مؤسسي" },
  //     { en: "Strategic content presentation", ar: "عرض المحتوى الاستراتيجي" },
  //     { en: "Professional interface", ar: "واجهة احترافية" },
  //   ],
  // },

  // {
  //   slug: "marktita",
  //   title: { en: "Marktita", ar: "ماركتيتا" },
  //   shortDescription: {
  //     en: "An e-commerce and marketplace platform for seamless buying and selling.",
  //     ar: "منصة تجارة إلكترونية وسوق للشراء والبيع بسلاسة.",
  //   },
  //   description: {
  //     en: "Marktita is a marketplace platform designed to connect buyers and sellers. Features product listings, search and filtering, shopping cart functionality, and a smooth checkout experience.",
  //     ar: "ماركتيتا هو منصة سوق مصممة لربط المشترين والبائعين. يتضمن قوائم المنتجات والبحث والتصفية وعربة التسوق وتجربة دفع سلسة.",
  //   },
  //   challenge: {
  //     en: "Building a scalable marketplace with complex product management, efficient search and filtering, and a smooth end-to-end purchase flow.",
  //     ar: "بناء سوق قابل للتوسع مع إدارة منتجات معقدة وبحث وتصفية فعّالة وسير شراء سلس من البداية إلى النهاية.",
  //   },
  //   solution: {
  //     en: "Implemented an efficient product listing architecture with optimized filtering, responsive product cards, and a streamlined cart and checkout flow.",
  //     ar: "تطبيق هندسة قوائم منتجات فعّالة مع تصفية محسّنة وبطاقات منتجات متجاوبة وسير عربة ودفع مبسط.",
  //   },
  //   role: {
  //     en: "Frontend development, product UI, and marketplace interface design.",
  //     ar: "تطوير الواجهة الأمامية وواجهة المنتج وتصميم واجهة السوق.",
  //   },
  //   category: { en: "E-Commerce", ar: "تجارة إلكترونية" },
  //   technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
  //   year: "2024",
  //   liveUrl: "https://marktita.com",
  //   image: "/images/projects/marktita/cover.webp",
  //   keyFeatures: [
  //     { en: "Product listings & marketplace", ar: "قوائم المنتجات والسوق" },
  //     { en: "Search & filtering system", ar: "نظام البحث والتصفية" },
  //     { en: "Shopping cart & checkout", ar: "عربة التسوق والدفع" },
  //   ],
  // },
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
