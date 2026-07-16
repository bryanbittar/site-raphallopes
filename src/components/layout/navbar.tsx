"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data/nav";
import { quoteWhatsAppLink, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar({ alwaysDark = false }: { alwaysDark?: boolean } = {}) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(alwaysDark);
  const [activeHref, setActiveHref] = useState("/#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRouteActive = (href: string) =>
    href.startsWith("/") && !href.startsWith("/#") && pathname.startsWith(href);

  useEffect(() => {
    if (alwaysDark) return;
    const onScroll = () => setIsScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysDark]);

  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => document.querySelector(item.href.slice(1)))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`/#${entry.target.id}`);
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
        <Link href="/#home" aria-label={siteConfig.name} className="shrink-0">
          <Image
            src="/images/logo/raphael-lopes-logo-white.png"
            alt={siteConfig.name}
            width={141}
            height={36}
            priority
            className={cn(
              "h-12 w-auto transition-[filter] duration-500",
              isScrolled || isMenuOpen ? "invert" : "invert-0",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative py-1">
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                    isScrolled ? "text-ink-soft hover:text-ink" : "text-white/80 hover:text-white",
                    (activeHref === item.href || isRouteActive(item.href)) &&
                      (isScrolled ? "text-ink" : "text-white"),
                  )}
                >
                  {item.label}
                  {(activeHref === item.href || isRouteActive(item.href)) && (
                    <motion.span
                      layoutId="nav-underline"
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-px",
                        isScrolled ? "bg-gold" : "bg-white",
                      )}
                    />
                  )}
                </Link>

                <div className="invisible absolute left-1/2 top-full flex -translate-x-1/2 flex-col gap-1 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-44 border border-border bg-paper py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block whitespace-nowrap px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:bg-sand hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                  isScrolled ? "text-ink-soft hover:text-ink" : "text-white/80 hover:text-white",
                  pathname === "/" &&
                    activeHref === item.href &&
                    (isScrolled ? "text-ink" : "text-white"),
                )}
              >
                {item.label}
                {pathname === "/" && activeHref === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-px",
                      isScrolled ? "bg-gold" : "bg-white",
                    )}
                  />
                )}
              </a>
            ),
          )}
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
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.14em] text-ink-soft"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-1 flex flex-col gap-1 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 text-xs uppercase tracking-[0.14em] text-ink-faint"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
