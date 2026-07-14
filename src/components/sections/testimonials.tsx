"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/motion/reveal";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section id="depoimentos" aria-label="Depoimentos" className="bg-paper-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Palavras de quem viveu o dia mais importante.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel
            opts={{ align: "center", loop: true }}
            plugins={[autoplay.current]}
            className="mt-14"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col items-center gap-4 border border-border bg-paper px-7 py-9 text-center">
                    <span className="font-display text-4xl italic text-gold/50" aria-hidden>
                      &ldquo;
                    </span>
                    <div className="-mt-2 flex gap-0.5 text-gold" aria-hidden>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="size-3.5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="font-display text-[1.05rem] italic leading-relaxed text-ink">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-faint">
                      {testimonial.names} · {testimonial.location}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
