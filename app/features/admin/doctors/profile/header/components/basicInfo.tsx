import { Briefcase, MapPin, Calendar, Award, GraduationCap } from 'lucide-react'
import { Doctor } from '../../../types'

export const BasicInfo = ({
  specialties,
  address,
  workExperienceCount,
  fullName,
  gender,
  certificationCount,
  createdAt,
  educationCount
}: Pick<Doctor, "address"|"bio" | "createdAt" | "fullName" | "gender" | "phoneNumber" | "isActive" | "certificationCount" | "educationCount" | "specialties" | "workExperienceCount">) => {
  
  // Calculate years of experience
  const calculateExperience = (count: number | undefined) => {
    return count || 0
  }

  // Format the date if needed
  const formatDate = (date: any) => {
    if (!date) return ''
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return ''
    }
  }

  const yearsOfExperience = calculateExperience(workExperienceCount)



  return (
    <div className="space-y-3">
      {/* Header with name and gender */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            {fullName || 'Doctor'}
            {gender && (
              <span className="text-sm font-normal text-gray-500">
                ({gender})
              </span>
            )}
          </h1>
        </div>
      </div>

      {/* Specialties - FIXED: Only render if specialties exists */}
      {specialties && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-700 font-medium">
          {specialties.map((s)=> <p key={s.id}>{s.name}</p>)}
          </span>
        </div>
      )}

      {/* Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        {/* Address */}
        {address && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-gray-400 flex-shrink-0" />
            <span>{address}</span>
          </div>
        )}

        {/* Experience */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Briefcase size={16} className="text-gray-400 flex-shrink-0" />
          <span>{yearsOfExperience} {yearsOfExperience === 1 ? 'year' : 'years'} of experience</span>
        </div>

        {/* Certifications */}
        {certificationCount !== undefined && certificationCount > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Award size={16} className="text-gray-400 flex-shrink-0" />
            <span>{certificationCount} {certificationCount === 1 ? 'certification' : 'certifications'}</span>
          </div>
        )}

        {/* Education */}
        {educationCount !== undefined && educationCount > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <GraduationCap size={16} className="text-gray-400 flex-shrink-0" />
            <span>{educationCount} {educationCount === 1 ? 'degree' : 'degrees'}</span>
          </div>
        )}

        {/* Member since */}
        {createdAt && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-gray-400 flex-shrink-0" />
            <span>Member since {formatDate(createdAt)}</span>
          </div>
        )}
      </div>

      {/* Divider - optional */}
      <div className="border-t border-gray-200 my-2"></div>
    </div>
  )
}