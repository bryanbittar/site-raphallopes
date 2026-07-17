export type Testimonial = {
  id: string;
  names: string;
  location?: string;
  paragraphs: string[];
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t01",
    names: "Thaynara & Fernando",
    rating: 5,
    paragraphs: [
      "Rapha, estou passando aqui para te agradecer. Quando conversamos com você na feira e fomos dar uma volta, falamos um para o outro: acho que é ele, hein (kkkk). Você fala do seu trabalho com uma propriedade e uma leveza surpreendente, e do mesmo jeito desenvolve as fotos.",
      "Desde o pré-wedding tem sido só fotos lindas, a sua paciência em conduzir, a tranquilidade que nos transmitiu. No casamento civil nos atendeu mesmo com a agenda cheia e, mais uma vez, com uma cordialidade e simpatia indescritível.",
      "E no dia 16/11/24 não poderia ter sido diferente: o momento que chegou no salão sempre tentando nos tranquilizar, na cerimônia novamente com muita paciência e amor. Quando as pessoas amam o que fazem, tudo fica leve, e com você nos sentimos assim, tranquilos, mesmo com todos os protocolos. Na festa, sempre atento aos detalhes — tenho certeza que todas as fotos ficarão lindas!",
      "Que Deus te ilumine ainda mais e que, através do seu olhar e das suas lentes, inúmeros momentos sejam registrados e eternizados em muitos corações. Obrigada por tudo 🥹♥️",
    ],
  },
  {
    id: "t02",
    names: "Diana & Lucas",
    location: "Aparecida do Norte",
    rating: 5,
    paragraphs: [
      "O pré-wedding foi perfeito, eu não tenho nada pra reclamar! Nenhum comentário que não seja: perfeito.",
      "Sobre o casamento — que casamentão, que festa, como vocês foram incríveis! Sério, vocês foram perfeitos, todos elogiaram vocês, sobre a educação, sobre como se comportam, sobre o traje. E isso me ganhou muito quando fechei com vocês!",
      "Mas sério, muito obrigada por tudo. Conseguimos fazer tudo o que queríamos, não sei se faltou alguma coisa protocolar, mas foi perfeito. Eu consegui curtir e aproveitar a minha festa, que era o que eu mais queria — o noivo então nem se fala, curtiu mais do que pude esperar!",
      "Muito obrigada, espero muito que sejam muito felizes. Que seu trabalho continue esplêndido e belo como ele é — vocês fazem tudo ser mais leve.",
    ],
  },
  {
    id: "t03",
    names: "Mariana & Thiago",
    rating: 5,
    paragraphs: [
      "Estou vindo aqui em meu nome e do Thiago pra agradecer todo o carinho conosco. Estamos muito felizes pelo excelente trabalho que você desempenha. Você arrasa! Parabéns por ser esse profissional que é.",
      "Ficamos muito felizes com o que já vimos do seu trabalho, e sei que quando recebermos as fotos vamos ficar mais apaixonados ainda. Agradeça seu irmão também por nós — ele arrasou nos vídeos, e sei que o do casamento vai ficar mais perfeito ainda. Obrigada mesmo pela excelência de vocês!",
    ],
  },
  {
    id: "t04",
    names: "Tarsis & Emerson",
    rating: 5,
    paragraphs: [
      "Foi uma das melhores escolhas para esse dia! Desde o pré-wedding, nos deixando super confortáveis no ensaio. Gratidão a você e toda sua equipe! As fotos levaremos para a nossa vida toda! Obrigada por fazer parte desse dia e por guardar nossas memórias através das fotos e vídeos!",
    ],
  },
  {
    id: "t05",
    names: "Debutante Marie",
    location: "Pai Gustavo",
    rating: 5,
    paragraphs: [
      "Eu gostaria de agradecer vcs do fundo do meu coração! Acho que estas palavras vão ser pela Marie e pela Memê também, por vcs estarem presentes numa data tão importante para nós, que foi a realização dos 15 anos da nossa filha.",
      "Vcs puderam participar com toda a dedicação sua, da sua equipe, e ter toda essa percepção de foto e vídeo. Quando a gente foi contratar vcs, e vc foi me mostrar seu portfólio, eu disse que nem precisava e queria resumir o negócio. Mas dali dessa conversa olho no olho, eu senti aquela energia e vi que a gente iria ter uma boa sintonia. E nisso eu acho que saiu um bom trabalho. Eu acho que vcs souberam captar tudo o que precisava.",
      "Então mais uma vez, muito obrigado de coração! Eu estou falando como um pai que se emociona. Eu me segurei ao máximo pra não chorar, mas já estou com os olhos cheio de lágrimas.",
      "Então gostaria de agradecer realmente muito muito muito, por todo o carinho e dedicação que vcs tiveram com minha filha. Sempre quando eu precisar, e me perguntarem de fotógrafo, eu vou estar indicando vcs. Muito obrigado de coração! Fica aqui minha gratidão e meu carinho pro vcs.",
    ],
  },
  {
    id: "t06",
    names: "Debutante Pryscila",
    location: "Mãe Andrea",
    rating: 5,
    paragraphs: [
      "Passando aqui para expressar minha eterna gratidão por vc e sua equipe! Além de um excelente profissional, uma pessoa humilde de um carisma sem igual!",
      "Meus parabéns, e que Deus te abençoe grandemente cada dia mais!",
      "Serei eternamente grata pois vc fez com que um dos dias mais importante da vida da Pri fosse perfeito 🙏",
      "Mais uma vez muito obrigada mesmo! Vc merece todo sucesso do mundo 👏👏👏 Tenha a certeza que minha família sempre escolherá vc 🤭😊",
    ],
  },
  {
    id: "t07",
    names: "Debutante Isabelly",
    location: "Mãe Renata",
    rating: 5,
    paragraphs: [
      "Raphael, passando por aqui pra agradecer o seu profissionalismo na festa da minha filha... Imensa gratidão por tudo e muito obrigada pelo carinho e toda a paciência com todos. Deus abençoe grandemente a sua vida e o seu trabalho!",
    ],
  },
];
