

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Stethoscope } from 'lucide-react'
import {type DoctorInfo } from './types'


const DoctorInfo = ({fullName,specialty,avatar_url}:DoctorInfo) => {
  return (
    <div className="flex items-center gap-3.5 p-2.5 bg-gray-50/70 rounded-xl">
    <div className="w-11 h-11 rounded-full bg-blue-100/70 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-blue-100/50">
      <Avatar className="w-full h-full">
        <AvatarImage src={avatar_url} alt="Doctor" />
        <AvatarFallback className="bg-blue-100 text-blue-700 text-sm font-medium">
          {fullName?.charAt(0) || "D"}
        </AvatarFallback>
      </Avatar>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-gray-900 truncate">
        Dr. {fullName || "Unknown"}
      </p>
      <p className="text-xs text-gray-500 flex items-center gap-1.5">
        <Stethoscope className="w-3 h-3" />
        <span>{specialty || "General"}</span>
      </p>
    </div>
  </div>  )
}

export default DoctorInfo