/**
 * Line-item catalog for the project estimator (USD). Tune prices here;
 * totals are a ballpark until confirmed in writing.
 */

export type SectionCategory =
  | "foundation"
  | "static"
  | "interactive"
  | "ecommerce"
  | "pages"
  | "seo"
  | "launch";

export type SectionBadge = "popular" | "scope_carefully" | "upsell";

export interface EstimatorSection {
  id: string;
  name: string;
  category: SectionCategory;
  /** Quoted fixed price (low end if `priceMax` is set). */
  price: number;
  /** Optional high end of quoted range (e.g. content migration). */
  priceMax?: number;
  required?: boolean;
  description: string;
  hours: string;
  /** Internal time cost range at ~$100/hr (for client-facing transparency). */
  atCostMin: number;
  atCostMax: number;
  marginNote: string;
  badges?: SectionBadge[];
  priceUnit?: "per hour" | "per month";
  /** Shown for per-hour upload line: internal cost rate / hr. */
  atCostRatePerHour?: number;
}

export const COST_RATE_PER_HOUR = 100;

export const ESTIMATOR_README: { term: string; definition: string }[] = [
  {
    term: "Hrs",
    definition:
      "Realistic time including revisions and client back-and-forth.",
  },
  {
    term: "At cost",
    definition: `Usually hours × $${COST_RATE_PER_HOUR} internal time. Content upload line uses $75/hr internal vs $100/hr quoted.`,
  },
  {
    term: "Quoted",
    definition:
      "Fixed client price with margin baked in; you move faster over time.",
  },
  {
    term: "Margin",
    definition:
      "Profit at your current speed; it should grow as you get sharper.",
  },
];

export const CATEGORY_LABELS: Record<SectionCategory, string> = {
  foundation: "Foundation",
  static: "Static content sections",
  interactive: "Interactive & functional",
  ecommerce: "E-commerce",
  pages: "Additional pages",
  seo: "SEO & technical",
  launch: "Launch & post-launch",
};

/** Shown under each category legend when set. */
export const CATEGORY_INTROS: Partial<Record<SectionCategory, string>> = {
  ecommerce: "Scope every one of these carefully.",
  seo: "Always upsell these.",
  launch: "Recurring revenue lives here.",
};

export const CATEGORY_ORDER: SectionCategory[] = [
  "foundation",
  "static",
  "interactive",
  "ecommerce",
  "pages",
  "seo",
  "launch",
];

export const SECTIONS: EstimatorSection[] = [
  {
    id: "hero",
    name: "Hero + header + footer",
    category: "foundation",
    price: 1000,
    required: true,
    description:
      "Nav, branded hero with CTA, footer with links. Mobile responsive.",
    hours: "8–12",
    atCostMin: 800,
    atCostMax: 1200,
    marginNote: "Breakeven now; grows fast.",
  },
  {
    id: "about",
    name: "About / our story",
    category: "static",
    price: 250,
    description: "Brand story, mission, photo. Client supplies copy.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
    badges: ["popular"],
  },
  {
    id: "services",
    name: "Services overview",
    category: "static",
    price: 250,
    description: "Cards or list, up to 6 items. Client supplies copy.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
    badges: ["popular"],
  },
  {
    id: "testimonials_static",
    name: "Testimonials (static)",
    category: "static",
    price: 200,
    description: "Quote cards, client supplies text.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "portfolio_static",
    name: "Portfolio grid (static)",
    category: "static",
    price: 250,
    description: "Image grid, no filtering. Client supplies images.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "team",
    name: "Team / staff bios",
    category: "static",
    price: 250,
    description: "Photo, name, title, bio. Up to 8 people.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "faq",
    name: "FAQ",
    category: "static",
    price: 200,
    description: "Accordion or list. Client supplies Q&A.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "pricing_plans",
    name: "Pricing / plans",
    category: "static",
    price: 250,
    description: "2–4 tier comparison cards. Static, no toggle.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "logo_bar",
    name: "Logo / client trust bar",
    category: "static",
    price: 150,
    description: "Row of partner logos. Client supplies files.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "stats",
    name: "Stats / numbers",
    category: "static",
    price: 200,
    description: "Animated counters or large-number display.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "cta_strip",
    name: "CTA / banner strip",
    category: "static",
    price: 150,
    description: "Mid-page callout with headline and button.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "mission",
    name: "Mission / values",
    category: "static",
    price: 200,
    description: "Icon + text layout. Client supplies copy.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "awards",
    name: "Awards & certifications",
    category: "static",
    price: 150,
    description: "Badge/logo display. Client supplies files.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "press",
    name: "Press / as seen in",
    category: "static",
    price: 150,
    description: "Media logo bar with optional quote pull.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "process",
    name: "Process / how it works",
    category: "static",
    price: 250,
    description: "Numbered steps or timeline. Client supplies copy.",
    hours: "2–2.5",
    atCostMin: 200,
    atCostMax: 250,
    marginNote: "Good margin.",
  },
  {
    id: "before_after_static",
    name: "Before & after (static)",
    category: "static",
    price: 200,
    description: "Side-by-side image comparison layout.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "contact_form",
    name: "Contact form",
    category: "interactive",
    price: 350,
    description:
      "Validated fields, spam protection, email delivery, confirmation.",
    hours: "3–4",
    atCostMin: 300,
    atCostMax: 400,
    marginNote: "Slim now; solid later.",
    badges: ["popular"],
  },
  {
    id: "quote_form",
    name: "Multi-step / quote form",
    category: "interactive",
    price: 600,
    description: "2–4 step conditional form. More logic, more testing.",
    hours: "5–7",
    atCostMin: 500,
    atCostMax: 700,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "newsletter",
    name: "Newsletter signup",
    category: "interactive",
    price: 250,
    description:
      "Mailchimp/Klaviyo/ConvertKit integration, styled to match.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "blog",
    name: "Blog / news",
    category: "interactive",
    price: 750,
    description:
      "CMS posts, listing page, single post template, categories, SEO fields.",
    hours: "6–8",
    atCostMin: 600,
    atCostMax: 800,
    marginNote: "Slim now; solid later.",
    badges: ["popular"],
  },
  {
    id: "portfolio_filter",
    name: "Portfolio w/ filtering",
    category: "interactive",
    price: 500,
    description: "JS category filter, no page reload.",
    hours: "4–5",
    atCostMin: 400,
    atCostMax: 500,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "lightbox",
    name: "Photo / video lightbox",
    category: "interactive",
    price: 400,
    description: "Clickable gallery with full-size overlay viewer.",
    hours: "3–4",
    atCostMin: 300,
    atCostMax: 400,
    marginNote: "Good margin.",
  },
  {
    id: "testimonials_carousel",
    name: "Testimonials carousel",
    category: "interactive",
    price: 350,
    description: "Auto-advancing or swipeable slider.",
    hours: "2.5–3.5",
    atCostMin: 250,
    atCostMax: 350,
    marginNote: "Good margin.",
  },
  {
    id: "booking",
    name: "Booking / scheduling embed",
    category: "interactive",
    price: 300,
    description: "Calendly/Acuity styled to match site.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim now; solid later.",
    badges: ["popular"],
  },
  {
    id: "map",
    name: "Map / location embed",
    category: "interactive",
    price: 150,
    description: "Google Maps with custom pin or style.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "chat",
    name: "Live chat / chatbot widget",
    category: "interactive",
    price: 200,
    description: "Install + configure Tidio, Intercom, etc.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "popup",
    name: "Popup / exit-intent modal",
    category: "interactive",
    price: 300,
    description: "Triggered overlay with opt-in or offer.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "video_section",
    name: "Video section / background",
    category: "interactive",
    price: 300,
    description: "Embedded or background video, muted autoplay.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "before_after_slider",
    name: "Before & after slider",
    category: "interactive",
    price: 300,
    description: "Interactive drag-to-reveal image comparison.",
    hours: "2.5–3",
    atCostMin: 250,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "countdown",
    name: "Countdown timer",
    category: "interactive",
    price: 200,
    description: "Event or launch countdown. Static date target.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "reviews_widget",
    name: "Google review widget",
    category: "interactive",
    price: 200,
    description: "Third-party embed (EmbedSocial, etc.) styled to match.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "podcast",
    name: "Podcast embed",
    category: "interactive",
    price: 150,
    description: "Spotify/Buzzsprout player styled to match.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "events",
    name: "Events listing + single page",
    category: "interactive",
    price: 600,
    description:
      "CMS-managed events with date, location, registration link.",
    hours: "5–7",
    atCostMin: 500,
    atCostMax: 700,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "event_registration",
    name: "Event registration embed",
    category: "interactive",
    price: 200,
    description: "Eventbrite or similar styled and embedded.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "search",
    name: "Search results page",
    category: "interactive",
    price: 300,
    description: "Site search with styled results page.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "comparison_table",
    name: "Comparison table (dynamic)",
    category: "interactive",
    price: 400,
    description: "Interactive pricing or feature comparison.",
    hours: "3–4",
    atCostMin: 300,
    atCostMax: 400,
    marginNote: "Good margin.",
  },
  {
    id: "woo_simple",
    name: "WooCommerce, simple shop",
    category: "ecommerce",
    price: 1200,
    description:
      "≤20 products, single type, Stripe/PayPal, shop + product + cart + checkout.",
    hours: "10–14",
    atCostMin: 1000,
    atCostMax: 1400,
    marginNote: "Slim; buffer for surprises.",
    badges: ["scope_carefully"],
  },
  {
    id: "woo_mid",
    name: "WooCommerce, mid catalog",
    category: "ecommerce",
    price: 2200,
    description:
      "21–100 products, variable (size/color), category pages, filtering.",
    hours: "18–24",
    atCostMin: 1800,
    atCostMax: 2400,
    marginNote: "Slim; buffer for surprises.",
    badges: ["scope_carefully"],
  },
  {
    id: "shopify",
    name: "Shopify setup",
    category: "ecommerce",
    price: 1200,
    description: "Theme customization, ≤20 products, payment + shipping rules.",
    hours: "10–14",
    atCostMin: 1000,
    atCostMax: 1400,
    marginNote: "Slim; buffer for surprises.",
    badges: ["scope_carefully"],
  },
  {
    id: "product_import",
    name: "Product import (per 50 items)",
    category: "ecommerce",
    price: 250,
    description: "Bulk CSV import. Clean data required.",
    hours: "2/50 items",
    atCostMin: 200,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "customer_account",
    name: "Customer account / login",
    category: "ecommerce",
    price: 400,
    description: "WooCommerce my account page, order history.",
    hours: "3–4",
    atCostMin: 300,
    atCostMax: 400,
    marginNote: "Good margin.",
  },
  {
    id: "wishlist",
    name: "Wishlist",
    category: "ecommerce",
    price: 300,
    description: "Plugin-based wishlist functionality.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "upsell",
    name: "Upsell / cross-sell section",
    category: "ecommerce",
    price: 300,
    description: "You may also like or bundle recommendations.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "inner_page",
    name: "Standard inner page",
    category: "pages",
    price: 200,
    description: "Reuses existing design system. Client supplies content.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "landing_page",
    name: "Landing page (unique layout)",
    category: "pages",
    price: 500,
    description: "Campaign or product page with its own design.",
    hours: "4–6",
    atCostMin: 400,
    atCostMax: 600,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "case_study",
    name: "Case study page",
    category: "pages",
    price: 300,
    description: "Structured long-form project write-up with images.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
  },
  {
    id: "legal_page",
    name: "Legal page (privacy / terms)",
    category: "pages",
    price: 100,
    description: "Styled to match site. Client supplies text.",
    hours: "0.5–1",
    atCostMin: 50,
    atCostMax: 100,
    marginNote: "Good margin.",
  },
  {
    id: "404",
    name: "404 error page",
    category: "pages",
    price: 150,
    description: "Branded, with navigation back to site.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "sitemap_page",
    name: "Sitemap page",
    category: "pages",
    price: 100,
    description: "HTML sitemap page for users.",
    hours: "0.5–1",
    atCostMin: 50,
    atCostMax: 100,
    marginNote: "Good margin.",
  },
  {
    id: "seo_setup",
    name: "On-page SEO setup",
    category: "seo",
    price: 350,
    description: "Meta tags, OG tags, sitemap, robots.txt, Search Console.",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
    badges: ["upsell"],
  },
  {
    id: "schema",
    name: "Schema markup",
    category: "seo",
    price: 250,
    description: "Local business, reviews, FAQ structured data.",
    hours: "1.5–2",
    atCostMin: 150,
    atCostMax: 200,
    marginNote: "Good margin.",
  },
  {
    id: "analytics",
    name: "GA4 + Tag Manager",
    category: "seo",
    price: 300,
    description: "Install, goal/event tracking (form submit, button click).",
    hours: "2–3",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Good margin.",
    badges: ["upsell"],
  },
  {
    id: "speed",
    name: "Speed optimization",
    category: "seo",
    price: 350,
    description:
      "Image compression, caching, lazy load, Core Web Vitals fixes.",
    hours: "2–4",
    atCostMin: 200,
    atCostMax: 400,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "accessibility",
    name: "Accessibility (WCAG 2.1 AA)",
    category: "seo",
    price: 500,
    description:
      "For healthcare, gov, education clients who need compliance.",
    hours: "4–6",
    atCostMin: 400,
    atCostMax: 600,
    marginNote: "Slim now; solid later.",
  },
  {
    id: "cookie_banner",
    name: "Cookie consent banner",
    category: "seo",
    price: 150,
    description: "GDPR/CCPA compliant plugin configured and styled.",
    hours: "1–1.5",
    atCostMin: 100,
    atCostMax: 150,
    marginNote: "Good margin.",
  },
  {
    id: "redirects",
    name: "301 redirects (migration)",
    category: "seo",
    price: 200,
    description: "Map old URLs to new. Client supplies list or you audit.",
    hours: "1–3",
    atCostMin: 100,
    atCostMax: 300,
    marginNote: "Varies.",
  },
  {
    id: "hosting_setup",
    name: "Domain + hosting setup",
    category: "launch",
    price: 150,
    description: "DNS, SSL, managed WP hosting config. Excludes hosting cost.",
    hours: "1–2",
    atCostMin: 100,
    atCostMax: 200,
    marginNote: "Slim.",
  },
  {
    id: "content_upload",
    name: "Content upload",
    category: "launch",
    price: 100,
    priceUnit: "per hour",
    atCostRatePerHour: 75,
    description: "Place client copy + images into CMS.",
    hours: "varies",
    atCostMin: 75,
    atCostMax: 75,
    marginNote: "Good margin.",
  },
  {
    id: "content_migration",
    name: "Content migration",
    category: "launch",
    price: 400,
    priceMax: 700,
    description: "Porting content from old site to new build.",
    hours: "3–6",
    atCostMin: 300,
    atCostMax: 600,
    marginNote: "Good margin.",
  },
  {
    id: "training",
    name: "CMS training session",
    category: "launch",
    price: 200,
    description: "1-hour recorded walkthrough so client can self-manage.",
    hours: "1.5",
    atCostMin: 150,
    atCostMax: 150,
    marginNote: "Good margin.",
    badges: ["upsell"],
  },
  {
    id: "maintenance_basic",
    name: "Monthly maintenance, basic",
    category: "launch",
    price: 150,
    priceUnit: "per month",
    description:
      "Plugin/theme updates, backups, uptime monitoring, 1hr edits.",
    hours: "1–2/mo",
    atCostMin: 100,
    atCostMax: 200,
    marginNote: "Slim but recurring.",
    badges: ["popular", "upsell"],
  },
  {
    id: "maintenance_priority",
    name: "Monthly maintenance, priority",
    category: "launch",
    price: 250,
    priceUnit: "per month",
    description:
      "Everything in basic + priority response + 2hrs edits.",
    hours: "2–3/mo",
    atCostMin: 200,
    atCostMax: 300,
    marginNote: "Slim but recurring.",
  },
];

const BADGE_LABELS: Record<SectionBadge, string> = {
  popular: "Popular",
  scope_carefully: "Scope carefully",
  upsell: "Upsell",
};

export function formatSectionBadges(badges: SectionBadge[] | undefined) {
  if (!badges?.length) {
    return [];
  }
  return badges.map((b) => BADGE_LABELS[b]);
}

export type EstimatorModifier =
  | {
      id: string;
      name: string;
      type: "percent";
      value: number;
      description: string;
    }
  | {
      id: string;
      name: string;
      type: "flat_range";
      min: number;
      max: number;
      description: string;
    }
  | {
      id: string;
      name: string;
      type: "hourly";
      rate: number;
      description: string;
    };

export const MODIFIERS: EstimatorModifier[] = [
  {
    id: "rush",
    name: "Rush / fixed deadline",
    type: "percent",
    value: 0.15,
    description:
      "Tight timeline, weekend work, or squeezed scheduling. Adds 15% to the line-item subtotal.",
  },
  {
    id: "no_content",
    name: "No content provided",
    type: "flat_range",
    min: 300,
    max: 500,
    description: "Client has no copy or images ready at kickoff.",
  },
  {
    id: "migration",
    name: "Existing site migration",
    type: "flat_range",
    min: 300,
    max: 600,
    description: "Porting content from old site to new build.",
  },
  {
    id: "excessive_revisions",
    name: "Excessive revision rounds",
    type: "hourly",
    rate: 100,
    description:
      "Anything beyond 2 rounds per section. Enter estimated hours below.",
  },
];

export interface EstimatorQuantities {
  productImportBatches: number;
  contentUploadHours: number;
  maintenanceMonths: number;
  revisionHours: number;
}

const defaultQuantities: EstimatorQuantities = {
  productImportBatches: 1,
  contentUploadHours: 2,
  maintenanceMonths: 1,
  revisionHours: 2,
};

export function getDefaultQuantities(): EstimatorQuantities {
  return { ...defaultQuantities };
}

function quotedHigh(section: EstimatorSection): number {
  return section.priceMax ?? section.price;
}

/**
 * Low / high quoted dollars for this section when it counts toward the estimate.
 */
export function sectionLineAmounts(
  section: EstimatorSection,
  selected: boolean,
  quantities: EstimatorQuantities
): { low: number; high: number } {
  if (section.required) {
    return { low: section.price, high: quotedHigh(section) };
  }
  if (!selected) {
    return { low: 0, high: 0 };
  }
  if (section.id === "product_import") {
    const b = Math.max(1, quantities.productImportBatches);
    return {
      low: section.price * b,
      high: quotedHigh(section) * b,
    };
  }
  if (section.priceUnit === "per hour") {
    const h = Math.max(1, quantities.contentUploadHours);
    return {
      low: section.price * h,
      high: quotedHigh(section) * h,
    };
  }
  if (section.priceUnit === "per month") {
    const m = Math.max(1, quantities.maintenanceMonths);
    return {
      low: section.price * m,
      high: quotedHigh(section) * m,
    };
  }
  return { low: section.price, high: quotedHigh(section) };
}

export interface EstimateResult {
  itemSubtotalLow: number;
  itemSubtotalHigh: number;
  rushAmountLow: number;
  rushAmountHigh: number;
  flatLow: number;
  flatHigh: number;
  revisionAmount: number;
  low: number;
  high: number;
}

function roundHundred(n: number) {
  return Math.round(n / 100) * 100;
}

export function computeEstimate(input: {
  selectedOptionalIds: Set<string> | string[];
  modifierIds: Set<string> | string[];
  quantities?: Partial<EstimatorQuantities>;
}): EstimateResult {
  const selected = new Set(
    Array.isArray(input.selectedOptionalIds)
      ? input.selectedOptionalIds
      : [...input.selectedOptionalIds]
  );
  const modIds = new Set(
    Array.isArray(input.modifierIds)
      ? input.modifierIds
      : [...input.modifierIds]
  );

  const q = { ...defaultQuantities, ...input.quantities };

  let itemSubtotalLow = 0;
  let itemSubtotalHigh = 0;
  for (const section of SECTIONS) {
    const isOn = section.required || selected.has(section.id);
    const { low, high } = sectionLineAmounts(section, isOn, q);
    itemSubtotalLow += low;
    itemSubtotalHigh += high;
  }

  const rushMod = MODIFIERS.find(
    (m): m is Extract<EstimatorModifier, { type: "percent" }> =>
      m.id === "rush" && m.type === "percent"
  );
  const rushPct = rushMod?.value ?? 0.15;
  const rushSelected = modIds.has("rush");
  const rushAmountLow = rushSelected ? itemSubtotalLow * rushPct : 0;
  const rushAmountHigh = rushSelected ? itemSubtotalHigh * rushPct : 0;

  let flatLow = 0;
  let flatHigh = 0;
  for (const mod of MODIFIERS) {
    if (!modIds.has(mod.id) || mod.id === "rush") {
      continue;
    }
    if (mod.type !== "flat_range") {
      continue;
    }
    flatLow += mod.min;
    flatHigh += mod.max;
  }

  const revisionMod = MODIFIERS.find(
    (m): m is Extract<EstimatorModifier, { type: "hourly" }> =>
      m.id === "excessive_revisions" && m.type === "hourly"
  );
  const revisionAmount =
    modIds.has("excessive_revisions") && revisionMod
      ? Math.max(0, q.revisionHours) * revisionMod.rate
      : 0;

  const subLow = itemSubtotalLow + rushAmountLow + flatLow + revisionAmount;
  const subHigh =
    itemSubtotalHigh + rushAmountHigh + flatHigh + revisionAmount;

  const low = roundHundred(subLow);
  const high = roundHundred(subHigh);

  return {
    itemSubtotalLow,
    itemSubtotalHigh,
    rushAmountLow,
    rushAmountHigh,
    flatLow,
    flatHigh,
    revisionAmount,
    low,
    high,
  };
}
