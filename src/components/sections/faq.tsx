import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data/faq";

export function Faq() {
  return (
    <section id="faq" aria-label="Perguntas frequentes" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal className="text-center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Antes de conversarmos, algumas respostas.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="mt-14 w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="py-5 text-left font-display text-lg italic text-ink hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-soft">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
