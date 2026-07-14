import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

const paragraphs = [
  {
    heading: "O que me move",
    body: "Comecei fotografando casamentos por acreditar em uma coisa simples: o dia em que duas pessoas escolhem uma à outra merece ser lembrado com verdade, não com poses ensaiadas. Depois de mais de 350 celebrações, essa continua sendo a única regra que sigo.",
  },
  {
    heading: "Como eu vejo uma cena",
    body: "Procuro o instante antes do sorriso, a mão que aperta a outra por baixo da mesa, o pai que respira fundo antes de entregar a filha no altar. São esses detalhes — não a pose — que fazem vocês revirem as fotos anos depois e sentirem tudo de novo.",
  },
  {
    heading: "Por que destination weddings",
    body: `Quando o casamento acontece longe de casa, cada detalhe pesa mais: a luz é nova, o tempo é curto, a logística é outra. Em ${siteConfig.credentials.yearsExperience} anos cobrindo cerimônias em ${siteConfig.credentials.statesServed}+ estados e ${siteConfig.credentials.continentsServed} continentes, aprendi a chegar preparado — para que vocês só precisem viver o dia.`,
  },
];

export function About() {
  return (
    <section id="sobre" aria-label="Sobre o fotógrafo" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:px-12">
        <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/about/raphael-lopes.jpg"
              alt={`${siteConfig.name} fotografando com sua câmera`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Sobre o fotógrafo</span>
            <h2 className="balance mt-4 max-w-xl font-display text-4xl italic leading-tight text-ink lg:text-5xl">
              A história por trás de cada fotografia que eu faço.
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.heading} delay={index * 0.05}>
                <div className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg italic text-ink">{paragraph.heading}</h3>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
                    {paragraph.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
