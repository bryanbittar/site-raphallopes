import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { quoteWhatsAppLink } from "@/lib/site-config";

export function Cta() {
  return (
    <section
      aria-label="Chamada para contato"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink"
    >
      <Image
        src="/images/cta/cta-comemoracao.jpg"
        alt="Noivos comemorando a saída da cerimônia com a família"
        fill
        sizes="100vw"
        className="object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/50" />

      <Reveal direction="scale" className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <span className="eyebrow">Vamos conversar</span>
        <h2 className="balance mt-5 font-display text-4xl italic leading-tight text-white lg:text-5xl">
          O seu casamento merece ser contado com a mesma intensidade com que foi vivido.
        </h2>
        <div className="mt-9">
          <Button
            render={<a href={quoteWhatsAppLink} target="_blank" rel="noreferrer noopener" />}
            nativeButton={false}
            size="lg"
            className="h-12 rounded-full bg-white px-9 text-sm text-ink hover:bg-white/90"
          >
            Solicitar orçamento
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
