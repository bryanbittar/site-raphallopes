"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/motion/reveal";
import { PortfolioLightbox } from "@/components/sections/portfolio-lightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { PortfolioItem } from "@/lib/data/portfolio";

export function CategoryCarousel({ title, items }: { title: string; items: PortfolioItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          autoplay.current.play();
        } else {
          autoplay.current.stop();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <Reveal>
        <h3 className="font-display text-3xl italic text-ink lg:text-4xl">{title}</h3>
      </Reveal>

      <Reveal delay={0.08}>
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[autoplay.current]}
          className="mt-8"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ampliar foto: ${item.caption}`}
                  className="relative block h-[60vh] w-full overflow-hidden bg-paper sm:h-[78vh]"
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="100vw"
                    quality={90}
                    className="object-contain"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-5 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.14em] text-ink-faint">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Foto anterior"
            className="flex flex-1 max-w-32 items-center gap-2 text-ink-faint transition-colors hover:text-ink sm:max-w-48"
          >
            <span aria-hidden className="text-sm leading-none">
              ←
            </span>
            <span className="h-px flex-1 bg-border" />
          </button>

          <span className="flex items-center gap-2 whitespace-nowrap" style={{ fontVariantNumeric: "tabular-nums" }}>
            {String(current + 1).padStart(2, "0")}
            <span className="text-ink-faint/60">/</span>
            {String(items.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Próxima foto"
            className="flex flex-1 max-w-32 items-center gap-2 text-ink-faint transition-colors hover:text-ink sm:max-w-48"
          >
            <span className="h-px flex-1 bg-border" />
            <span aria-hidden className="text-sm leading-none">
              →
            </span>
          </button>
        </div>
      </Reveal>

      <PortfolioLightbox
        items={items}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </div>
  );
}
