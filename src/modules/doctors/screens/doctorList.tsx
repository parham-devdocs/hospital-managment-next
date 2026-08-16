

import Header from '@/src/shared/components/header'
import { Stethoscope } from 'lucide-react'
import Table from "../components/table";
import PaginationComp from '@/src/shared/components/pagination/pagination';
import { DoctorSearchParams } from '@/src/shared/types';
import { parsePaginationParams } from '@/src/shared/lib/pagination';
import { getDoctorsService } from '../api/services/get-all-doctors.service';
import { cache } from 'react';
import { unstable_cache } from 'next/cache';
const DoctorList = async({page,limit,fullName,isActive,specialties}:DoctorSearchParams) => {
  const getCachedDoctors = unstable_cache(
    async (params) => getDoctorsService(params),
    ['doctors-list'], // Cache key part
    {
      tags: ['doctors'],
      revalidate: 300 // optional TTL, but we want to rely on manual revalidation mostly
    }
  );
  const {safeLimit,safePage}=parsePaginationParams(page,limit)
const {data:{pagination,data},status}=await getCachedDoctors({page:safePage,specialties,isActive,limit:safeLimit,fullName})
const {currentPage,totalItems,totalPages}=pagination
  return (
    <div className='space-y-6'>
    <Header title='list of doctors' icon={<Stethoscope/>} totalItems={totalItems}/>

<Table doctors={data}/>
        <PaginationComp url='admin/doctors' pageCount={totalPages} currentPage={currentPage}/>

        </div>
  )
}


export default DoctorList

