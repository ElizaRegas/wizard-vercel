"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

type Direction = "ltr" | "rtl";

interface MarqueeRowProps {
  images: readonly string[];
  direction: Direction;
}

const DURATION_LTR = 45;
const DURATION_RTL = 48;

export default function MarqueeRow({ images, direction }: MarqueeRowProps) {
  const duplicatedImages = [...images, ...images];
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const [prefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion) return;

    let rafId: number;
    let retries = 0;
    const init = () => {
      const setWidth = track.scrollWidth / 2;
      if (setWidth <= 0 && retries++ < 60) {
        rafId = requestAnimationFrame(init);
        return;
      }

      const duration = direction === "ltr" ? DURATION_LTR : DURATION_RTL;
      const startX = direction === "ltr" ? 0 : -setWidth;
      const endX = direction === "ltr" ? -setWidth : 0;

      animationRef.current = track.animate(
        [
          { transform: `translate3d(${startX}px, 0, 0)` },
          { transform: `translate3d(${endX}px, 0, 0)` },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          easing: "linear",
        }
      );
    };

    rafId = requestAnimationFrame(init);

    const handleVisibility = () => {
      if (document.hidden) {
        animationRef.current?.pause();
      } else {
        animationRef.current?.play();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      animationRef.current?.cancel();
    };
  }, [direction, prefersReducedMotion]);

  return (
    <div
      className="w-full overflow-hidden"
      style={{ contain: "layout paint", transform: "translateZ(0)" }}
      aria-hidden
    >
      <div
        ref={trackRef}
        className="flex w-max gap-3 md:gap-4"
        style={{
          display: "flex",
          width: "max-content",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        {duplicatedImages.map((src, i) => (
          <div
            key={i}
            className="thumbnail flex-shrink-0 overflow-hidden rounded-[8px] bg-slate-900/50"
          >
            <Image
              src={src}
              alt=""
              width={240}
              height={150}
              loading="eager"
              className="h-[100px] w-[160px] object-cover md:h-[120px] md:w-[192px] lg:h-[130px] lg:w-[208px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
