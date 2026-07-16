"use client";

import { PhotoSlideshow } from "@/components/motion/photo-slideshow";
import { useSlideshow } from "@/components/motion/use-slideshow";
import { weddingGallery } from "@/lib/data/galleries";

export function Hero() {
  const { ref, index, onMouseEnter, onMouseLeave } = useSlideshow(weddingGallery.length, 2000);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Casamentos"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <PhotoSlideshow images={weddingGallery} index={index} altPrefix="Casamento" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/45 to-transparent" />
    </section>
  );
}
