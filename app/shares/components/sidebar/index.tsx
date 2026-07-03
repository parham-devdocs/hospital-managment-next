"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  CalendarDays,
  Home,
  LogOut,
  Plus,
  Settings,
  Stethoscope,
  User,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useEffect } from "react"
import { cn } from "@/lib/utils"
import Header from "./header"
import SidebarMenuItemComp from "./sidebarMenuItem"
import Event from "./event"
import Footer from "./footer"

// Navigation items for patient
const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Find Doctors",
    url: "/doctors",
    icon: Stethoscope,
  },
  {
    title: "My Appointments",
    url: "/appointments",
    icon: CalendarDays,
    badge: "3",
  },
  {
    title: "Prescriptions",
    url: "/prescriptions",
    icon: Heart,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

const events = [
  {
    date: new Date(2026, 6, 3), // July 3, 2026
    note: "Appointment with Dr. Sarah Johnson - Annual Checkup"
  },
  {
    date: new Date(2026, 6, 3),
    note: "Follow-up blood test results review"
  },
  {
    date: new Date(2026, 6, 3),
    note: "Physical therapy session at 2:30 PM"
  }
]
export default function AppSidebar() {
  const pathname = usePathname()
  const {  setOpenMobile,open} = useSidebar()


  // Close sidebar on mobile when navigating
  const handleNavigation = () => {
setOpenMobile(true)
  }

  // Static user data
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    role: "Patient",
    avatar: "", // Empty for fallback
    initials: "JD",
  }

  return (
    <Sidebar collapsible="icon" className="border-r">
      {/* Header with App Name */}
      <Header open={open}/>

      {/* Main Content */}
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
  <SidebarGroupLabel className="text-sidebar-foreground/70 font-semibold uppercase tracking-wider text-xs">
    Menu
  </SidebarGroupLabel>
  
  <SidebarMenu className="space-y-1">
  {navItems.map((item) => {
  const isActive = pathname === item.url || pathname.startsWith(item.url + "/");
  return <SidebarMenuItemComp isActive={isActive} title={item.title} url={item.url} key={item.title} Icon={item.icon} handleNavigation={handleNavigation} badge={item.badge} />
})}
</SidebarMenu>
</SidebarGroup>

        {/* Today's Date */}
       <Event open={open} events={events}/>
      </SidebarContent>

      {/* Footer with User Profile */}
      <Footer name={user.name} avatar={user.avatar} email={user.email} role={user.role} fallback={user.initials}/>

      <SidebarRail />
    </Sidebar>
  )
}