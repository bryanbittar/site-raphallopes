import { MessageCircle } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/social";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: buildWhatsAppLink("Olá, Raphael! Gostaria de solicitar um orçamento para o meu casamento."),
  },
  {
    icon: InstagramIcon,
    label: "Instagram Casamentos",
    href: siteConfig.social.instagram.url,
  },
  {
    icon: InstagramIcon,
    label: "Instagram 15 Anos",
    href: siteConfig.social.instagram15Anos.url,
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    href: siteConfig.social.youtube.url,
  },
];

export function Contact() {
  return (
    <section id="contato" aria-label="Contato" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Contato</span>
          <h2 className="balance mt-4 font-display text-4xl italic leading-tight text-ink lg:text-5xl">
            Fale sobre o seu casamento. Eu respondo pessoalmente.
          </h2>
        </Reveal>

        <RevealGroup
          stagger={0.1}
          className="mx-auto mt-14 grid max-w-3xl gap-5 grid-cols-2 lg:grid-cols-4"
        >
          {channels.map((channel) => (
            <RevealItem key={channel.label}>
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col items-center gap-4 border border-border px-6 py-10 text-center transition-colors hover:border-gold/50"
              >
                <channel.icon strokeWidth={1.25} className="size-7 text-gold" />
                <p className="text-[0.7rem] uppercase tracking-[0.14em] text-ink-faint transition-colors group-hover:text-gold">
                  {channel.label}
                </p>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
