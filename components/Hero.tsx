"use client";

/**
 * Wizard Web Development — Premium Hero
 *
 * Full-width hero with centered content.
 * Scrolling rows span viewport; content constrained to max-w-[900px].
 */

import Image from "next/image";
import HeroImageBand from "./HeroImageBand";

export default function Hero() {
  return (
    <section
      className="hero relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Faint light beam — environmental lighting */}
      <div className="hero-light-beam" aria-hidden />

      {/* Soft ambient light above panel */}
      <div className="hero-ambient-top" aria-hidden />

      {/* Subtle center overlay — thumbnails ~12% dimmer behind panel area */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-full w-full max-w-[900px]"
        />
      </div>

      {/* Panel wrapper — full hero, rows attached 40px from panel */}
      <div className="hero-panel-wrapper absolute inset-0 flex items-center justify-center">
        <HeroImageBand />
        {/* Centered content wrapper */}
        <div className="hero-content relative z-10 w-full py-8 md:py-10">
          {/* Logo panel — sits above scrolling rows */}
          <div
            className="hero-panel hero-glass-panel hero-glass w-full max-w-[900px] overflow-hidden"
            style={{
              padding: "64px 80px",
            }}
          >
          {/* Bottom 30px — extra blur + brightness */}
          <div className="hero-glass-bottom-strip" aria-hidden />
          <div className="relative flex flex-col items-center text-center">
            <p className="hero-descriptor mb-4 font-medium uppercase">
              Design • Development • Performance
            </p>

            <h1>
              <span
                className="inline-block"
                style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.45))" }}
              >
                <Image
                  src="/images/heroLogo.png"
                  alt="Wizard Web Development"
                  width={480}
                  height={120}
                  className="mx-auto h-auto w-full max-w-[34rem] object-contain"
                  priority
                />
              </span>
            </h1>

            <p className="hero-tagline max-w-md">
              Modern websites, intuitively designed.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <a
                href="#projects"
                className="cta-primary hero-cta-btn flex min-h-[48px] w-[200px] items-center justify-center rounded-lg px-8 py-3.5 text-sm font-medium uppercase shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="cta-secondary hero-cta-btn flex min-h-[48px] w-[200px] items-center justify-center rounded-lg px-8 py-3.5 text-sm font-medium uppercase transition-all focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-2 focus:ring-offset-black/30"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
