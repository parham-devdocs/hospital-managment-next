import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { MenuItem } from './types'
import Link from 'next/link'

const SidebarMenuItemComp = ({ title, icon: Icon,isActive, url, handleNavigation }: MenuItem) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={title}
        className={`${isActive ? "bg-sidebar-primary text-white" :" text-primary" }  hover:bg-primary-foreground hover:text-primary`}
      >
        <Link href={url} onClick={handleNavigation} className="flex w-full items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <span className="truncate">{title}</span>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export default SidebarMenuItemComp