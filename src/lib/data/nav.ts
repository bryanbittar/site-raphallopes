import { portfolioCategories } from "@/lib/data/portfolio";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  {
    label: "Portfólio",
    href: "/portfolio",
    children: portfolioCategories.map((category) => ({
      label: category.title,
      href: `/portfolio/${category.slug}`,
    })),
  },
  { label: "Sobre", href: "/#sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
];
