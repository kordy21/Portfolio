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
      en: "A comprehensive healthcare and medical services platform with an advanced admin dashboard.",
      ar: "منصة رعاية صحية وخدمات طبية شاملة مع لوحة تحكم إدارية متقدمة.",
    },
    description: {
      en: "CareHub is Egypt's home-hospital platform: emergency response, ICU & IMCU at home, doctor visits, nursing, home dialysis, transfusion, chemotherapy and diagnostics. The public site is an Arabic-first, SEO-heavy Next.js app with a doctors directory and an interactive medical blog, backed by a real-time operations dashboard for emergency dispatch, fleet and medical staff.",
      ar: "كيرهب منصة المستشفى المنزلي في مصر: طوارئ، عناية مركزة منزلية، زيارات أطباء، تمريض، غسيل كلوي، نقل دم، كيماوي وتحاليل في المنزل. الموقع العام عربي أولًا ومحسّن لمحركات البحث بـ Next.js مع دليل أطباء ومدونة طبية تفاعلية، ويعمل مع لوحة تحكم لحظية لإدارة بلاغات الطوارئ والأسطول والكادر الطبي.",
    },
    challenge: {
      en: "Building a bilingual healthcare platform with strong SEO (legacy Arabic URL redirects, split sitemaps) and an operations dashboard that must reflect emergency cases, fleet and staff changes in real time across many resources.",
      ar: "بناء منصة رعاية صحية ثنائية اللغة بتحسين قوي لمحركات البحث (تحويلات الروابط العربية القديمة وخرائط موقع مقسمة) ولوحة تشغيل يجب أن تعكس بلاغات الطوارئ والأسطول والكادر لحظيًا عبر موارد كثيرة.",
    },
    solution: {
      en: "Built the patient-facing site with Next.js 16 and Tailwind/DaisyUI, and the dashboard with Vite 7 and React 19. A Socket.IO layer feeds TanStack Query so 16 resources (emergencies, fleet, staff, patients, bookings...) refresh instantly, with Leaflet maps, ApexCharts analytics and a Quill-based CMS.",
      ar: "بناء موقع المرضى بـ Next.js 16 و Tailwind/DaisyUI، ولوحة التحكم بـ Vite 7 و React 19. طبقة Socket.IO تغذي TanStack Query لتحديث 16 موردًا لحظيًا (طوارئ، أسطول، كادر، مرضى، حجوزات...) مع خرائط Leaflet وتحليلات ApexCharts ونظام محتوى بـ Quill.",
    },
    role: {
      en: "Led frontend implementation for both the public-facing platform and the highly customized enterprise administrative dashboard.",
      ar: "قادة تنفيذ الواجهة الأمامية لكل من المنصة العامة ولوحة التحكم الإدارية المؤسسية المخصصة للغاية.",
    },
    category: { en: "Healthcare Platform", ar: "منصة رعاية صحية" },
    technologies: ["Next.js", "React 19", "Vite", "Socket.IO", "TanStack Query", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Bootstrap", "ApexCharts", "Leaflet", "Framer Motion"],
    year: "2026",
    featured: true,
    image: "/images/projects/carehub/cover.webp",
    gallery: [
      "/images/projects/carehub/01.webp",
      "/images/projects/carehub/02.webp",
    ],
    liveUrl: "https://carehub.eg/ar",
    keyFeatures: [
      { en: "Home ICU, Emergency & Home-Care Service Pages", ar: "صفحات العناية المركزة المنزلية والطوارئ والرعاية المنزلية" },
      { en: "Interactive Medical Blog & Doctors Directory", ar: "مدونة طبية تفاعلية ودليل أطباء" },
      { en: "Real-Time Dispatch Dashboard (Socket.IO)", ar: "لوحة تشغيل لحظية للطوارئ (Socket.IO)" },
      { en: "Fleet Tracking, Medical Centers & QR Staff Check-in", ar: "تتبع الأسطول والمراكز الطبية وتسجيل حضور الطاقم بـ QR" },
      { en: "Bilingual SEO (AR/EN, Redirect Map & Sitemaps)", ar: "SEO ثنائي اللغة (عربي/إنجليزي مع تحويلات وخرائط موقع)" },
    ],
  },

  {
    slug: "el-khateb",
    title: { en: "El-Khateb", ar: "الخطيب" },
    shortDescription: {
      en: "A bilingual auditing, accounting and advisory firm website with an editorial CMS dashboard.",
      ar: "موقع ثنائي اللغة لمكتب مراجعة ومحاسبة واستشارات مع لوحة تحكم لإدارة المحتوى.",
    },
    description: {
      en: "El-Khateb is a Cairo-based auditing and accounting firm serving clients since 1990. The site presents eight specialized service portals (audit, tax, risk, financial and management advisory, training, digital transformation, AI accounting), case studies, industry thinking, news, careers and seven interactive request forms. A separate dashboard runs the content and the incoming requests.",
      ar: "الخطيب مكتب مراجعة ومحاسبة في القاهرة يخدم عملاءه منذ 1990. يعرض الموقع ثماني بوابات خدمات متخصصة (مراجعة وضرائب ومخاطر واستشارات مالية وإدارية وتدريب وتحول رقمي ومحاسبة بالذكاء الاصطناعي) ودراسات حالة وفكر الصناعة وأخبارًا ووظائف وسبعة نماذج طلبات تفاعلية. ولوحة تحكم منفصلة تدير المحتوى والطلبات الواردة.",
    },
    challenge: {
      en: "Delivering a fast, SEO-friendly corporate site with no login, fully server-rendered data, and a dashboard that edits multiple editorial modules and several request pipelines.",
      ar: "تقديم موقع مؤسسي سريع ومتوافق مع محركات البحث بدون تسجيل دخول وببيانات مرندرة بالكامل من السيرفر، ولوحة تحكم تدير عدة وحدات تحريرية ومسارات طلبات.",
    },
    solution: {
      en: "Built both apps with Next.js 16, React 19, TypeScript and Tailwind CSS v4. The site prefetches on the server via TanStack Query hydration with next-intl for AR/EN; the dashboard uses shadcn/ui, Recharts analytics and CKEditor 5 with sanitized HTML and a shared media library.",
      ar: "بناء التطبيقين بـ Next.js 16 و React 19 و TypeScript و Tailwind CSS v4. الموقع يجلب البيانات من السيرفر عبر TanStack Query Hydration مع next-intl للعربية والإنجليزية؛ ولوحة التحكم بـ shadcn/ui وتحليلات Recharts ومحرر CKEditor 5 مع تنقية HTML ومكتبة وسائط مشتركة.",
    },
    role: {
      en: "Frontend Developer for the corporate website and the admin dashboard.",
      ar: "مطور واجهة أمامية للموقع المؤسسي ولوحة التحكم الإدارية.",
    },
    category: { en: "Business & Financial Advisory", ar: "استشارات مالية وأعمال" },
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "next-intl", "Recharts", "CKEditor 5", "Zod"],
    year: "2026",
    featured: true,
    image: "/images/projects/el-khateb/cover.webp",
    gallery: ["/images/projects/el-khateb/01.webp"],
    liveUrl: "https://new.el-khateb.com/",
    keyFeatures: [
      { en: "SSR-First Architecture with Query Hydration (AR/EN)", ar: "معمارية SSR مع Query Hydration (عربي/إنجليزي)" },
      { en: "8 Specialized Service Portals & Academy", ar: "8 بوابات خدمات متخصصة وأكاديمية" },
      { en: "Unified Editorial CMS (Case Studies, Insights, News)", ar: "نظام تحرير موحد (دراسات حالة ومقالات وأخبار)" },
      { en: "Request Pipelines: Consultations, Bookings, Partnerships, Careers", ar: "مسارات طلبات: استشارات وحجوزات وشراكات ووظائف" },
      { en: "Analytics Dashboard with Dark/Light Themes", ar: "لوحة تحليلات مع وضع ليلي ونهاري" },
    ],
  },

  {
    slug: "sabortak",
    title: { en: "Sabortak", ar: "سبورتك" },
    shortDescription: {
      en: "A modern, feature-rich educational marketplace and e-learning platform.",
      ar: "سوق تعليمي حديث ومنصة تعلم إلكتروني مليئة بالميزات.",
    },
    description: {
      en: "Sabortk is an Egyptian learning marketplace for Grade 11 & 12 students. Students buy lesson access codes per teacher and order study essentials from two stores (the Sabortk Store and the Teachers Store), with Bosta-powered shipping, coupons, and a community feed. A dual-role Admin/Teacher dashboard runs the whole marketplace.",
      ar: "سبورتك سوق تعليمي مصري لطلاب الصف الأول والثاني الثانوي. يشتري الطالب أكواد الحصص لكل معلم ويطلب أدوات الدراسة من متجرين (متجر سبورتك ومتجر المعلمين) مع شحن عبر Bosta وكوبونات ومجتمع تفاعلي. ولوحة تحكم بصلاحيتين (أدمن ومعلم) تدير السوق بالكامل.",
    },
    challenge: {
      en: "Developing a scalable, dual-purpose platform requiring a high-performance public marketplace with a seamless shopping experience and a highly secure, data-intensive administrative dashboard.",
      ar: "تطوير منصة مزدوجة الغرض قابلة للتوسع تتطلب سوقًا عامًا عالي الأداء مع تجربة تسوق سلسة ولوحة تحكم إدارية آمنة للغاية ومكثفة البيانات.",
    },
    solution: {
      en: "Built the public site with Next.js 16 (App Router), React 19, Tailwind CSS v4 and next-intl for SEO and bilingual routing, and the dashboard with Vite, React 19 and Bootstrap/Reactstrap. Used TanStack Query and Redux Toolkit for data, TanStack Table for data-heavy grids, and ApexCharts for sales and visitor analytics.",
      ar: "بناء الموقع العام بـ Next.js 16 و React 19 و Tailwind CSS v4 و next-intl لتحسين محركات البحث والتوجيه ثنائي اللغة، ولوحة التحكم بـ Vite و React 19 و Bootstrap/Reactstrap. استخدام TanStack Query و Redux Toolkit لإدارة البيانات، و TanStack Table للجداول الكبيرة، و ApexCharts لتحليلات المبيعات والزوار.",
    },
    role: {
      en: "Developed the frontend architecture and implementation for both the public e-learning marketplace and the comprehensive administrative/teacher dashboard.",
      ar: "تطوير هندسة الواجهة الأمامية والتنفيذ لكل من سوق التعلم الإلكتروني العام ولوحة التحكم الإدارية/للمعلمين الشاملة.",
    },
    category: { en: "Education & E-Commerce Marketplace", ar: "سوق تعليمي وتجارة إلكترونية" },
    technologies: ["Next.js", "React 19", "Vite", "Redux Toolkit", "TanStack Query", "TanStack Table", "Tailwind CSS", "Bootstrap", "ApexCharts", "next-intl"],
    year: "2026",
    featured: true,
    image: "/images/projects/sabortak/cover.webp",
    gallery: [
      "/images/projects/sabortak/01.webp",
      "/images/projects/sabortak/02.webp",
    ],
    liveUrl: "https://www.sabortk.com/en",
    keyFeatures: [
      { en: "Lesson Code Purchase Flow with Scratch-Card Reveal", ar: "شراء أكواد الحصص مع كشف الكود بطريقة Scratch Card" },
      { en: "Dual Stores, Wishlist, Coupons & Bosta Shipping", ar: "متجران وقائمة مفضلة وكوبونات وشحن عبر Bosta" },
      { en: "Teacher Profiles & Student Community Feed", ar: "ملفات المعلمين ومجتمع الطلاب التفاعلي" },
      { en: "Dual-Role Admin & Teacher Dashboard", ar: "لوحة تحكم بصلاحيتين: أدمن ومعلم" },
      { en: "Sales Analytics, Code Batches & Teacher Referrals", ar: "تحليلات المبيعات ودفعات الأكواد وإحالات المعلمين" },
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
      en: "WorkBrand is an all-in-one business hub and workspaces provider. Three client portals (Website, Agency, Consulting) cover office and coworking bookings, company launch, events, a multi-vendor store with Paymob checkout, a creative agency and executive consulting, all managed from one central operations dashboard.",
      ar: "وورك براند مركز أعمال متكامل ومساحات عمل. ثلاث بوابات للعملاء (الموقع والوكالة والاستشارات) تغطي حجز المكاتب ومساحات العمل المشتركة وتأسيس الشركات والفعاليات ومتجرًا متعدد البائعين بدفع Paymob ووكالة إبداعية واستشارات تنفيذية، وكلها تُدار من لوحة تشغيل مركزية واحدة.",
    },
    challenge: {
      en: "Developing a unified multi-portal architecture that maintains consistent brand identity while serving different business functions, coupled with a central operational ERP dashboard for complex internal workflows.",
      ar: "تطوير هندسة متعددة البوابات موحدة تحافظ على هوية العلامة التجارية المتسقة أثناء خدمة وظائف الأعمال المختلفة، إلى جانب لوحة تحكم ERP مركزية للعمليات الداخلية المعقدة.",
    },
    solution: {
      en: "Built three separate React 19 (CRA) client apps sharing one Tailwind/DaisyUI design system and a unified backend, plus a Vite-based Bootstrap dashboard with FullCalendar scheduling, TanStack tables and ApexCharts reporting. Integrated Paymob payments and Bosta/Mylerz shipping, and a vendor portal with paperwork tracking.",
      ar: "بناء ثلاثة تطبيقات عملاء مستقلة بـ React 19 (CRA) تشترك في نظام تصميم Tailwind/DaisyUI وباك إند موحد، مع لوحة تحكم بـ Vite و Bootstrap تضم جدولة FullCalendar وجداول TanStack وتقارير ApexCharts. دمج دفع Paymob وشحن Bosta/Mylerz وبوابة للبائعين مع تتبع الأوراق الرسمية.",
    },
    role: {
      en: "Frontend Developer responsible for the multi-portal client ecosystems and the central operational dashboard unifying data across all branches.",
      ar: "مطور واجهة أمامية مسؤول عن بوابات العملاء المتعددة ولوحة التحكم التشغيلية المركزية التي توحد البيانات عبر جميع الفروع.",
    },
    category: { en: "Business Hub & E-Commerce", ar: "مركز أعمال وتجارة إلكترونية" },
    technologies: ["React 19", "Vite", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Bootstrap", "ApexCharts", "FullCalendar", "TanStack Table", "i18next", "Paymob"],
    year: "2025",
    featured: true,
    image: "/images/projects/work-brand/cover.webp",
    gallery: [
      "/images/projects/work-brand/01.webp",
      "/images/projects/work-brand/02.webp",
    ],
    liveUrl: "https://www.workbrand.org/",
    keyFeatures: [
      { en: "3 Client Portals: Website, Agency & Consulting", ar: "3 بوابات عملاء: الموقع والوكالة والاستشارات" },
      { en: "Workspace, Office & Meeting Room Booking", ar: "حجز المكاتب ومساحات العمل وغرف الاجتماعات" },
      { en: "Multi-Vendor Store with Paymob, Bosta & Mylerz", ar: "متجر متعدد البائعين مع Paymob و Bosta و Mylerz" },
      { en: "AI Website Builder Flow & Company Pages", ar: "تدفق إنشاء موقع بالذكاء الاصطناعي وصفحات الشركات" },
      { en: "Central Operations Dashboard (Calendar, Reports, Store)", ar: "لوحة تشغيل مركزية (تقويم وتقارير ومتجر)" },
    ],
  },

  {
    slug: "bis",
    title: { en: "Business Index Sentiments (BIS)", ar: "بيزنس إندكس سنتيمنتس (BIS)" },
    shortDescription: {
      en: "A professional training and business development platform with courses, memberships, a store and a full admin dashboard.",
      ar: "منصة تدريب مهني وتطوير أعمال تضم دورات وعضويات ومتجرًا ولوحة تحكم إدارية كاملة.",
    },
    description: {
      en: "BIS is a professional training and business development platform. The public site offers a course catalog, enterprise training solutions, memberships with Paymob checkout, a books-and-products store, a job bank, events, an affiliate program and a user account area. A permission-controlled dashboard manages courses, events, memberships, commerce and content.",
      ar: "BIS منصة للتدريب المهني وتطوير الأعمال. يقدم الموقع العام كتالوج دورات وحلول تدريب للشركات وعضويات مع دفع Paymob ومتجر كتب ومنتجات وبنك وظائف وفعاليات وبرنامج تسويق بالعمولة ومنطقة حساب للمستخدم. ولوحة تحكم بصلاحيات تدير الدورات والفعاليات والعضويات والتجارة والمحتوى.",
    },
    challenge: {
      en: "Covering many business areas (training, enterprise services, memberships, commerce, jobs, events) with one consistent UX, 90+ routes and a secure token-refresh and online-payment flow.",
      ar: "تغطية مجالات أعمال متعددة (تدريب وخدمات مؤسسية وعضويات وتجارة ووظائف وفعاليات) بتجربة موحدة وأكثر من 90 مسارًا وتدفق آمن لتجديد التوكن والدفع الإلكتروني.",
    },
    solution: {
      en: "Built the website with React, Tailwind CSS, TanStack Query and React Hook Form + Zod, with an Axios layer that refreshes auth tokens and a Paymob iframe checkout. The dashboard uses Bootstrap/Reactstrap, Redux Toolkit, TanStack Table and ApexCharts for analytics.",
      ar: "بناء الموقع بـ React و Tailwind CSS و TanStack Query و React Hook Form مع Zod، وطبقة Axios تجدد التوكن تلقائيًا ودفع Paymob عبر iframe. لوحة التحكم بـ Bootstrap/Reactstrap و Redux Toolkit و TanStack Table و ApexCharts للتحليلات.",
    },
    role: {
      en: "Frontend Developer for the public website and the admin dashboard.",
      ar: "مطور واجهة أمامية للموقع العام ولوحة التحكم الإدارية.",
    },
    category: { en: "Education & Business Training", ar: "تدريب مهني وتطوير أعمال" },
    technologies: ["React.js", "TanStack Query", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "React Hook Form", "Zod", "ApexCharts", "Paymob"],
    year: "2026",
    featured: true,
    image: "/images/projects/bis/cover.webp",
    gallery: ["/images/projects/bis/01.webp"],
    liveUrl: "https://www.businessindexsentiments.com",
    keyFeatures: [
      { en: "Course Catalog, Enterprise Training & Skills-Gap Assessment", ar: "كتالوج دورات وتدريب مؤسسي وتقييم فجوة المهارات" },
      { en: "Memberships & Paymob Checkout", ar: "العضويات والدفع عبر Paymob" },
      { en: "Store, Suppliers & Coupons", ar: "متجر وموردون وكوبونات" },
      { en: "Job Bank, Events & Affiliate Program", ar: "بنك وظائف وفعاليات وبرنامج تسويق بالعمولة" },
      { en: "Multi-Module Admin Dashboard with Analytics", ar: "لوحة تحكم متعددة الوحدات مع تحليلات" },
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
      en: "Elamwal (Al-Amwal Newspaper) is an economic and financial news portal: news sections, an e-newspaper edition, photo and video galleries, opinion writers, live gold, currency and commodity price widgets, and directory profiles for bankers, listed companies and businesspeople. An editorial dashboard manages articles, media, ads and prices.",
      ar: "جريدة الأموال بوابة إخبارية اقتصادية ومالية: أقسام أخبار ونسخة إلكترونية من الجريدة وألبومات صور وفيديو وكتّاب رأي وويدجت لحظية لأسعار الذهب والعملات والسلع، وأدلة لملفات البنكيين والشركات المدرجة ورجال الأعمال. ولوحة تحرير تدير المقالات والوسائط والإعلانات والأسعار.",
    },
    challenge: {
      en: "Delivering a fast, content-heavy news portal with live market widgets and ad placements, while giving editors a role-based dashboard (manager vs editor) for articles, media and pricing data.",
      ar: "تقديم بوابة أخبار سريعة وغنية بالمحتوى مع ويدجت أسواق لحظية ومساحات إعلانية، ولوحة تحكم للمحررين بصلاحيات (مدير ومحرر) لإدارة المقالات والوسائط وبيانات الأسعار.",
    },
    solution: {
      en: "Built the public portal with React 19, Tailwind CSS and DaisyUI plus Google OAuth/JWT sign-in. The dashboard uses Bootstrap/Reactstrap with Quill (and table support) for editing, a media library with image cropping, ApexCharts for editorial analytics, and dedicated modules for ads, commodities and profiles.",
      ar: "بناء البوابة العامة بـ React 19 و Tailwind CSS و DaisyUI مع تسجيل دخول Google OAuth/JWT. لوحة التحكم بـ Bootstrap/Reactstrap مع محرر Quill ومكتبة وسائط وقص صور وتحليلات تحريرية بـ ApexCharts ووحدات مخصصة للإعلانات والسلع والملفات الشخصية.",
    },
    role: {
      en: "Developed the public news portal frontend and the editorial administrative dashboard.",
      ar: "تطوير واجهة البوابة الإخبارية العامة ولوحة التحكم التحريرية.",
    },
    category: { en: "Financial News & Media Portal", ar: "بوابة إخبارية واقتصادية" },
    technologies: ["React 19", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Bootstrap", "Quill", "ApexCharts", "Recharts", "Google OAuth", "Framer Motion"],
    year: "2025",
    featured: true,
    image: "/images/projects/elamwal/cover.webp",
    gallery: [
      "/images/projects/elamwal/01.webp",
    ],
    liveUrl: "https://www.elamwal.com/",
    keyFeatures: [
      { en: "Economic News Portal & E-Newspaper Edition", ar: "بوابة أخبار اقتصادية ونسخة إلكترونية من الجريدة" },
      { en: "Live Gold, Currency & Commodity Price Widgets", ar: "ويدجت لحظية لأسعار الذهب والعملات والسلع" },
      { en: "Bankers, Companies & Businesspeople Profiles", ar: "ملفات البنكيين والشركات ورجال الأعمال" },
      { en: "Ad Placement Management & Role-Based Editorial CMS", ar: "إدارة أماكن الإعلانات ونظام تحرير بصلاحيات" },
      { en: "Google OAuth & JWT Authentication", ar: "مصادقة Google OAuth و JWT" },
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
