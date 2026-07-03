
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Badge, Link, LucideIcon } from 'lucide-react'
import React, { ReactNode } from 'react'

const SidebarMenuItemComp = ({title,isActive,badge,url,Icon,handleNavigation}:) => {
  return (
    <SidebarMenuItem key={title}>
    <SidebarMenuButton
      asChild
      isActive={isActive}
      tooltip={title}
      className={isActive ? "bg-sidebar-primary text-white hover:bg-sidebar-primary hover:text-white" : ""}
    >
      <Link href={url} onClick={handleNavigation} className="flex w-full items-center gap-3">
        <Icon />
        <span className="truncate">{title}</span>
        {badge && (
          <Badge className={isActive ? "bg-white/20 text-white" : ""}>
            {badge}
          </Badge>
        )}
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>  )
}

export default SidebarMenuItemComp