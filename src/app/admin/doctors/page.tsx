import DoctorList from '@/src/modules/doctors/screens/doctorList'
import { auth } from '@clerk/nextjs/server'

const doctorList =async () => {


  return (
    <div><DoctorList/></div>
  )
}

export default doctorList