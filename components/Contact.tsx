"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="section-container contact-section-inner relative z-[1]">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="eyebrow contact-eyebrow">WORK TOGETHER</span>
            <h2 id="contact-heading" className="contact-headline">
              Let&apos;s create a website that feels as strong as your work.
            </h2>
            <p className="contact-lede">
              From full website builds to thoughtful refreshes, I help shape
              digital experiences that are clear, elevated, and built to perform.
            </p>
            <ul className="contact-detail-list" role="list">
              <li>Based in Georgia, working remotely</li>
              <li>Websites for brands, creatives, and service businesses</li>
              <li>Typical response within 1–2 business days</li>
            </ul>
          </div>

          <div className="contact-form-shell">
            <form className="contact-form" onSubmit={handleSubmit}>
              {sent ? (
                <p className="contact-form-thanks" role="status">
                  Thank you. Your note is received; you&apos;ll hear back soon.
                </p>
              ) : (
                <>
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-brand">Business / brand name</label>
                    <input
                      id="contact-brand"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      placeholder="Studio or company name"
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-project-type">Project type</label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      className="contact-input contact-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="full-website">Full website experience</option>
                      <option value="refresh">Website refresh</option>
                      <option value="landing">Landing page / campaign</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-budget">Budget range</label>
                    <select
                      id="contact-budget"
                      name="budget"
                      className="contact-input contact-select"
                      defaultValue=""
                    >
                      <option value="">Prefer not to say</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-20k">$10,000 – $20,000</option>
                      <option value="20k-plus">$20,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your goals, timeline, and anything else that helps."
                      required
                      className="contact-input contact-textarea"
                    />
                  </div>
                  <button type="submit" className="contact-submit cta-primary">
                    Send Inquiry
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
