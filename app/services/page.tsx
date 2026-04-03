import Link from "next/link";
import SelectedWork from "@/components/SelectedWork";

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* 1. Hero section: same glass panel as homepage */}
      <section className="services-section" id="hero">
        <div className="hero-section-shell">
          <div
            className="hero-panel hero-glass-panel hero-glass services-hero-panel w-full max-w-[900px] overflow-hidden"
            style={{ padding: "64px 80px" }}
          >
            <div className="hero-glass-bottom-strip" aria-hidden />
            <div className="relative flex flex-col items-center text-center">
              <span className="eyebrow mb-4">SERVICES</span>
              <h1 className="services-hero-title">
                Built with intention. Designed to perform.
              </h1>
              <p className="hero-tagline max-w-xl">
                A clear, strategic approach to designing and building websites
                that are as effective as they are refined.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="#contact"
                  className="cta-primary hero-cta-btn flex min-h-[48px] w-[200px] items-center justify-center rounded-[8px] px-8 py-3.5 text-sm font-medium uppercase shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
                >
                  Start Project
                </Link>
                <Link
                  href="/#work"
                  className="cta-secondary hero-cta-btn flex min-h-[48px] w-[200px] items-center justify-center rounded-[8px] px-8 py-3.5 text-sm font-medium uppercase transition-all focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
                >
                  View Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glass" aria-hidden />

      {/* 2. Services section: 3 glass cards */}
      <section className="services-section" id="services">
        <div className="section-container">
          <div className="section-header">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Strategy, design, and performance in one place.</h2>
            <p>
              Every project gets the full treatment, no templates, no shortcuts.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card glass-panel">
              <h3>Full Website Experience</h3>
              <p>
                A complete, custom-built website designed from the ground up.
                Every detail is crafted with clarity, strategy, and performance in
                mind.
              </p>
            </div>
            <div className="service-card glass-panel">
              <h3>Website Refresh</h3>
              <p>
                For existing sites that need refinement. Improve clarity, elevate
                the design, and optimize performance without starting from
                scratch.
              </p>
            </div>
            <div className="service-card glass-panel">
              <h3>Landing Pages & Campaign Builds</h3>
              <p>
                Focused, conversion-driven pages designed to support launches,
                events, or marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glass" aria-hidden />

      {/* 3. Featured work: reuse component */}
      <SelectedWork variant="services" />

      <div className="section-divider-glass" aria-hidden />

      {/* 4. Qualification section: 2-column glass */}
      <section className="services-section" id="qualification">
        <div className="section-container">
          <div className="section-header">
            <span className="eyebrow">WHO WE WORK WITH</span>
            <h2>Brands, creatives, and businesses that want more.</h2>
          </div>
          <div className="qualification-grid">
            <div className="qualification-card glass-panel">
              <h3>This is a good fit if:</h3>
              <ul>
                <li>You want a site that performs, not just exists</li>
                <li>You value design and strategy equally</li>
                <li>You&apos;re ready to invest in quality</li>
              </ul>
            </div>
            <div className="qualification-card glass-panel">
              <h3>Not the right fit if:</h3>
              <ul>
                <li>You&apos;re looking for the lowest cost option</li>
                <li>You need something quick and disposable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glass" aria-hidden />

      {/* 5. Investment section: centered glass panel */}
      <section className="services-section" id="pricing">
        <div className="section-container">
          <div className="investment-panel glass-panel">
            <h3 className="investment-title">Investment</h3>
            <p className="investment-text">
              Full builds typically start at $X,XXX
              <br />
              Refresh projects start at $X,XXX
            </p>
            <p className="investment-subtext">
              Each project is scoped based on goals and complexity.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glass" aria-hidden />

      {/* 6. Final CTA section: hero-style glass, full-width, shorter */}
      <section className="services-section" id="contact">
        <div className="section-container">
          <div
            className="hero-panel hero-glass-panel hero-glass cta-hero-panel w-full overflow-hidden"
            style={{ padding: "48px 64px" }}
          >
            <div className="hero-glass-bottom-strip" aria-hidden />
            <div className="relative flex flex-col items-center text-center">
              <h2 className="cta-hero-headline">
                Let&apos;s build something that works.
              </h2>
              <p className="cta-hero-subtext">
                Tell me about your project and I&apos;ll guide you through the
                next steps.
              </p>
              <Link
                href="#contact"
                className="cta-primary hero-cta-btn flex min-h-[48px] w-[200px] items-center justify-center rounded-[8px] px-8 py-3.5 text-sm font-medium uppercase shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
