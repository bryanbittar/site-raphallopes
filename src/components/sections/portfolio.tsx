"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
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
import { portfolioItems } from "@/lib/data/portfolio";

export function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      aria-label="Portfólio"
      className="bg-paper py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Portfólio</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Cada casamento, uma história distinta para contar.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[autoplay.current]}
            className="mt-12"
          >
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ampliar foto: ${item.caption}`}
                    className="group relative block h-[62vh] w-full overflow-hidden bg-transparent sm:h-[72vh]"
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(min-width: 1024px) 90vw, 100vw"
                      quality={95}
                      priority={index === 0}
                      className="object-contain"
                    />
                    <span className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-ink/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="size-4" />
                    </span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 size-11 border-border bg-paper/90 sm:-left-4" />
            <CarouselNext className="right-3 size-11 border-border bg-paper/90 sm:-right-4" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-ink-faint">
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(portfolioItems.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>
      </div>

      <PortfolioLightbox
        items={portfolioItems}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}
