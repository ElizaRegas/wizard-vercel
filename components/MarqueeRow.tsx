"use client";

import Image from "next/image";

type Direction = "ltr" | "rtl";

interface MarqueeRowProps {
  images: readonly string[];
  direction: Direction;
}

export default function MarqueeRow({ images, direction }: MarqueeRowProps) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden" aria-hidden>
      <div
        className={`flex w-max gap-3 md:gap-4 ${direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl"}`}
        style={{
          display: "flex",
          width: "max-content",
          backfaceVisibility: "hidden",
        }}
      >
        {duplicatedImages.map((src, i) => (
          <div
            key={i}
            className="thumbnail flex-shrink-0 overflow-hidden rounded-lg bg-slate-900/50"
          >
            <Image
              src={src}
              alt=""
              width={240}
              height={150}
              className="h-[100px] w-[160px] object-cover md:h-[120px] md:w-[192px] lg:h-[130px] lg:w-[208px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
