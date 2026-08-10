
import { Stethoscope } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
      <Stethoscope className="h-4 w-8" />
    </div>
    <div className={" flex flex-col"}>
      <span className="text-lg font-semibold tracking-tight">MediBook</span>
      <span className="text-xs text-muted-foreground">Patient Portal</span>
    </div>
  </div>  )
}

export default Logo