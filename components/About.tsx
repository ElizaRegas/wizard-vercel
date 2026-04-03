"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative overflow-hidden"
    >
      {/* Subtle atmospheric glow behind portrait */}
      <div className="about-section-glow" aria-hidden />

      <div className="about-inner section-container relative z-10 flex flex-col items-start gap-16 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-20">
        {/* Left column, text content: subtle panel surface */}
        <div className="about-content about-content-panel pb-4 md:pb-0">
          <Link href="#about" className="about-pill mb-6 inline-block">
            MEET THE WIZARD
          </Link>
          <h2 className="about-headline mb-10 text-[2.5rem] font-semibold leading-[1.3] tracking-tight text-white md:text-[3rem] md:mb-12">
            Websites designed with intuition, built for performance.
          </h2>
          <div className="about-body">
            <p className="max-w-[34ch]">
              Wizard Web Development creates modern, high-impact websites for
              brands, creatives, and service-based businesses that want more than
              a template. Every project begins with an intuitive design process
              that translates brand and vision into a clear digital experience.
            </p>
            <p className="max-w-[34ch]">
              From there, the site is built with performance and responsiveness
              at its core, and deployed with a strong SEO foundation so the final
              result is not just beautiful, it is fast, accessible, and easy to find.
            </p>
          </div>
          <div className="about-capability-row flex flex-wrap">
            <span className="about-capability-chip">
              <svg className="about-capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 12L12 2M12 12L12 22M12 12L2 12M12 12L22 12M12 12L5.64 5.64M12 12L18.36 18.36M12 12L5.64 18.36M12 12L18.36 5.64" />
              </svg>
              Intuitive design
            </span>
            <span className="about-capability-chip">
              <svg className="about-capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Clean development
            </span>
            <span className="about-capability-chip">
              <svg className="about-capability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Thoughtful user experience
            </span>
          </div>
        </div>

        {/* Right column, portrait card, vertically centered with headline block */}
        <div className="about-visual relative flex w-full items-center justify-center pt-12 md:pt-0">
          <div className="about-portrait-wrapper relative flex justify-center">
            {/* Subtle radial glow behind portrait */}
            <div className="about-portrait-glow" aria-hidden />
            <div className="about-portrait-ring" aria-hidden />
            <div className="about-portrait-stack">
              {/* Vertical glass spine: restrained depth accent behind right edge */}
              <div className="about-portrait-spine" aria-hidden />
              <div className="about-portrait-frame">
                <div className="about-headshot-inner">
                  <Image
                    src="/images/headshot.png"
                    alt="Elizabeth Regas, Wizard Web Development"
                    width={420}
                    height={549}
                    className="h-auto w-full object-cover"
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
