

import React from 'react'
import { QuickStat } from '../types'

const QuickStats = ({stat}:{stat:QuickStat[]}) => {
  return (
    <div className="flex gap-6 mt-4">
    {stat.map((stat: any, index: number) => (
      <div key={index} className="flex items-center gap-2">
        {stat.icon}
        <div>
          <div className="text-sm font-semibold text-gray-800">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      </div>
    ))}
  </div>  )
}

export default QuickStats