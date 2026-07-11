

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import { type PatientInfo } from './types'

const PatientInfo = ({fullName,avatar_url}:PatientInfo) => {
  return (
    <div className="flex items-center gap-3.5 p-2.5 bg-gray-50/70 rounded-xl">
    <div className="w-11 h-11 rounded-full bg-green-100/70 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-green-100/50">
      <Avatar className="w-full h-full">
        <AvatarImage src={avatar_url} alt="Patient" />
        <AvatarFallback className="bg-green-100 text-green-700 text-sm font-medium">
          {fullName?.charAt(0) || "P"}
        </AvatarFallback>
      </Avatar>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-gray-900 truncate">
        {fullName || "Unknown Patient"}
      </p>
      <p className="text-xs text-gray-500 flex items-center gap-1.5">
        <User className="w-3 h-3" />
        <span>Patient</span>
      </p>
    </div>
  </div>  )
}

export default PatientInfo