"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

export function WhatsAppFab() {
  return (
    <motion.a
      href={buildWhatsAppLink(
        "Olá, Raphael! Gostaria de solicitar um orçamento para o meu casamento.",
      )}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_10px_30px_-8px_rgba(22,19,15,0.55)] lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="size-6" strokeWidth={1.6} />
      <span className="sr-only">Conversar no WhatsApp</span>
    </motion.a>
  );
}
