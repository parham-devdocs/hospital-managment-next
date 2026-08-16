

import Header from '@/src/shared/components/header'
import { Stethoscope } from 'lucide-react'
import Table from "../components/table";
import PaginationComp from '@/src/shared/components/pagination/pagination';
import { DoctorSearchParams } from '@/src/shared/types';
const DoctorList = ({page,limit,fullName,isActive,specialties}:DoctorSearchParams) => {
  return (
    <div className='space-y-6'>
    <Header title='list of doctors' icon={<Stethoscope/>}/>
<Table page={page} isActive={isActive} fullName={fullName} limit={limit} specialties={specialties}/>
        <PaginationComp url='admin/doctors' pageCount={1} activePage={1}/>
        </div>
  )
}

export default DoctorList