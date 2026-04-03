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
            <span className="eyebrow">PROJECT ESTIMATOR</span>
            <h1>Price your project yourself</h1>
            <p>
              Choose the options that best match what you have in mind. The
              range updates instantly and reflects typical engagements; your
              final proposal may land above or below depending on discovery.
            </p>
          </header>
          <PricingEstimator />
        </div>
      </section>
    </main>
  );
}
