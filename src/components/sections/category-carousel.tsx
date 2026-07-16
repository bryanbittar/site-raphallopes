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
  CarouselNext,
  CarouselPrevious,
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
                  className="relative block h-[60vh] w-full overflow-hidden bg-ink sm:h-[78vh]"
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="100vw"
                    quality={90}
                    className="object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 size-11 border-border bg-paper/90 sm:-left-4" />
          <CarouselNext className="right-3 size-11 border-border bg-paper/90 sm:-right-4" />
        </Carousel>

        <div className="mt-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-ink-faint">
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-border" />
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            {String(items.length).padStart(2, "0")}
          </span>
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
