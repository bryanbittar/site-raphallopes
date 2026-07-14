import type { LucideIcon } from "lucide-react";
import { Heart, CalendarClock, Globe2, Plane, BookOpen, Users } from "lucide-react";

export type CredibilityItem = {
  icon: LucideIcon;
  label: string;
};

export const credibilityItems: CredibilityItem[] = [
  { icon: Heart, label: "+350 casamentos" },
  { icon: CalendarClock, label: "9 anos de experiência" },
  { icon: Globe2, label: "Brasil · EUA · Europa" },
  { icon: Plane, label: "Destination weddings" },
  { icon: BookOpen, label: "Fotografia documental" },
  { icon: Users, label: "Atendimento personalizado" },
];
