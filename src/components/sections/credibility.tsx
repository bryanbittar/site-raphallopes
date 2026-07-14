import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { credibilityItems } from "@/lib/data/credibility";

export function Credibility() {
  return (
    <section id="credibilidade" aria-label="Credibilidade" className="border-b border-border bg-paper-deep">
      <RevealGroup
        stagger={0.08}
        className="mx-auto grid max-w-[1400px] grid-cols-2 overflow-hidden border-t border-l border-border sm:grid-cols-3 lg:grid-cols-6 lg:border-t-0"
      >
        {credibilityItems.map((item) => (
          <RevealItem key={item.label}>
            <div className="flex h-full flex-col items-center gap-3 border-b border-r border-border px-5 py-10 text-center">
              <item.icon strokeWidth={1.25} className="size-6 text-gold" />
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.1em] text-ink-soft">
                {item.label}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
