

import Header from '@/src/shared/components/header'
import { Stethoscope } from 'lucide-react'
import Table from "../components/table";
import PaginationComp from '@/src/shared/components/pagination/pagination';
const DoctorList = () => {
  return (
    <div className='space-y-6'>
    <Header title='list of doctors' icon={<Stethoscope/>}/>
<Table/>
        <PaginationComp url='admin/doctors' pageCount={1} activePage={1}/>
        </div>
  )
}

export default DoctorList