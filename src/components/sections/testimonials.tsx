"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/motion/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 9000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="depoimentos" aria-label="Depoimentos" className="bg-paper-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Depoimentos de quem viveu o dia mais importante.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[autoplay.current]}
            className="mt-14"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 border border-border bg-paper px-7 py-12 text-center sm:px-14">
                    <span className="font-display text-5xl italic text-gold/50" aria-hidden>
                      &ldquo;
                    </span>
                    <div className="-mt-3 flex gap-0.5 text-gold" aria-hidden>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="size-3.5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      {testimonial.paragraphs.map((paragraph, i) => (
                        <p
                          key={i}
                          className="font-display text-[1.05rem] italic leading-relaxed text-ink"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-2 text-xs uppercase tracking-[0.12em] text-ink-faint">
                      {testimonial.names}
                      {testimonial.location && ` · ${testimonial.location}`}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 size-11 border-border bg-paper/90 sm:left-6" />
            <CarouselNext className="right-1 size-11 border-border bg-paper/90 sm:right-6" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-ink-faint">
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
