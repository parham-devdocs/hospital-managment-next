import CustomCalendar from '@/app/shared/components/calendar'
import Header from '@/app/shared/components/header'
import { ClipboardList } from 'lucide-react'

const page = () => {
  return (
    <div className='p-6 space-y-4'>
      <Header 
        title='Appointments' 
        icon={<ClipboardList/>}
      />
      <CustomCalendar/>
    </div>
  )
}

export default page