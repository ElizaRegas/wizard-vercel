/**
 * Project estimator ranges (USD). Edit these values to match your real pricing.
 * The UI uses them only to show a ballpark; final quotes are always confirmed in writing.
 */

export type ProjectTypeId = "full" | "refresh" | "landing";
export type PageBandId = "s" | "m" | "l" | "xl";
export type LandingScopeId = "single" | "funnel";

export const PROJECT_TYPES: {
  id: ProjectTypeId;
  title: string;
  description: string;
  baseLow: number;
  baseHigh: number;
}[] = [
  {
    id: "full",
    title: "Full website experience",
    description: "Strategy, design, and build from the ground up.",
    baseLow: 9_000,
    baseHigh: 22_000,
  },
  {
    id: "refresh",
    title: "Website refresh",
    description: "Elevate design, clarity, and performance on an existing site.",
    baseLow: 4_500,
    baseHigh: 11_000,
  },
  {
    id: "landing",
    title: "Landing pages & campaigns",
    description: "Focused pages for a launch, event, or funnel.",
    baseLow: 2_800,
    baseHigh: 6_800,
  },
];

export const PAGE_BANDS: {
  id: PageBandId;
  label: string;
  hint: string;
}[] = [
  { id: "s", label: "1-5 pages", hint: "Core pages only" },
  { id: "m", label: "6-10 pages", hint: "Growing marketing site" },
  { id: "l", label: "11-20 pages", hint: "Larger content footprint" },
  { id: "xl", label: "21+ pages", hint: "Significant IA and templates" },
];

const PAGE_MULTIPLIERS: Record<PageBandId, number> = {
  s: 1,
  m: 1.12,
  l: 1.28,
  xl: 1.45,
};

export const LANDING_SCOPES: {
  id: LandingScopeId;
  label: string;
  hint: string;
  multiplier: number;
}[] = [
  { id: "single", label: "Single landing page", hint: "One focused URL", multiplier: 1 },
  {
    id: "funnel",
    label: "2-5 page campaign",
    hint: "Sequence of connected pages",
    multiplier: 1.22,
  },
];

export const ADD_ONS: {
  id: string;
  label: string;
  blurb: string;
  low: number;
  high: number;
}[] = [
  {
    id: "cms",
    label: "Content editing setup",
    blurb: "You update copy and images without a developer.",
    low: 1_200,
    high: 3_200,
  },
  {
    id: "blog",
    label: "Blog or news",
    blurb: "Articles, categories, and listing templates.",
    low: 800,
    high: 2_200,
  },
  {
    id: "commerce",
    label: "Small catalog checkout",
    blurb: "Limited SKUs, payments, and order flow.",
    low: 4_500,
    high: 12_000,
  },
  {
    id: "booking",
    label: "Booking or scheduling",
    blurb: "Third-party embed and on-brand styling.",
    low: 600,
    high: 1_600,
  },
  {
    id: "i18n",
    label: "Second language",
    blurb: "Structured duplicate content and language switch.",
    low: 2_000,
    high: 5_000,
  },
];

export const RUSH_MULTIPLIER = 1.15;

export function computeEstimate(input: {
  projectType: ProjectTypeId;
  pageBand: PageBandId;
  landingScope: LandingScopeId;
  addOnIds: string[];
  rush: boolean;
}): { low: number; high: number } {
  const pt = PROJECT_TYPES.find((p) => p.id === input.projectType);
  if (!pt) {
    return { low: 0, high: 0 };
  }

  let low = pt.baseLow;
  let high = pt.baseHigh;

  if (input.projectType === "landing") {
    const scope = LANDING_SCOPES.find((s) => s.id === input.landingScope);
    const mult = scope?.multiplier ?? 1;
    low *= mult;
    high *= mult;
  } else {
    const mult = PAGE_MULTIPLIERS[input.pageBand] ?? 1;
    low *= mult;
    high *= mult;
  }

  for (const id of input.addOnIds) {
    const add = ADD_ONS.find((a) => a.id === id);
    if (add) {
      low += add.low;
      high += add.high;
    }
  }

  if (input.rush) {
    low *= RUSH_MULTIPLIER;
    high *= RUSH_MULTIPLIER;
  }

  const round = (n: number) => Math.round(n / 100) * 100;
  return { low: round(low), high: round(high) };
}
