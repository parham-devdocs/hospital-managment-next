import { 
    CalendarDays, 
    Heart, 
    Stethoscope, 
    Users,
    Clock,
    Pill,
    LayoutDashboard,
    Bell,
   
    type LucideIcon 
  } from "lucide-react"
  
  export interface NavItem {
    title: string
    url: string
    icon: LucideIcon
    badge?: string
  }
  
  // Patient Navigation Items
  export const PatientNavItems: NavItem[] = [
    {
      title: "Dashboard",
      url: "/patient/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Find Doctors",
      url: "/patient/doctors",
      icon: Stethoscope,
    },
    {
      title: "My Appointments",
      url: "/patient/appointments",
      icon: CalendarDays,
      badge: "3",
    },
    {
      title: "Prescriptions",
      url: "/patient/prescriptions",
      icon: Heart,
    }
  ]
  
  // Doctor Navigation Items
  export const DoctorNavItems: NavItem[] = [
    {
      title: "Dashboard",
      url: "/doctor/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Patients",
      url: "/doctor/patients",
      icon: Users,
      badge: "12",
    },
    {
      title: "Appointments",
      url: "/doctor/appointments",
      icon: CalendarDays,
      badge: "5",
    },
    {
      title: "Schedule",
      url: "/doctor/schedule",
      icon: Clock,
    },
    {
      title: "Prescriptions",
      url: "/doctor/prescriptions",
      icon: Pill,
    }
  ]
  
  // Admin Navigation Items
  export const AdminNavItems: NavItem[] = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Doctors",
      url: "/admin/doctors",
      icon: Stethoscope,
      badge: "12",
    },
    {
      title: "Patients",
      url: "/admin/patients",
      icon: Users,
      badge: "156",
    },
    {
      title: "Appointments",
      url: "/admin/appointments",
      icon: CalendarDays,
      badge: "8",
    },
    {
      title: "Prescriptions",
      url: "/admin/prescriptions",
      icon: Pill,
    },
    {
      title: "Notifications",
      url: "/admin/notifications",
      icon: Bell,
      badge: "5",
    },
{
    title: "Anylitics",
    url: "/admin/anylitics",
    icon: Bell,
    badge: "5",
  }
  ]
  

  
  // Export all navigation configs together
  export const NAV_CONFIG = {
    patient: PatientNavItems,
    doctor: DoctorNavItems,
    admin:AdminNavItems
  } as const
  
  export type UserRole = keyof typeof NAV_CONFIG
  
  // Helper function to get navigation by role
  export const getNavItemsByRole = (role: UserRole) => {
    return NAV_CONFIG[role]
  }