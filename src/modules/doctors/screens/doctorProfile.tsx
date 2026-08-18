

import React from 'react'
import DoctorProfile from '../components/doctor-profile'
import { mockDoctor } from '../mocks'
import { Doctor } from '../types'

const DoctorProfileScreen = ({doctorInfo}:{doctorInfo:Doctor}) => {
  return (
    <div><DoctorProfile data={doctorInfo}/></div>
  )
}

export default DoctorProfileScreen