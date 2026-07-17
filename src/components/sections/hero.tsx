"use client";

import { useEffect, useState } from "react";
import { PhotoSlideshow } from "@/components/motion/photo-slideshow";
import { useSlideshow } from "@/components/motion/use-slideshow";
import { weddingGallery } from "@/lib/data/galleries";

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function Hero() {
  // Starts in the fixed order to match SSR output, then shuffles once
  // mounted on the client so the sequence isn't predictable on repeat visits.
  const [images, setImages] = useState(weddingGallery);
  useEffect(() => setImages(shuffle(weddingGallery)), []);
  const { ref, index } = useSlideshow(images.length, 3000);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Casamentos"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <PhotoSlideshow images={images} index={index} altPrefix="Casamento" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/45 to-transparent" />
    </section>
  );
}
