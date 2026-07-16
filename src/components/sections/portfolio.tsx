import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { portfolioCategories } from "@/lib/data/portfolio";

const featured = portfolioCategories.map((category) => ({
  slug: category.slug,
  title: category.title,
  item: category.items[0],
}));

export function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfólio" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Portfólio</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Álbuns em destaque.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-3">
          {featured.map(({ slug, title, item }) => (
            <RevealItem key={slug}>
              <Link href={`/portfolio/${slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    quality={90}
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-ink-soft transition-colors group-hover:text-ink">
                  {title}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex justify-center">
          <Button
            render={<Link href="/portfolio" />}
            nativeButton={false}
            variant="outline"
            className="rounded-full px-8 text-[0.72rem] uppercase tracking-[0.14em]"
          >
            Ver mais
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
