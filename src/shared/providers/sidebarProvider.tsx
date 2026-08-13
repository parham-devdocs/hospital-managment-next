import  { ReactNode } from 'react'
import { TooltipProvider as Provider } from '@/components/ui/tooltip'
import { SidebarProvider } from '@/components/ui/sidebar'

interface SidebarProviderProps {
  children: ReactNode
}

const TooltipProvider = ({ children }: SidebarProviderProps) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}

export default TooltipProvider