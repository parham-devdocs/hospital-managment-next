import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  badge: number;
  isActive: boolean;
  url: string;
  Icon: LucideIcon;
  handleNavigation: () => void;
}
