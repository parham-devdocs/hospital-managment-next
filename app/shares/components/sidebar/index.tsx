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

// Quick actions
const quickActions = [
  {
    title: "Book Appointment",
    icon: Plus,
    url: "/book-appointment",
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
      <SidebarHeader className="border-b px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Stethoscope className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">MediBook</span>
            <span className="text-xs text-muted-foreground">Patient Portal</span>
          </div>
        </div>
      </SidebarHeader>

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

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={item.title}
        className={isActive ? "bg-sidebar-primary text-white hover:bg-sidebar-primary hover:text-white" : ""}
      >
        <Link href={item.url} onClick={handleNavigation} className="flex w-full items-center gap-3">
          <item.icon />
          <span className="truncate">{item.title}</span>
          {item.badge && (
            <Badge className={isActive ? "bg-white/20 text-white" : ""}>
              {item.badge}
            </Badge>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
})}
</SidebarMenu>
</SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarMenu>
            {quickActions.map((action) => (
              <SidebarMenuItem key={action.title}>
                <SidebarMenuButton asChild>
                  <Link href={action.url} onClick={handleNavigation}>
                    <action.icon className="h-4 w-4" />
                    <span>{action.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Today's Date */}
        <SidebarGroup className={open? "flex":"hidden"}>
          <SidebarGroupLabel>Today</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem >
              <div className="px-3 py-2 text-sm">
                <div className="font-medium">{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  You have 2 appointments today
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer with User Profile */}
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg bg-blue-100 text-blue-600">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs text-muted-foreground">{user.role}</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg bg-blue-100 text-blue-600">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}