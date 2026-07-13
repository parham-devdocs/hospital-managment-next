import React from 'react'
import { BasicInfoProps } from '../types'
import { Briefcase, MapPin, Star } from 'lucide-react'

export const BasicInfo = ({specialty,fullName,rating,totalPatients,location,experience}:BasicInfoProps) => {
  return (
    <div>
    <h1 className="text-2xl font-bold text-gray-900">
      {fullName}
    </h1>
    <div className="flex flex-wrap items-center gap-2 mt-1">
      <span className="text-gray-600 font-medium">{specialty.name}</span>
      <span className="text-gray-300">•</span>
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-gray-700 font-semibold">{rating}</span>
        <span className="text-gray-400 text-sm">({totalPatients.toLocaleString()}+ patients)</span>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-gray-500">
      <span className="flex items-center gap-1">
        <MapPin size={14} className="text-gray-400" />
        {location}
      </span>
      <span className="flex items-center gap-1">
        <Briefcase size={14} className="text-gray-400" />
        {experience} years
      </span>
    </div>
  </div>  )
}
