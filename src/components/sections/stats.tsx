import { Counter } from "@/components/motion/counter";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { statItems } from "@/lib/data/stats";

export function Stats() {
  return (
    <section id="destaques" aria-label="Destaques" className="bg-ink py-20 text-white">
      <RevealGroup
        stagger={0.1}
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-12"
      >
        {statItems.map((stat) => (
          <RevealItem key={stat.label} direction="scale">
            <div className="text-center">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-5xl italic text-gold-soft lg:text-6xl"
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-white/55">
                {stat.label}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
