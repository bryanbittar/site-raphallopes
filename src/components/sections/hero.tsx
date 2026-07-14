"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { quoteWhatsAppLink, siteConfig } from "@/lib/site-config";

export function Hero() {
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
      { threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      aria-label="Abertura"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        src="/videos/hero-loop.mp4"
        poster="/images/hero/hero-silhueta-vitral.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Noivos em silhueta diante de um vitral, véu ao vento"
        className="absolute inset-0 h-full w-full object-cover object-[72%_60%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          {siteConfig.name} · Destination Wedding Photographer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="balance mt-6 font-display text-[clamp(2.5rem,6.4vw,5.5rem)] italic leading-[0.98] text-white"
        >
          Histórias de amor, registradas onde quer que o coração escolha acontecer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-lg text-sm uppercase tracking-[0.18em] text-white/65"
        >
          +350 casamentos · 9 anos de experiência · Brasil, EUA e Europa
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            render={<a href={quoteWhatsAppLink} target="_blank" rel="noreferrer noopener" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-sm text-ink hover:bg-white/90"
          >
            Solicitar orçamento
          </Button>
          <Button
            render={<a href="#portfolio" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/40 bg-transparent px-8 text-sm text-white hover:bg-white/10 hover:text-white"
          >
            Ver portfólio
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-white/60"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.2em]">Role para explorar</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-white/40"
        />
      </motion.div>
    </section>
  );
}
