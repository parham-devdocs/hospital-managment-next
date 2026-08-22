"use client";


import { usePathname } from "next/navigation";

import Header from "./header";
import SidebarMenuItemComp from "./sidebarMenuItem";
import Footer from "./footer";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarRail, useSidebar } from "@/components/ui/sidebar";
import { NavItems } from "./navItems";

// Navigation items for patient (hardcoded)
const events = [
  {
    date: new Date(2026, 6, 3), // July 3, 2026
    note: "Appointment with Dr. Sarah Johnson - Annual Checkup",
  },
  {
    date: new Date(2026, 6, 3),
    note: "Follow-up blood test results review",
  },
  {
    date: new Date(2026, 6, 3),
    note: "Physical therapy session at 2:30 PM",
  },
];

// Static user data - replace with actual static data or props


// Define the props interface
interface AppSidebarProps {
  user?: {
    name: string;
    email: string;
    role: "admin"|"patient"|"doctor";
    avatar?: string;
  };
  events?: Array<{ date: Date; note: string }>;
}

export default function AppSidebar({ 
  user , 
  events: customEvents = events 
}: AppSidebarProps) {
  const pathname = usePathname();
  const { setOpenMobile, open } = useSidebar();

  // Close sidebar on mobile when navigating
  const handleNavigation = () => {
    setOpenMobile(true);
  };

  // Use props or fallback to static data
  const userName = user?.name || "User";
  const userAvatar = user?.avatar || "";
  const userEmail = user?.email || "";
  const userRole = user?.role || "patient";

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
            {NavItems.map((item) => {
              const isActive =
                pathname === item.url || pathname.startsWith(item.url + "/");
              return (
                <SidebarMenuItemComp
                  key={item.title}
                  isActive={isActive}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                  handleNavigation={handleNavigation}
                />
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Today's Date */}
      </SidebarContent>

      {/* Footer with User Profile */}
      <Footer
        name={userName}
        avatar={userAvatar}
        email={userEmail}
        role={userRole}
        fallback=""
      />

      <SidebarRail />
    </Sidebar>
  );
}