import Link from "next/link";

export default function Process() {
  return (
    <section id="process" className="selected-work">
      <div className="section-container">
        <div className="section-header">
          <span className="eyebrow">PROCESS</span>
          <h2>A clear path from idea to launch.</h2>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <span className="process-step-num">01</span>
            <div className="process-step-body">
              <h3 className="process-step-title">Discovery & Strategy</h3>
              <p className="process-step-desc">
                Understanding your goals, audience, and positioning.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span className="process-step-num">02</span>
            <div className="process-step-body">
              <h3 className="process-step-title">Design</h3>
              <p className="process-step-desc">
                Translating vision into a refined, intentional visual system.
              </p>
            </div>
          </div>
          <div className="process-step">
            <span className="process-step-num">03</span>
            <div className="process-step-body">
              <h3 className="process-step-title">Build & Launch</h3>
              <p className="process-step-desc">
                Clean development, performance optimization, and deployment.
              </p>
            </div>
          </div>
        </div>

        <div id="services" className="process-services-cards">
          <div className="stacked-card about-content-panel stacked-card-panel">
            <h3 className="stacked-card-title">Full Website Experience</h3>
            <p className="stacked-card-text">
              A complete, custom-built website designed from the ground up. Every
              element is crafted with strategy, clarity, and performance in mind.
            </p>
          </div>

          <div className="stacked-card about-content-panel stacked-card-panel">
            <h3 className="stacked-card-title">Website Refresh</h3>
            <p className="stacked-card-text">
              For existing websites that need refinement. Improve clarity, elevate
              the design, and optimize performance without starting from scratch.
            </p>
          </div>

          <div className="stacked-card about-content-panel stacked-card-panel">
            <h3 className="stacked-card-title">Landing Pages & Campaign Builds</h3>
            <p className="stacked-card-text">
              Focused, conversion-driven pages designed to support launches,
              events, or marketing campaigns.
            </p>
          </div>
        </div>

        <div className="process-services-cta">
          <Link
            href="/estimate"
            className="cta-primary hero-cta-btn inline-flex min-h-[48px] items-center justify-center rounded-[8px] px-8 py-3.5 text-sm font-medium uppercase tracking-wide shadow-lg no-underline focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
          >
            Estimate your project
          </Link>
        </div>
      </div>
    </section>
  );
}
