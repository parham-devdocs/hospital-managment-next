

import CreateDoctorScreen from '@/src/modules/doctors/screens/createDoctor.screen'
import Header from '@/src/shared/components/header'
import { Stethoscope } from 'lucide-react'

const page =async () => {

  return (
    <div className=' space-y-6' >
        <CreateDoctorScreen/>
    </div>
  )
}

export default page