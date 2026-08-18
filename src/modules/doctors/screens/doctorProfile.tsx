

import React from 'react'
import DoctorProfile from '../components/doctor-profile'
import { Doctor } from '../types'
import Header from '@/src/shared/components/header'
import { User } from 'lucide-react'

const DoctorProfileScreen = ({doctorInfo}:{doctorInfo:Doctor}) => {
  return (
    <div className=' space-y-6 w-full'>
            <Header title='Doctor profile' icon={<User />}  />

      <DoctorProfile data={doctorInfo}/>
      </div>
  )
}

export default DoctorProfileScreen