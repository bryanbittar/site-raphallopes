import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/motion/reveal";
import { CategoryCarousel } from "@/components/sections/category-carousel";
import { portfolioCategories } from "@/lib/data/portfolio";

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = portfolioCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: category.title,
    alternates: { canonical: `/portfolio/${category.slug}` },
  };
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = portfolioCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const otherCategories = portfolioCategories.filter((c) => c.slug !== slug);

  return (
    <>
      <Navbar alwaysDark />
      <main>
        <section aria-label={category.title} className="bg-paper pb-24 pt-32 lg:pb-32 lg:pt-40">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Portfólio</span>
            </Reveal>

            <div className="mt-10">
              <CategoryCarousel title={category.title} items={category.items} />
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
              <span className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                Ver também
              </span>
              {otherCategories.map((other) => (
                <Link
                  key={other.slug}
                  href={`/portfolio/${other.slug}`}
                  className="text-sm uppercase tracking-[0.14em] text-ink-soft underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  {other.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const dynamicParams = false;
