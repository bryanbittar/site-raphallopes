import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

const introParagraphs = [
  "Sou Raphael Lopes, fotógrafo de casamentos há 9 anos, com mais de 350 lindas histórias eternizadas em vários estados do Brasil e inclusive em Nova York e na Itália!",
  "Nosso trabalho possui elementos e inspirações internacionais, mesclados com fotografia de moda, artística e atemporal.",
  "Estamos sempre atentos à espontaneidade e emoção! Fazemos com que a fotografia, além de ser a lembrança do seu dia mais especial, seja algo agradável, leve e memorável!",
];

const workshops = [
  "Wedding Brasil 2022",
  "Photo in Rio 2023",
  "Photo in Rio 2024",
  "Making of 360 — Rodolfo Santos 2024",
  "Expo Image 2025",
  "Photo in Rio 2025",
  "Fora da Zona de Conforto — Nei Bernardes 2026",
  "Revolution Curitiba 2026",
  "Casamentos Internacionais — Sam Sacramento",
  "A Arte de Fotografar Noivas — Anderson Marques",
];

export function About() {
  return (
    <section id="sobre" aria-label="Sobre o fotógrafo" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:px-12">
        <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/about/raphael-lopes.jpg"
              alt={`Retrato de ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre mim</span>
          </Reveal>

          <div className="mt-8 flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-4">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg italic text-ink">Congressos e workshops</h3>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
                  Participamos ativamente dos maiores congressos e workshops da América do Sul,
                  sempre nos atualizando nos estudos, novidades e tendências:
                </p>
                <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                  {workshops.map((workshop) => (
                    <li key={workshop} className="flex items-baseline gap-2.5 text-sm text-ink-soft">
                      <span className="text-gold">—</span>
                      {workshop}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
