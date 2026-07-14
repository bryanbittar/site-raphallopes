import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { experienceSteps } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experiencia" aria-label="Experiência" className="bg-paper-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">A jornada</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Do primeiro &ldquo;oi&rdquo; ao álbum na estante.
          </h2>
        </Reveal>

        {/* Desktop / tablet: horizontal timeline */}
        <RevealGroup
          stagger={0.08}
          className="relative mt-20 hidden lg:grid lg:grid-cols-6 lg:gap-6"
        >
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {experienceSteps.map((step) => (
            <RevealItem key={step.title}>
              <div className="relative flex flex-col items-start gap-4 pr-4">
                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-gold/50 bg-paper-deep text-gold">
                  <step.icon strokeWidth={1.25} className="size-5" />
                </div>
                <h3 className="font-display text-lg italic text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Mobile: vertical timeline */}
        <RevealGroup stagger={0.08} className="relative mt-16 space-y-10 border-l border-border pl-8 lg:hidden">
          {experienceSteps.map((step) => (
            <RevealItem key={step.title} direction="left">
              <div className="relative">
                <div className="absolute -left-[calc(2rem+1px)] flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-gold/50 bg-paper-deep text-gold">
                  <step.icon strokeWidth={1.25} className="size-4" />
                </div>
                <h3 className="font-display text-lg italic text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
