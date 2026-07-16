"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data/nav";
import { quoteWhatsAppLink, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        isScrolled || isMenuOpen
          ? "bg-paper/90 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#home" aria-label={siteConfig.name} className="shrink-0">
          <Image
            src="/images/logo/raphael-lopes-logo-white.png"
            alt={siteConfig.name}
            width={141}
            height={36}
            priority
            className={cn(
              "h-8 w-auto transition-[filter] duration-500",
              isScrolled || isMenuOpen ? "invert" : "invert-0",
            )}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                isScrolled ? "text-ink-soft hover:text-ink" : "text-white/80 hover:text-white",
                activeHref === item.href && (isScrolled ? "text-ink" : "text-white"),
              )}
            >
              {item.label}
              {activeHref === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className={cn(
                    "absolute -bottom-1 left-0 right-0 h-px",
                    isScrolled ? "bg-gold" : "bg-white",
                  )}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<a href={quoteWhatsAppLink} target="_blank" rel="noreferrer noopener" />}
            nativeButton={false}
            size="sm"
            className={cn(
              "rounded-full px-6 text-[0.7rem] uppercase tracking-[0.14em]",
              !isScrolled && "bg-white text-ink hover:bg-white/90",
            )}
          >
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
          className={cn(
            "-mr-2 flex size-10 items-center justify-center lg:hidden",
            isScrolled || isMenuOpen ? "text-ink" : "text-white",
          )}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.14em] text-ink-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  render={
                    <a
                      href={quoteWhatsAppLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  }
                  nativeButton={false}
                  className="w-full rounded-full"
                >
                  Solicitar orçamento
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
