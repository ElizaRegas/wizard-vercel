"use client";

/**
 * HeroImageBand — Rows attached to hero-panel, 40px from top/bottom edges
 *
 * Positioned relative to the centered panel (max 420px tall).
 */

import MarqueeRow from "./MarqueeRow";
import { PORTFOLIO_IMAGES } from "@/portfolioImages";

export default function HeroImageBand() {
  return (
    <>
      {/* Top row — bottom 40px overlaps panel */}
      <div
        className="scrolling-row scrolling-row-top absolute left-0 right-0 z-[1] h-auto overflow-hidden"
        style={{
          top: "calc(50% - 350px)",
          maskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
        }}
        aria-hidden
      >
        <MarqueeRow images={PORTFOLIO_IMAGES} direction="ltr" />
        <div
          className="absolute inset-0"
          aria-hidden
        />
      </div>

      {/* Bottom row — top 40px overlaps panel */}
      <div
        className="scrolling-row scrolling-row-bottom absolute left-0 right-0 z-[1] h-auto overflow-hidden"
        style={{
          top: "calc(50% + 221px)",
          maskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
        }}
        aria-hidden
      >
        <MarqueeRow images={PORTFOLIO_IMAGES} direction="rtl" />
        <div
          className="absolute inset-0"
          aria-hidden
        />
      </div>
    </>
  );
}
