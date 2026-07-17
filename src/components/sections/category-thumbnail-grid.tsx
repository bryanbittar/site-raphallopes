"use client";

import { useState } from "react";
import Image from "next/image";
import { PortfolioLightbox } from "@/components/sections/portfolio-lightbox";
import type { PortfolioItem } from "@/lib/data/portfolio";

export function CategoryThumbnailGrid({ items }: { items: PortfolioItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 lg:gap-5">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ampliar foto: ${item.caption}`}
            className="mb-4 block w-full break-inside-avoid overflow-hidden bg-sand lg:mb-5"
          >
            <Image
              src={item.src}
              alt={item.caption}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              quality={90}
              className="h-auto w-full transition-transform duration-500 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <PortfolioLightbox
        items={items}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
}
