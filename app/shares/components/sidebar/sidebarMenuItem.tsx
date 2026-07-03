
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { MenuItem } from './types'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

const SidebarMenuItemComp = ({title,isActive,badge,url,Icon,handleNavigation}:MenuItem) => {
  return (
    <SidebarMenuItem >
    <SidebarMenuButton
      asChild
      isActive={isActive}
      tooltip={title}
      className={isActive ? "bg-sidebar-primary  text-white hover:bg-sidebar-primary hover:text-white" : ""}
    >
      <Link href={url} onClick={handleNavigation} className="flex w-full items-center gap-3 justify-between">
      <div className=' flex items-center gap-2'>
      <Icon />
      <span className="truncate">{title}</span>
      </div>
       
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