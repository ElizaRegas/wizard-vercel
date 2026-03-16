"use client";

import Image from "next/image";
import Link from "next/link";

const ANNOTATIONS = [
  {
    label: "Intuitive Design",
    position: "top-left",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="2.5" />
        <line x1="12" y1="9.5" x2="12" y2="4" />
        <line x1="12" y1="14.5" x2="12" y2="20" />
        <line x1="9.5" y1="12" x2="4" y2="12" />
        <line x1="14.5" y1="12" x2="20" y2="12" />
      </svg>
    ),
  },
  {
    label: "PageSpeed 98",
    position: "top-right",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "SEO Optimized",
    position: "bottom-left",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { label: "Intuitive design", icon: "design" },
  { label: "Performance-focused build", icon: "perf" },
  { label: "Search-optimized launch", icon: "seo" },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative overflow-hidden pt-[130px] pb-32 md:pb-44"
    >
      {/* Section-specific atmospheric layer — glow behind portrait side */}
      <div className="about-section-glow" aria-hidden />
      {/* Faint ghost UI elements */}
      <div className="atmosphere-ghost atmosphere-ghost-1" aria-hidden />
      <div className="atmosphere-ghost atmosphere-ghost-2" aria-hidden />

      <div className="about-inner relative z-10 mx-auto flex max-w-[1180px] flex-col items-start gap-16 px-6 md:flex-row md:items-center md:gap-14 lg:gap-20">
        {/* Left column — text content */}
        <div className="about-content flex-1 lg:max-w-[420px]">
          <Link href="#about" className="about-pill mb-8 inline-block">
            Meet the Wizard
          </Link>
          <h2 className="about-headline mb-[32px] text-[2.25rem] font-semibold leading-[1.3] tracking-tight text-white md:text-[2.75rem]">
            Websites designed with intuition, built for performance, and launched
            for visibility.
          </h2>
          <div className="about-body space-y-5 text-[1rem] md:text-[1.0625rem]">
            <p className="max-w-[38ch]">
              Wizard Web Development creates modern, high-impact websites for
              brands, creatives, and service-based businesses that want more than
              a template. Every project begins with an intuitive design process
              that translates brand and vision into a clear digital experience.
            </p>
            <p className="max-w-[38ch]">
              From there, the site is built with performance and responsiveness
              at its core, and deployed with a strong SEO foundation so the final
              result isn&apos;t just beautiful; it&apos;s fast, accessible, and
              easy to find.
            </p>
          </div>

          {/* Process flow — connected sequence */}
          <div className="about-process-flow mt-12 flex flex-wrap items-center gap-x-2 gap-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.label} className="about-process-item-wrapper flex flex-wrap items-center gap-x-2 gap-y-4">
                <span className="about-process-pill inline-flex items-center gap-2">
                  <span className="about-process-icon" aria-hidden>
                    {step.icon === "design" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="2.5" />
                        <line x1="12" y1="9.5" x2="12" y2="4" />
                        <line x1="9.5" y1="12" x2="4" y2="12" />
                      </svg>
                    )}
                    {step.icon === "perf" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {step.icon === "seo" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    )}
                  </span>
                  {step.label}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="about-process-connector hidden sm:inline" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right column — portrait hub with floating annotations */}
        <div className="about-visual relative w-full flex-shrink-0 pt-8 md:pt-[28px] lg:max-w-[500px]">
          {/* Radial UI system + portrait */}
          <div className="about-hub-wrapper relative">
            {/* Ghost UI rings behind portrait */}
            <div className="about-hub-ring about-hub-ring-1" aria-hidden />
            <div className="about-hub-ring about-hub-ring-2" aria-hidden />
            <div className="about-hub-ring about-hub-ring-3" aria-hidden />
            <div className="about-headshot-panel group relative overflow-hidden rounded-[24px]">
              <Image
                src="/images/headshot.png"
                alt="Elizabeth Regas, Wizard Web Development"
                width={500}
                height={654}
                className="h-auto w-full object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Floating annotation cards */}
            <div className="about-annotation about-annotation-top-left" role="presentation">
              <span className="about-annotation-icon" aria-hidden>{ANNOTATIONS[0].icon}</span>
              <span>{ANNOTATIONS[0].label}</span>
            </div>
            <div className="about-annotation about-annotation-top-right" role="presentation">
              <span className="about-annotation-icon" aria-hidden>{ANNOTATIONS[1].icon}</span>
              <span>{ANNOTATIONS[1].label}</span>
            </div>
            <div className="about-annotation about-annotation-bottom-left" role="presentation">
              <span className="about-annotation-icon" aria-hidden>{ANNOTATIONS[2].icon}</span>
              <span>{ANNOTATIONS[2].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
