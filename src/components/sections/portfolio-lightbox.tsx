"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { PortfolioItem } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioLightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: PortfolioItem[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const isOpen = index !== null;
  const current = index !== null ? items[index] : null;

  useEffect(() => {
    setIsZoomed(false);
  }, [index]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") onIndexChange(((index as number) + 1) % items.length);
      if (event.key === "ArrowLeft")
        onIndexChange(((index as number) - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [isOpen, index, items.length, onIndexChange]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="h-[92svh] w-[96vw] max-w-6xl gap-0 overflow-hidden border-none bg-ink p-0 sm:max-w-6xl sm:rounded-md"
      >
        <DialogTitle className="sr-only">{current?.caption ?? "Visualização da fotografia"}</DialogTitle>

        {current && (
          <div className="relative flex h-full w-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full p-6 sm:p-14"
              >
                <Image
                  src={current.src}
                  alt={current.caption}
                  fill
                  sizes="96vw"
                  priority
                  className={cn(
                    "object-contain cursor-zoom-in transition-transform duration-500",
                    isZoomed ? "scale-125 cursor-zoom-out" : "scale-100",
                  )}
                  onClick={() => setIsZoomed((v) => !v)}
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setIsZoomed((v) => !v)}
              aria-label={isZoomed ? "Diminuir zoom" : "Aplicar zoom"}
              className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {isZoomed ? <ZoomOut className="size-4" /> : <ZoomIn className="size-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-5 top-[4.5rem] flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:top-5 sm:right-20"
            >
              <X className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => onIndexChange(((index as number) - 1 + items.length) % items.length)}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => onIndexChange(((index as number) + 1) % items.length)}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
