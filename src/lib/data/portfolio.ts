export type PortfolioCategory =
  | "Casamentos"
  | "Pré Wedding"
  | "Destination"
  | "Civil"
  | "Igreja"
  | "Praia"
  | "Campo";

export type PortfolioItem = {
  id: string;
  src: string;
  caption: string;
  categories: PortfolioCategory[];
  /** relative width:height, used to vary the editorial grid rhythm */
  aspect: "portrait" | "square" | "landscape" | "tall";
};

export const portfolioItems: PortfolioItem[] = [
  { id: "p09", src: "/images/portfolio/01-chuva-de-arroz.jpg", caption: "Chuva de arroz", categories: ["Casamentos", "Campo"], aspect: "landscape" },
  { id: "p01", src: "/images/portfolio/06-silhueta-no-vitral.jpg", caption: "Silhueta no vitral", categories: ["Casamentos", "Igreja"], aspect: "tall" },
  { id: "p02", src: "/images/portfolio/04-caminhada-na-areia.jpg", caption: "Caminhada na areia", categories: ["Casamentos", "Praia"], aspect: "landscape" },
  { id: "p03", src: "/images/portfolio/02-saida-bolhas-sabao.jpg", caption: "Saída com bolhas de sabão", categories: ["Casamentos", "Igreja"], aspect: "square" },
  { id: "p04", src: "/images/portfolio/05-sob-luzes-do-altar.jpg", caption: "Sob as luzes do altar", categories: ["Casamentos", "Igreja"], aspect: "portrait" },
  { id: "p05", src: "/images/portfolio/13-antes-de-tudo-comecar.jpg", caption: "Antes de tudo começar", categories: ["Pré Wedding"], aspect: "tall" },
  { id: "p06", src: "/images/portfolio/17-caminho-de-outono.jpg", caption: "Caminho de outono", categories: ["Pré Wedding", "Campo"], aspect: "portrait" },
  { id: "p07", src: "/images/portfolio/07-abraco-sob-o-veu.jpg", caption: "Abraço sob o véu", categories: ["Casamentos"], aspect: "portrait" },
  { id: "p08", src: "/images/portfolio/10-comemoracao-em-familia.jpg", caption: "Comemoração em família", categories: ["Casamentos"], aspect: "square" },
  { id: "p10", src: "/images/portfolio/09-a-caminho-da-cerimonia.jpg", caption: "A caminho da cerimônia", categories: ["Casamentos"], aspect: "square" },
  { id: "p11", src: "/images/portfolio/18-reflexo-na-cachoeira.jpg", caption: "Reflexo na cachoeira", categories: ["Pré Wedding", "Campo"], aspect: "landscape" },
  { id: "p12", src: "/images/portfolio/12-palavras-que-emocionam.jpg", caption: "Palavras que emocionam", categories: ["Casamentos"], aspect: "portrait" },
  { id: "p13", src: "/images/portfolio/08-entre-luzes-de-jardim.jpg", caption: "Entre luzes de jardim", categories: ["Casamentos", "Campo"], aspect: "portrait" },
  { id: "p14", src: "/images/portfolio/14-luz-azul-olhar-sereno.jpg", caption: "Luz azul, olhar sereno", categories: ["Pré Wedding"], aspect: "tall" },
  { id: "p15", src: "/images/portfolio/03-aplausos-saida.jpg", caption: "Aplausos na saída", categories: ["Casamentos", "Igreja"], aspect: "landscape" },
  { id: "p16", src: "/images/portfolio/11-lagrimas-de-pai.jpg", caption: "Lágrimas de pai", categories: ["Casamentos"], aspect: "square" },
  { id: "p17", src: "/images/portfolio/16-sob-o-poste-antigo.jpg", caption: "Sob o poste antigo", categories: ["Pré Wedding", "Campo"], aspect: "portrait" },
  { id: "p18", src: "/images/portfolio/19-sob-a-queda-dagua.jpg", caption: "Sob a queda d'água", categories: ["Pré Wedding", "Campo"], aspect: "landscape" },
];
