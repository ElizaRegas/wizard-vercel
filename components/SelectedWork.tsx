interface SelectedWorkProps {
  variant?: "default" | "services";
}

export default function SelectedWork({ variant = "default" }: SelectedWorkProps) {
  const isServices = variant === "services";

  return (
    <section id="work" className="selected-work">
      <div className="section-container">
        <div className="section-header">
          <span className="eyebrow">SELECTED WORK</span>
          <h2>
            {isServices
              ? "Selected work that reflects this process."
              : "A look at how strategy, design, and performance come together."}
          </h2>
          {!isServices && (
            <p>
              Each project is tailored to the brand, the audience, and the outcome.
            </p>
          )}
        </div>

        <div className="work-grid">
          <a
            href="https://johnproulx.com"
            className="work-card featured work-featured-span"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="featured-image">
              <img src="/images/heroJohnOne.png" alt="" />
            </div>
            <div className="featured-content">
              <h3>John Proulx</h3>
              <span>Artist Website</span>
              <p>
                Modern artist platform featuring events, recordings, and sheet
                music.
              </p>
              <div className="link">Visit Site →</div>
            </div>
          </a>

          <a
            href="https://jenhuber.com"
            className="work-card small"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="small-image">
              <img src="/images/heroJenOne.png" alt="" />
            </div>
            <div className="small-content">
              <h4>Jen Huber</h4>
              <span>Spiritual Healer</span>
              <div className="link">Visit Site →</div>
            </div>
          </a>
          <a
            href="https://mindyswellness.com"
            className="work-card small"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="small-image">
              <img src="/images/heroMindyOne.png" alt="" />
            </div>
            <div className="small-content">
              <h4>Mindy's Wellness</h4>
              <span>Health Spa</span>
              <div className="link">Visit Site →</div>
            </div>
          </a>
          <a
            href="https://valarieregas.com"
            className="work-card small"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="small-image">
              <img src="/images/heroValOne.png" alt="" />
            </div>
            <div className="small-content">
              <h4>Valarie Regas</h4>
              <span>Technology Evangelist</span>
              <div className="link">Visit Site →</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
