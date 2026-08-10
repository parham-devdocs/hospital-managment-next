

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { NamePropType } from './types'

const Name = ({adminAvatar,adminName}:NamePropType) => {
  return (
<div className="flex items-center gap-2.5 rounded-lg bg-primary/5 px-2.5 py-1.5">
  <Avatar className="h-7 w-7 border border-primary/20">
    <AvatarImage src={adminAvatar} />
    <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-bold">
      {adminName.split(" ").map(n => n[0]).join("")}
    </AvatarFallback>
  </Avatar>
  <div className=" flex-col items-start hidden lg:flex">
    <span className="text-xs font-semibold text-foreground leading-tight">
      {adminName}
    </span>
    <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 leading-tight">
      Admin
    </span>
  </div>
</div>  )
}

export default Name