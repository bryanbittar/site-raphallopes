export const siteConfig = {
  name: "Raphael Lopes",
  legalName: "Raphael Lopes Fotografia",
  title: "Raphael Lopes | Fotógrafo de Destination Wedding",
  shortTitle: "Raphael Lopes Fotografia",
  description:
    "Fotógrafo de casamentos de alto padrão com mais de 350 histórias registradas em 9 anos de carreira. Especialista em destination weddings — Brasil, Estados Unidos e Europa.",
  tagline: "Fotografia de casamento para quem vive o amor sem fronteiras.",
  url: "https://www.raphaellopesfotografia.com",
  ogImage: "/og-image.jpg",
  locale: "pt_BR",

  contact: {
    whatsapp: "5567996641264",
    whatsappDisplay: "+55 (67) 99664-1264",
    baseCity: "Campo Grande, Mato Grosso do Sul",
  },

  social: {
    instagram: {
      handle: "@raphaellopes.fotografia",
      url: "https://www.instagram.com/raphaellopes.fotografia",
    },
    youtube: {
      handle: "Raphael Lopes",
      url: "https://www.youtube.com/@raphaellopes.fotografia",
    },
    facebook: {
      handle: "Raphael Lopes Fotografia",
      url: "https://www.facebook.com/raphaellopesfotografia",
    },
  },

  credentials: {
    weddingsShot: 350,
    yearsExperience: 9,
    statesServed: 10,
    continentsServed: 3,
  },

  areasServed: [
    "Mato Grosso do Sul",
    "Brasil",
    "Estados Unidos",
    "Europa",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Used by every "Solicitar orçamento" button/link across the site. */
export const quoteWhatsAppLink = buildWhatsAppLink("Olá, gostaria de fazer um orçamento");
