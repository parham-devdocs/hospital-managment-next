import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  isActive?:boolean
  icon: LucideIcon;
  handleNavigation?: () => void;
}


export interface Footer{
    name:string
     avatar:string
      fallback:string
       role:string
        email:string

}