"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

import { usePathname } from "next/navigation"
import { createClient } from "../../../utils/supabase/client";

import Header from "./header"
import SidebarMenuItemComp from "./sidebarMenuItem"
import Event from "./event"
import Footer from "./footer"
import { getNavItemsByRole } from "./navItems"
import { useEffect, useState } from "react"
import { User } from "@supabase/supabase-js";

// Navigation items for patient
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
  const [user, setUser] = useState<User | null|undefined>(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const { setOpenMobile, open } = useSidebar()


  useEffect(() => {
  
    const getUser = async () => {
      const supabase = createClient()
  
      const result = await supabase.auth.getUser()
  
  
      const { data: { user }, error } = result
  
      setUser(user)
      setLoading(false)
    }

    getUser()
  
    const supabase = createClient()
  
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
    
      setUser(session?.user ?? null)
      setLoading(false)
    })
  
    return () => subscription.unsubscribe()
  }, [])
  
 
  // Close sidebar on mobile when navigating
  const handleNavigation = () => {
    setOpenMobile(true)
  }

 
  // Safely get user metadata
  const userMetadata = user?.user_metadata as {
    name?: string;
    avatar?: string;
    initials?: string;
  } | null

  const userName = userMetadata?.name || user?.email?.split('@')[0] || 'User'
  const userAvatar = userMetadata?.avatar || ''
  const userInitials = userMetadata?.initials || userName?.charAt(0).toUpperCase() || 'U'
  const userEmail = user?.email || ''
  const userRole = user?.app_metadata?.user_role || 'patient'
  const navItems = getNavItemsByRole(userRole)

  return (
    <Sidebar collapsible="icon" className="border-r">
      {/* Header with App Name */}
      <Header open={open} />

      {/* Main Content */}
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-semibold uppercase tracking-wider text-xs">
            Menu
          </SidebarGroupLabel>
          
          <SidebarMenu className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.url || pathname.startsWith(item.url + "/")
              return (
                <SidebarMenuItemComp 
                  key={item.title}
                  isActive={isActive} 
                  title={item.title} 
                  url={item.url} 
                  Icon={item.icon} 
                  handleNavigation={handleNavigation} 
                  badge={item.badge} 
                />
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Today's Date */}
        <Event open={open} events={events} />
      </SidebarContent>

      {/* Footer with User Profile */}
      <Footer 
        name={userName}
        avatar={userAvatar}
        email={userEmail}
        role={userRole}
        fallback={userInitials}
      />

      <SidebarRail />
    </Sidebar>
  )
}