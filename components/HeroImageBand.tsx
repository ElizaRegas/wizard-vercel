"use client";

/**
 * HeroImageBand — Top and bottom rows with panel in the middle
 *
 * Top row at top: 0, bottom row at bottom: 0, panel floats in center.
 */

import MarqueeRow from "./MarqueeRow";
import { PORTFOLIO_IMAGES } from "@/portfolioImages";

const rowMask = {
  maskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
};

export default function HeroImageBand({ children }: { children?: React.ReactNode }) {
  return (
    <div className="hero-panel-wrapper relative flex flex-1 w-full flex-col">
      {/* Top row — positioned at top */}
      <div
        className="scrolling-row scrolling-row-top relative left-0 right-0 top-0 z-[1] h-auto overflow-hidden"
        style={rowMask}
        aria-hidden
      >
        <MarqueeRow images={PORTFOLIO_IMAGES} direction="ltr" />
        <div className="absolute inset-0" aria-hidden />
      </div>

      {/* Middle — hero panel floats centered */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-0">
        {children}
      </div>

      {/* Bottom row — positioned at bottom */}
      <div
        className="scrolling-row scrolling-row-bottom relative left-0 right-0 bottom-0 z-[1] mt-auto h-auto overflow-hidden"
        style={rowMask}
        aria-hidden
      >
        <MarqueeRow images={PORTFOLIO_IMAGES} direction="rtl" />
        <div className="absolute inset-0" aria-hidden />
      </div>
    </div>
  );
}
