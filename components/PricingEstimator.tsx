"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  ADD_ONS,
  computeEstimate,
  LANDING_SCOPES,
  PAGE_BANDS,
  PROJECT_TYPES,
  type LandingScopeId,
  type PageBandId,
  type ProjectTypeId,
} from "@/lib/pricingEstimatorConfig";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatRange(low: number, high: number) {
  return `${currency.format(low)} – ${currency.format(high)}`;
}

export default function PricingEstimator() {
  const baseId = useId();
  const [projectType, setProjectType] = useState<ProjectTypeId>("full");
  const [pageBand, setPageBand] = useState<PageBandId>("s");
  const [landingScope, setLandingScope] = useState<LandingScopeId>("single");
  const [addOnIds, setAddOnIds] = useState<string[]>([]);
  const [rush, setRush] = useState(false);

  const estimate = useMemo(
    () =>
      computeEstimate({
        projectType,
        pageBand,
        landingScope,
        addOnIds,
        rush,
      }),
    [projectType, pageBand, landingScope, addOnIds, rush]
  );

  function toggleAddOn(id: string) {
    setAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="pricing-estimator">
      <div className="pricing-estimator-layout">
        <div className="pricing-estimator-controls">
          <fieldset className="pricing-estimator-fieldset">
            <legend className="pricing-estimator-legend">Project type</legend>
            <div className="pricing-estimator-type-grid">
              {PROJECT_TYPES.map((pt) => {
                const inputId = `${baseId}-type-${pt.id}`;
                const selected = projectType === pt.id;
                return (
                  <div key={pt.id} className="pricing-estimator-option-wrap">
                    <input
                      id={inputId}
                      type="radio"
                      name="projectType"
                      value={pt.id}
                      checked={selected}
                      onChange={() => setProjectType(pt.id)}
                      className="pricing-estimator-sr-input"
                    />
                    <label
                      htmlFor={inputId}
                      className={
                        selected
                          ? "pricing-estimator-option pricing-estimator-option--active"
                          : "pricing-estimator-option"
                      }
                    >
                      <span className="pricing-estimator-option-title">
                        {pt.title}
                      </span>
                      <span className="pricing-estimator-option-desc">
                        {pt.description}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>

          {projectType === "landing" ? (
            <fieldset className="pricing-estimator-fieldset">
              <legend className="pricing-estimator-legend">Campaign scope</legend>
              <div className="pricing-estimator-chip-row">
                {LANDING_SCOPES.map((scope) => {
                  const chipId = `${baseId}-landing-${scope.id}`;
                  const on = landingScope === scope.id;
                  return (
                    <div key={scope.id}>
                      <input
                        id={chipId}
                        type="radio"
                        name="landingScope"
                        value={scope.id}
                        checked={on}
                        onChange={() => setLandingScope(scope.id)}
                        className="pricing-estimator-sr-input"
                      />
                      <label
                        htmlFor={chipId}
                        className={
                          on
                            ? "pricing-estimator-chip pricing-estimator-chip--active"
                            : "pricing-estimator-chip"
                        }
                      >
                        <span className="pricing-estimator-chip-label">
                          {scope.label}
                        </span>
                        <span className="pricing-estimator-chip-hint">
                          {scope.hint}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          ) : (
            <fieldset className="pricing-estimator-fieldset">
              <legend className="pricing-estimator-legend">
                Size of the site
              </legend>
              <div className="pricing-estimator-chip-row pricing-estimator-chip-row--wrap">
                {PAGE_BANDS.map((band) => {
                  const chipId = `${baseId}-pages-${band.id}`;
                  const on = pageBand === band.id;
                  return (
                    <div key={band.id}>
                      <input
                        id={chipId}
                        type="radio"
                        name="pageBand"
                        value={band.id}
                        checked={on}
                        onChange={() => setPageBand(band.id)}
                        className="pricing-estimator-sr-input"
                      />
                      <label
                        htmlFor={chipId}
                        className={
                          on
                            ? "pricing-estimator-chip pricing-estimator-chip--active"
                            : "pricing-estimator-chip"
                        }
                      >
                        <span className="pricing-estimator-chip-label">
                          {band.label}
                        </span>
                        <span className="pricing-estimator-chip-hint">
                          {band.hint}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          )}

          <fieldset className="pricing-estimator-fieldset">
            <legend className="pricing-estimator-legend">Add-ons</legend>
            <p className="pricing-estimator-hint-line">
              Optional. Each item nudges the range based on typical effort.
            </p>
            <ul className="pricing-estimator-addons">
              {ADD_ONS.map((a) => {
                const checked = addOnIds.includes(a.id);
                const cbId = `${baseId}-addon-${a.id}`;
                return (
                  <li key={a.id}>
                    <label className="pricing-estimator-checkbox-row">
                      <input
                        id={cbId}
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddOn(a.id)}
                        className="pricing-estimator-checkbox"
                      />
                      <span className="pricing-estimator-checkbox-body">
                        <span className="pricing-estimator-checkbox-label">
                          {a.label}
                        </span>
                        <span className="pricing-estimator-checkbox-blurb">
                          {a.blurb}
                        </span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <fieldset className="pricing-estimator-fieldset">
            <legend className="pricing-estimator-legend">Timeline</legend>
            <label className="pricing-estimator-rush">
              <input
                type="checkbox"
                checked={rush}
                onChange={(e) => setRush(e.target.checked)}
                className="pricing-estimator-checkbox"
              />
              <span className="pricing-estimator-rush-copy">
                <span className="pricing-estimator-checkbox-label">
                  Rush or fixed deadline
                </span>
                <span className="pricing-estimator-checkbox-blurb">
                  Tighter scheduling typically adds about 15% to cover focused
                  turnaround.
                </span>
              </span>
            </label>
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
