import { 
  Stethoscope, 
  Users, 
  UserPlus, 
  Settings, 
  LayoutDashboard 
} from "lucide-react";
import { MenuItem } from "./types";

export const NavItems: MenuItem[] = [
  {
    
    title: "Doctors",
    url: "/doctors",
    icon: Stethoscope,
  },
  {
    title: "Create Doctor",
    url: "/doctors/create",
    icon: UserPlus,    // more specific than Stethoscope
  },
  {
    title: "Patients",
    url: "/patients",
    icon: Users,       // plural, matches Patients
  },
  {
    title: "Setting",
    url: "/setting",
    icon: Settings,    // correct icon for settings
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard, // classic dashboard icon
  },
];
