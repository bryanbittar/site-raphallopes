"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion/reveal";
import { featuredVideo } from "@/lib/data/videos";

export function Videos() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="videos" aria-label="Vídeos" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-12">
        <Reveal direction="left" className="lg:order-2">
          <span className="eyebrow">Bastidores</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Porque algumas emoções só o movimento revela.
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
            {featuredVideo.description} Um retrato real de como cada cobertura é
            construída — antes de qualquer clique no obturador.
          </p>
        </Reveal>

        <Reveal direction="right" className="lg:order-1">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden bg-ink">
            <video
              ref={videoRef}
              src={featuredVideo.src}
              poster={featuredVideo.poster}
              muted
              loop
              playsInline
              preload="auto"
              aria-label={featuredVideo.title}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
