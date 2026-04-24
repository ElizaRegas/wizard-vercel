export default function StackedServiceCards() {
  return (
    <section id="services" className="stacked-cards-section">
      <div className="section-container">
        <div className="stacked-card about-content-panel stacked-card-panel">
          <h3 className="stacked-card-title">Full Website Experience</h3>
          <p className="stacked-card-text">
            A complete, custom-built website designed from the ground up. Every
            element is crafted with strategy, clarity, and performance in mind.
          </p>
          <div className="about-capability-row flex flex-wrap">
            <span className="about-capability-chip">Custom design system</span>
            <span className="about-capability-chip">UX / UI strategy</span>
            <span className="about-capability-chip">Responsive development</span>
            <span className="about-capability-chip">Performance optimization</span>
            <span className="about-capability-chip">SEO-ready structure</span>
          </div>
        </div>

        <div className="stacked-card about-content-panel stacked-card-panel">
          <h3 className="stacked-card-title">Website Refresh</h3>
          <p className="stacked-card-text">
            For existing websites that need refinement. Improve clarity, elevate
            the design, and optimize performance without starting from scratch.
          </p>
          <div className="about-capability-row flex flex-wrap">
            <span className="about-capability-chip">Visual redesign</span>
            <span className="about-capability-chip">UX improvements</span>
            <span className="about-capability-chip">Speed optimization</span>
            <span className="about-capability-chip">Content structure refinement</span>
          </div>
        </div>

        <div className="stacked-card about-content-panel stacked-card-panel">
          <h3 className="stacked-card-title">Landing Pages & Campaign Builds</h3>
          <p className="stacked-card-text">
            Focused, conversion-driven pages designed to support launches,
            events, or marketing campaigns.
          </p>
          <div className="about-capability-row flex flex-wrap">
            <span className="about-capability-chip">Sales pages</span>
            <span className="about-capability-chip">Event pages</span>
            <span className="about-capability-chip">Lead generation</span>
            <span className="about-capability-chip">Funnel support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
