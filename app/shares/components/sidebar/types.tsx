import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  badge?: string;
  isActive: boolean;
  url: string;
  Icon: LucideIcon;
  handleNavigation: () => void;
}


export interface Footer{
    name:string
     avatar:string
      fallback:string
       role:string
        email:string

}