import { Clock } from 'lucide-react'
import React from 'react'

const Time = ({time}:{time:string}) => {
  return (
<div className="flex items-center gap-2">
  <Clock className="w-3.5 h-3.5 text-gray-400" />
  <span className="px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full">
    {time || "TBD"}
  </span>
</div>

)
}

export default Time