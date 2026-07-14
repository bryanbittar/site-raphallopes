import type { LucideIcon } from "lucide-react";
import {
  MessageCircle,
  Users2,
  ClipboardList,
  Camera,
  PackageCheck,
  BookHeart,
} from "lucide-react";

export type ExperienceStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const experienceSteps: ExperienceStep[] = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    description:
      "Uma conversa sem compromisso para entender a história de vocês, a data e o destino dos sonhos.",
  },
  {
    icon: Users2,
    title: "Reunião",
    description:
      "Alinhamento pessoal — por vídeo ou presencial — para apresentar o trabalho e desenhar a cobertura ideal.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento",
    description:
      "Roteiro do dia, logística de viagem e todos os detalhes técnicos resolvidos com antecedência.",
  },
  {
    icon: Camera,
    title: "Casamento",
    description:
      "Presença discreta e atenta, registrando cada instante real — sem poses forçadas, sem interrupções.",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    description:
      "Seleção cuidadosa e tratamento autoral das imagens, entregues em galeria digital privada.",
  },
  {
    icon: BookHeart,
    title: "Álbum",
    description:
      "Um objeto físico, atemporal, para folhear a história de vocês por gerações.",
  },
];
