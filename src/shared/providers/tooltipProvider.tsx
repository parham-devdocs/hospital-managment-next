import React, { ReactNode } from 'react'
import { TooltipProvider as Provider } from '@/components/ui/tooltip'

interface TooltipProviderProps {
  children: ReactNode
}

const TooltipProvider = ({ children }: TooltipProviderProps) => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default TooltipProvider