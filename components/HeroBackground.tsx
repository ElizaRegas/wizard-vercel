"use client";

/**
 * HeroBackground — Moving image field behind center content only
 *
 * Layer order (back to front):
 * 1. Image field container (centered band, masked edges)
 * 2. MarqueeRow × 2 (top L→R, bottom R→L)
 * 3. Dark overlay above images
 * 4. Radial accent glow
 */

import MarqueeRow from "./MarqueeRow";
import { PORTFOLIO_IMAGES } from "@/portfolioImages";

export default function HeroBackground() {
  return (
    <>
      {/* Image field: centered band, concentrated behind content */}
      <div
        className="absolute left-1/2 top-1/2 h-[52vh] w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden md:w-[85vw] md:max-w-6xl"
        aria-hidden
      >
        {/* Mask: fade left and right edges so rows blend into background */}
        <div
          className="flex h-full flex-col justify-between gap-2 py-3 md:gap-3 md:py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <MarqueeRow images={PORTFOLIO_IMAGES} direction="ltr" />
          <MarqueeRow images={PORTFOLIO_IMAGES} direction="rtl" />
        </div>
      </div>

      {/* Dark overlay above image rows — top/bottom quieter, center slightly lighter for panel */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0f1419 0%, transparent 25%, transparent 75%, #0f1419 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#0f1419]/60"
        aria-hidden
      />

      {/* Faint radial accent glow behind center content */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[50vh] w-full max-w-2xl rounded-full opacity-[0.06] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #6f1309 0%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
}
