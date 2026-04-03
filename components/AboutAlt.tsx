import Image from "next/image";

export default function AboutAlt() {
  return (
    <section
      id="about"
      className="about-alt-section relative overflow-hidden"
    >
      <div className="about-alt-grain" aria-hidden />

      <div className="section-container relative z-[1]">
        <div className="about-alt-grid">

          {/* ── Left: Portrait card ── */}
          <div className="about-alt-portrait-card glass-panel">

            {/* Headshot fills the card */}
            <div className="about-alt-img-wrap">
              <Image
                src="/images/headshot.png"
                alt="Elizabeth Regas, founder of Wizard Web Development"
                width={420}
                height={549}
                className="about-alt-img"
                priority={false}
                sizes="(max-width: 768px) 90vw, 380px"
              />
            </div>

            {/* Footer overlay */}
            <div className="about-alt-card-footer">
              <div className="about-alt-card-meta">
                <span className="about-alt-founder-label">FOUNDER</span>
                <span className="about-alt-founder-name">Elizabeth Regas</span>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="about-alt-content">

            {/* Decorated eyebrow */}
            <div className="about-alt-eyebrow-row">
              <span className="about-alt-eyebrow-line" aria-hidden />
              <span className="eyebrow">MEET THE WIZARD</span>
            </div>

            {/* Two-tone headline */}
            <h2 className="about-alt-headline">
              <span className="about-alt-headline-white">Designed with intuition,</span>
              <span className="about-alt-headline-accent">built for performance.</span>
            </h2>

            {/* Pull quote */}
            <blockquote className="about-alt-quote">
              Wizard Web Development creates modern, high-impact websites for
              brands, creatives, and service-based businesses that want more
              than a template.
            </blockquote>

            {/* Body */}
            <p className="about-alt-body">
              Every project begins with an intuitive design process that
              translates brand and vision into a clear digital experience. From
              there, the site is built with performance and responsiveness at
              its core, and deployed with a strong SEO foundation so the final
              result is not just beautiful, it is fast, accessible, and easy to
              find.
            </p>

            {/* Capability chips */}
            <div className="about-alt-chips">
              <span className="about-alt-chip">Strategic Design</span>
              <span className="about-alt-chip">Responsive &amp; Fast</span>
              <span className="about-alt-chip">1:1 Collaboration</span>
              <span className="about-alt-chip">Ongoing Support</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
