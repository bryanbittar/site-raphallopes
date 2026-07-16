import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { portfolioCategories } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Portfólio",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioIndexPage() {
  return (
    <>
      <Navbar alwaysDark />
      <main>
        <section aria-label="Portfólio" className="bg-paper pb-24 pt-32 lg:pb-32 lg:pt-40">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Portfólio</span>
              <h1 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
                Álbuns completos.
              </h1>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-3">
              {portfolioCategories.map((category) => (
                <RevealItem key={category.slug}>
                  <Link href={`/portfolio/${category.slug}`} className="group block">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand">
                      <Image
                        src={category.items[0].src}
                        alt={category.items[0].caption}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        quality={90}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-ink">
                      {category.title}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
