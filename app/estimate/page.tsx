import type { Metadata } from "next";
import PricingEstimator from "@/components/PricingEstimator";

export const metadata: Metadata = {
  title: "Project estimator | Wizard Web Development",
  description:
    "Dial in scope and see a ballpark range for your website or landing project.",
};

export default function EstimatePage() {
  return (
    <main className="services-page estimate-page">
      <section className="services-section estimate-section">
        <div className="section-container">
          <header className="section-header estimate-header">
            <div className="work-eyebrow-row">
              <span className="work-eyebrow-line" aria-hidden />
              <span className="eyebrow">PROJECT ESTIMATOR</span>
              <span className="work-eyebrow-line" aria-hidden />
            </div>
            <h1>Price your project yourself</h1>
            <p>
              Every build starts from the included foundation. Add only the
              sections and modifiers you need; totals update as you go. Numbers
              are a guide until we scope the work together.
            </p>
          </header>
          <PricingEstimator />
        </div>
      </section>
    </main>
  );
}
