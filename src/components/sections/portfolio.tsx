import { Reveal } from "@/components/motion/reveal";
import { CategoryCarousel } from "@/components/sections/category-carousel";
import { weddingItems, quinceaneraItems, preWeddingItems } from "@/lib/data/portfolio";

const categories = [
  { title: "Casamento", items: weddingItems },
  { title: "15 Anos", items: quinceaneraItems },
  { title: "Pré Wedding", items: preWeddingItems },
];

export function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfólio" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Portfólio</span>
        </Reveal>

        <div className="mt-10 flex flex-col gap-20">
          {categories.map((category) => (
            <CategoryCarousel key={category.title} title={category.title} items={category.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
