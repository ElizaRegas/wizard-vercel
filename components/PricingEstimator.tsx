"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  CATEGORY_INTROS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  computeEstimate,
  formatSectionBadges,
  MODIFIERS,
  SECTIONS,
  type EstimatorModifier,
  type EstimatorSection,
} from "@/lib/pricingEstimatorConfig";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const MAINTENANCE_IDS = ["maintenance_basic", "maintenance_priority"] as const;

function formatRange(low: number, high: number) {
  if (low === high) {
    return currency.format(low);
  }
  return `${currency.format(low)} – ${currency.format(high)}`;
}

function formatQuotedLabel(s: EstimatorSection) {
  const unit =
    s.priceUnit === "per hour"
      ? "/hr"
      : s.priceUnit === "per month"
        ? "/mo"
        : "";
  const hi = s.priceMax ?? s.price;
  if (s.price === hi) {
    return `${currency.format(s.price)}${unit}`;
  }
  return `${currency.format(s.price)}–${currency.format(hi)}${unit}`;
}

function SectionMetrics({ s, hours, price, priceMax }: {
  s: EstimatorSection;
  hours?: string;
  price?: number;
  priceMax?: number;
}) {
  const h = hours ?? s.hours;
  const lo = price ?? s.price;
  const hi = priceMax ?? s.priceMax ?? s.price;
  const unit =
    s.priceUnit === "per hour" ? "/hr"
    : s.priceUnit === "per month" ? "/mo"
    : "";
  const costLabel = lo === hi
    ? `${currency.format(lo)}${unit}`
    : `${currency.format(lo)}–${currency.format(hi)}${unit}`;
  return (
    <dl className="pricing-estimator-metrics">
      <div className="pricing-estimator-metric">
        <dt>Hours</dt>
        <dd>{h}</dd>
      </div>
      <div className="pricing-estimator-metric">
        <dt>Estimated Cost</dt>
        <dd>{costLabel}</dd>
      </div>
    </dl>
  );
}

function BadgeList({ s }: { s: EstimatorSection }) {
  const labels = formatSectionBadges(s.badges);
  if (!labels.length) {
    return null;
  }
  return (
    <span className="pricing-estimator-badges">
      {labels.map((label) => (
        <span key={label} className="pricing-estimator-badge">
          {label}
        </span>
      ))}
    </span>
  );
}

const PATHS = [
  { id: "full", label: "Full Website" },
  { id: "refresh", label: "Website Refresh" },
  { id: "landing", label: "Landing Pages" },
] as const;

type PathId = (typeof PATHS)[number]["id"];

export default function PricingEstimator() {
  const baseId = useId();
  const [activePath, setActivePath] = useState<PathId>("full");
  const [selectedOptional, setSelectedOptional] = useState<Set<string>>(
    () => new Set()
  );
  const [modifierIds, setModifierIds] = useState<Set<string>>(
    () => new Set()
  );
  const [productImportBatches, setProductImportBatches] = useState(1);
  const [contentUploadHours, setContentUploadHours] = useState(2);
  const [maintenanceMonths, setMaintenanceMonths] = useState(1);
  const [revisionHours, setRevisionHours] = useState(2);
  const [placements, setPlacements] = useState<Record<string, string>>({});

  const quantities = useMemo(
    () => ({
      productImportBatches,
      contentUploadHours,
      maintenanceMonths,
      revisionHours,
    }),
    [
      productImportBatches,
      contentUploadHours,
      maintenanceMonths,
      revisionHours,
    ]
  );

  const estimate = useMemo(
    () =>
      computeEstimate({
        selectedOptionalIds: selectedOptional,
        modifierIds,
        quantities,
        placements,
      }),
    [selectedOptional, modifierIds, quantities, placements]
  );

  const breakdown = useMemo(() => {
    const lines: { label: string; amount: string }[] = [
      {
        label: "Line items (quoted)",
        amount: formatRange(
          estimate.itemSubtotalLow,
          estimate.itemSubtotalHigh
        ),
      },
    ];
    if (estimate.rushAmountLow > 0 || estimate.rushAmountHigh > 0) {
      lines.push({
        label: "Rush (on line items)",
        amount: formatRange(
          estimate.rushAmountLow,
          estimate.rushAmountHigh
        ),
      });
    }
    for (const mod of MODIFIERS) {
      if (!modifierIds.has(mod.id) || mod.type === "percent") {
        continue;
      }
      if (mod.type === "hourly") {
        if (estimate.revisionAmount > 0) {
          lines.push({
            label: mod.name,
            amount: currency.format(estimate.revisionAmount),
          });
        }
        continue;
      }
      lines.push({
        label: mod.name,
        amount: `${currency.format(mod.min)} – ${currency.format(mod.max)}`,
      });
    }
    return lines;
  }, [
    estimate.itemSubtotalLow,
    estimate.itemSubtotalHigh,
    estimate.rushAmountLow,
    estimate.rushAmountHigh,
    estimate.revisionAmount,
    modifierIds,
  ]);

  function toggleOptional(id: string) {
    setSelectedOptional((prev) => {
      const next = new Set(prev);
      if (MAINTENANCE_IDS.includes(id as (typeof MAINTENANCE_IDS)[number])) {
        if (next.has(id)) {
          next.delete(id);
        } else {
          for (const m of MAINTENANCE_IDS) {
            next.delete(m);
          }
          next.add(id);
        }
        return next;
      }
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function toggleModifier(id: string) {
    setModifierIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const requiredSections = SECTIONS.filter((s) => s.required);

  return (
    <div className="pricing-estimator">
      <div className="pricing-estimator-tabs" role="tablist">
        {PATHS.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={activePath === p.id}
            className={`pricing-estimator-tab${activePath === p.id ? " pricing-estimator-tab--active" : ""}`}
            onClick={() => setActivePath(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="pricing-estimator-layout">
        <div className="pricing-estimator-controls">
          <fieldset className="pricing-estimator-fieldset">
            <legend className="pricing-estimator-legend">
              Included in every build
            </legend>
            <p className="pricing-estimator-catalog-hint">
              Required baseline so every quote starts from the same foundation.
            </p>
            <ul className="pricing-estimator-included-list" role="list">
              {requiredSections.map((s) => (
                <li key={s.id} className="pricing-estimator-included-row">
                  <span className="pricing-estimator-included-badge">
                    Required
                  </span>
                  <div className="pricing-estimator-included-body">
                    <div className="pricing-estimator-catalog-title-row">
                      <span className="pricing-estimator-catalog-name">
                        {s.name}
                      </span>
                      <BadgeList s={s} />
                    </div>
                    <SectionMetrics s={s} />
                    <p className="pricing-estimator-catalog-desc">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </fieldset>

          {CATEGORY_ORDER.map((category) => {
            const inCat = SECTIONS.filter(
              (s) => s.category === category && !s.required
            );
            if (inCat.length === 0) {
              return null;
            }
            const intro = CATEGORY_INTROS[category];
            return (
              <fieldset key={category} className="pricing-estimator-fieldset">
                <legend className="pricing-estimator-legend">
                  {CATEGORY_LABELS[category]}
                </legend>
                {intro ? (
                  <p className="pricing-estimator-category-intro">{intro}</p>
                ) : null}
                <ul className="pricing-estimator-catalog" role="list">
                  {inCat.map((s) => {
                    const checked = selectedOptional.has(s.id);
                    const cbId = `${baseId}-${s.id}`;
                    const activePlacement = s.placementOptions?.find(
                      (p) => p.id === (placements[s.id] ?? s.placementOptions?.[0]?.id)
                    );
                    return (
                      <li key={s.id} className="pricing-estimator-catalog-item">
                        <div className="pricing-estimator-catalog-item-inner">
                          <input
                            id={cbId}
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                              toggleOptional(s.id);
                              if (!checked && s.placementOptions && !placements[s.id]) {
                                setPlacements((prev) => ({
                                  ...prev,
                                  [s.id]: s.placementOptions![0].id,
                                }));
                              }
                            }}
                            className="pricing-estimator-checkbox pricing-estimator-checkbox--catalog"
                          />
                          <label
                            htmlFor={cbId}
                            className="pricing-estimator-catalog-block"
                          >
                            <div className="pricing-estimator-catalog-title-row">
                              <span className="pricing-estimator-catalog-name">
                                {s.name}
                              </span>
                              <BadgeList s={s} />
                            </div>
                            <SectionMetrics
                              s={s}
                              hours={activePlacement?.hours}
                              price={activePlacement?.price}
                              priceMax={activePlacement?.priceMax}
                            />
                            <p className="pricing-estimator-catalog-desc">
                              {s.description}
                            </p>
                          </label>
                        </div>
                        {s.placementOptions && checked ? (
                          <div className="pricing-estimator-qty pricing-estimator-qty--indent">
                            <span className="pricing-estimator-placement-label">Placement</span>
                            <div className="pricing-estimator-placement-options">
                              {s.placementOptions.map((p) => (
                                <label key={p.id} className="pricing-estimator-placement-option">
                                  <input
                                    type="radio"
                                    name={`${cbId}-placement`}
                                    value={p.id}
                                    checked={(placements[s.id] ?? s.placementOptions![0].id) === p.id}
                                    onChange={() =>
                                      setPlacements((prev) => ({ ...prev, [s.id]: p.id }))
                                    }
                                    className="pricing-estimator-placement-radio"
                                  />
                                  <span className="pricing-estimator-placement-text">
                                    {p.label}
                                    <span className="pricing-estimator-placement-price">
                                      {currency.format(p.price)}–{currency.format(p.priceMax)}
                                    </span>
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {s.id === "product_import" && checked ? (
                          <div className="pricing-estimator-qty pricing-estimator-qty--indent">
                            <label htmlFor={`${cbId}-batches`}>
                              Batches (50 items each)
                            </label>
                            <input
                              id={`${cbId}-batches`}
                              type="number"
                              min={1}
                              max={99}
                              value={productImportBatches}
                              onChange={(e) =>
                                setProductImportBatches(
                                  Math.max(
                                    1,
                                    Math.min(
                                      99,
                                      Number(e.target.value) || 1
                                    )
                                  )
                                )
                              }
                              className="pricing-estimator-qty-input"
                            />
                          </div>
                        ) : null}
                        {s.id === "content_upload" && checked ? (
                          <div className="pricing-estimator-qty pricing-estimator-qty--indent">
                            <label htmlFor={`${cbId}-hours`}>
                              Quoted hours (upload time)
                            </label>
                            <input
                              id={`${cbId}-hours`}
                              type="number"
                              min={1}
                              max={80}
                              value={contentUploadHours}
                              onChange={(e) =>
                                setContentUploadHours(
                                  Math.max(
                                    1,
                                    Math.min(
                                      80,
                                      Number(e.target.value) || 1
                                    )
                                  )
                                )
                              }
                              className="pricing-estimator-qty-input"
                            />
                          </div>
                        ) : null}
                        {s.priceUnit === "per month" &&
                        checked &&
                        MAINTENANCE_IDS.includes(
                          s.id as (typeof MAINTENANCE_IDS)[number]
                        ) ? (
                          <div className="pricing-estimator-qty pricing-estimator-qty--indent">
                            <label htmlFor={`${cbId}-months`}>
                              Months in this estimate
                            </label>
                            <input
                              id={`${cbId}-months`}
                              type="number"
                              min={1}
                              max={24}
                              value={maintenanceMonths}
                              onChange={(e) =>
                                setMaintenanceMonths(
                                  Math.max(
                                    1,
                                    Math.min(
                                      24,
                                      Number(e.target.value) || 1
                                    )
                                  )
                                )
                              }
                              className="pricing-estimator-qty-input"
                            />
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
            );
          })}

          <fieldset className="pricing-estimator-fieldset">
            <legend className="pricing-estimator-legend">
              Price modifiers
            </legend>
            <p className="pricing-estimator-catalog-hint">
              Stack these on top of your line items when they apply.
            </p>
            <ul className="pricing-estimator-modifiers" role="list">
              {MODIFIERS.map((mod) => {
                const mid = `${baseId}-mod-${mod.id}`;
                const checked = modifierIds.has(mod.id);
                return (
                  <li key={mod.id}>
                    <div
                      className={
                        mod.type === "hourly"
                          ? "pricing-estimator-modifier-wrap"
                          : undefined
                      }
                    >
                      <label className="pricing-estimator-modifier-row">
                        <input
                          id={mid}
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleModifier(mod.id)}
                          className="pricing-estimator-checkbox"
                        />
                        <div className="pricing-estimator-modifier-body">
                          <div className="pricing-estimator-modifier-top">
                            <span className="pricing-estimator-modifier-name">
                              {mod.name}
                            </span>
                            <span className="pricing-estimator-modifier-tag">
                              {modifierTag(mod)}
                            </span>
                          </div>
                          <span className="pricing-estimator-modifier-desc">
                            {mod.description}
                          </span>
                        </div>
                      </label>
                      {mod.type === "hourly" && checked ? (
                        <div className="pricing-estimator-qty pricing-estimator-qty--modifier">
                          <label htmlFor={`${mid}-rev-hrs`}>
                            Extra revision hours
                          </label>
                          <input
                            id={`${mid}-rev-hrs`}
                            type="number"
                            min={0}
                            max={200}
                            value={revisionHours}
                            onChange={(e) =>
                              setRevisionHours(
                                Math.max(
                                  0,
                                  Math.min(
                                    200,
                                    Number(e.target.value) || 0
                                  )
                                )
                              )
                            }
                            className="pricing-estimator-qty-input"
                          />
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        </div>

        <aside
          className="pricing-estimator-summary glass-panel"
          aria-live="polite"
        >
          <p className="pricing-estimator-summary-eyebrow">Estimated range</p>
          <p className="pricing-estimator-summary-range">
            {formatRange(estimate.low, estimate.high)}
          </p>
          <ul className="pricing-estimator-summary-lines" role="list">
            {breakdown.map((row) => (
              <li key={row.label} className="pricing-estimator-summary-line">
                <span>{row.label}</span>
                <span>{row.amount}</span>
              </li>
            ))}
          </ul>
          <p className="pricing-estimator-summary-note">
            Rush applies to the line-item subtotal only. Flat modifiers widen
            the range. Revision hours bill at $100/hr when enabled. Maintenance
            uses the month count you set for this estimate.
          </p>
          <p className="pricing-estimator-summary-disclaimer">
            This is a self-serve guide, not a binding quote. Every project is
            scoped after we talk through goals, content, and integrations.
          </p>
          <Link
            href="/#contact"
            className="cta-primary hero-cta-btn pricing-estimator-summary-cta inline-flex min-h-[48px] w-full items-center justify-center rounded-[8px] px-6 py-3.5 text-sm font-medium uppercase tracking-wide shadow-lg no-underline focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
          >
            Book the next step
          </Link>
        </aside>
      </div>
    </div>
  );
}

function modifierTag(mod: EstimatorModifier) {
  if (mod.type === "percent") {
    return `+${Math.round(mod.value * 100)}% on subtotal`;
  }
  if (mod.type === "flat_range") {
    return `+${currency.format(mod.min)} – ${currency.format(mod.max)}`;
  }
  return `${currency.format(mod.rate)}/hr`;
}
