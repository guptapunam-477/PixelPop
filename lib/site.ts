// ---------------------------------------------------------------------------
// Single source of truth for site content, navigation and brand constants.
// Editing copy here updates it across every page.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "PixelPop Digi",
  tagline: "Fix the growth leaks between your website, ads, SEO and revenue.",
  description:
    "SEO, website redesign and performance marketing for e-commerce and DTC brands that want profitable, measurable growth.",
  email: "connect@pixelpopdigi.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pixelpopdigi.com",
  gtmId: "GTM-59CZQJDT",
  cta: {
    primary: { label: "Book a Growth Audit", href: "/contact" },
    secondary: { label: "See Our Work", href: "/work" },
  },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ----------------------------- Services -----------------------------------

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    short:
      "Organic visibility across Google and AI-led search, built to compound.",
    description:
      "Help e-commerce and DTC brands improve organic visibility across Google and AI-led search through technical SEO, on-page SEO, schema, internal linking, topical authority, buying-intent content and a search-friendly website structure.",
    points: [
      "Technical SEO audit",
      "On-page SEO for product, category and service pages",
      "Schema markup and structured data",
      "Internal linking and information architecture",
      "Buying-intent keyword mapping",
      "Content structure for Google and AI search",
      "SEO built for long-term compounding visibility",
    ],
  },
  {
    slug: "website-redesign-development",
    name: "Website Redesign & Development",
    short:
      "Clean, fast, conversion-focused sites that guide visitors toward action.",
    description:
      "Design and build clean, fast, responsive, conversion-focused websites that communicate clearly, load quickly and guide visitors toward action.",
    points: [
      "Modern website redesign",
      "Landing page development",
      "Conversion-focused page structure",
      "Mobile-first responsive design",
      "Clear content hierarchy",
      "Fast-loading pages",
      "Lead generation form integration",
      "SEO-ready frontend structure",
      "Accessible and readable UI",
    ],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    short:
      "Meta and Google Ads structured and optimised for profitable growth.",
    description:
      "Plan, structure, launch and optimise Meta and Google Ads campaigns for profitable growth — focused on ROAS, CAC, MER, contribution margin and conversion quality.",
    points: [
      "Meta Ads campaign structure",
      "Google Ads campaign structure",
      "Search, Shopping, Performance Max and retargeting planning where relevant",
      "Creative testing system",
      "Audience and intent mapping",
      "Landing page and offer alignment",
      "Budget scaling with CAC and ROAS control",
      "Business-metric reporting",
    ],
  },
];

// ----------------------------- Problems ------------------------------------

export const PROBLEMS: string[] = [
  "Ads are spending, but ROAS is unstable.",
  "CAC keeps rising without a clear diagnosis.",
  "The website looks fine but does not convert well.",
  "SEO exists but does not bring buying-intent traffic.",
  "Meta creatives fatigue quickly.",
  "Google campaigns are not structured around intent.",
  "Platform ROAS does not match business profitability.",
  "The team cannot tell whether the problem is ads, website, offer or SEO.",
];

// --------------------------- Growth system ---------------------------------

export type GrowthStep = { step: string; description: string };

export const GROWTH_STEPS: GrowthStep[] = [
  {
    step: "Diagnose",
    description:
      "Audit website, SEO, Meta Ads and Google Ads to identify where revenue is leaking.",
  },
  {
    step: "Fix",
    description:
      "Improve the fundamentals: website structure, landing pages, SEO architecture and campaign setup.",
  },
  {
    step: "Launch",
    description:
      "Launch structured campaigns and SEO-ready pages with clear tracking and conversion paths.",
  },
  {
    step: "Optimise",
    description:
      "Test creatives, pages, keywords, offers and budgets against business metrics.",
  },
  {
    step: "Scale",
    description:
      "Increase what works using clear rules around CAC, ROAS, MER, AOV and profitability.",
  },
];

// --------------------------- Business metrics ------------------------------

export const BUSINESS_METRICS: string[] = [
  "Revenue",
  "CAC",
  "ROAS",
  "MER",
  "AOV",
  "LTV",
  "Conversion Rate",
  "Contribution Margin",
  "Payback Period",
  "Organic Sessions",
  "Qualified Leads",
];

// ----------------------------- Case studies --------------------------------

export type CaseStudy = {
  client: string;
  category: string;
  results: { value: string; label: string }[];
  description: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Hicom India",
    category: "Industrial Supplier — SEO & Lead Generation",
    results: [
      { value: "+148%", label: "Organic Sessions" },
      { value: "+92%", label: "Qualified Leads" },
      { value: "11.3", label: "Avg. positions gained" },
    ],
    description:
      "A complete SEO overhaul — technical optimisation, content strategy and a revamped lead flow — improved organic growth and lead quality.",
  },
  {
    client: "TheBTclub",
    category: "DTC Apparel — Performance Marketing",
    results: [
      { value: "3x", label: "Sales Growth" },
      { value: "4.5x", label: "ROAS" },
      { value: "-5%", label: "RTO Rate" },
    ],
    description:
      "Account restructuring, rapid creative testing and full-funnel optimisation improved advertising efficiency and overall profitability.",
  },
  {
    client: "HiKalpaa",
    category: "Preschool — Lead Optimisation",
    results: [
      { value: "100%", label: "Target Met" },
      { value: "3x", label: "Footfall" },
      { value: "+78%", label: "Lead Quality" },
    ],
    description:
      "Automated WhatsApp lead qualification and targeted local campaigns improved the journey from ad click to school visit.",
  },
  {
    client: "D2C Footwear Brand",
    category: "E-commerce — Paid Media Optimisation",
    results: [
      { value: "4.5x", label: "ROAS" },
      { value: "+2.5%", label: "CVR" },
      { value: "+25%", label: "AOV" },
    ],
    description:
      "Paid media optimisation, landing-page A/B testing and product bundling improved ROAS, conversion rate and average order value.",
  },
];

// ----------------------------- Why us --------------------------------------

export const WHY_US: { title: string; body: string }[] = [
  {
    title: "Diagnose before scaling",
    body: "We find the actual leak before spending a rupee more on ads. Scaling a broken funnel only scales the loss.",
  },
  {
    title: "One system, not four silos",
    body: "Website, SEO and paid media are treated as one revenue engine — because that is how your customers experience them.",
  },
  {
    title: "Judged on business metrics",
    body: "Contribution margin, CAC and payback period — not platform ROAS or vanity dashboards that hide the truth.",
  },
  {
    title: "Clarity over complexity",
    body: "Plain reporting and clear decisions. You always know what we changed, why, and what it did to the bottom line.",
  },
];

// --------------------------- Form options ----------------------------------

export const SERVICE_OPTIONS = [
  "SEO",
  "Website Redesign and Development",
  "Performance Marketing",
] as const;
