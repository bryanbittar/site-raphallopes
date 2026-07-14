export type Testimonial = {
  id: string;
  names: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t01",
    names: "Ana & Pedro",
    location: "Bonito, MS",
    quote:
      "O Raphael não fotografou o nosso casamento — ele contou a nossa história. Chorei revendo as fotos meses depois, como se estivesse vivendo tudo de novo.",
    rating: 5,
  },
  {
    id: "t02",
    names: "Marina & John",
    location: "Toscana, Itália",
    quote:
      "Levamos ele para a Itália sem pensar duas vezes. A discrição durante a cerimônia e a sensibilidade nos detalhes fizeram toda a diferença no resultado final.",
    rating: 5,
  },
  {
    id: "t03",
    names: "Clara & Diego",
    location: "Trancoso, BA",
    quote:
      "Do primeiro contato à entrega do álbum, sentimos cuidado em cada etapa. As fotos são exatamente como queríamos lembrar do dia: reais e emocionantes.",
    rating: 5,
  },
  {
    id: "t04",
    names: "Beatriz & Lucas",
    location: "Campo Grande, MS",
    quote:
      "Contratamos o Raphael pela indicação de três casais amigos — e entendemos o motivo já na primeira reunião. Profissionalismo raro, resultado impecável.",
    rating: 5,
  },
];
