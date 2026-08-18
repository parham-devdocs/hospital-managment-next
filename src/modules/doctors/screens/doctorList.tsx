import Header from '@/src/shared/components/header'
import { Stethoscope } from 'lucide-react'
import Table from "../components/table";
import PaginationComp from '@/src/shared/components/pagination/pagination';
import { DoctorSearchParams } from '@/src/shared/types';
import { parsePaginationParams } from '@/src/shared/lib/pagination';
import { getDoctorsService } from '../api/services/get-all-doctors.service';
import { cache } from 'react';
import FilterComp from '../components/filter';

// Define cached function outside to reuse across renders? Actually cache is per request, so it's fine.
const getCachedDoctors = cache(
  async (page?: number, limit?: number, specialties?: string[], isActive?: boolean, fullName?: string) => {
    return await getDoctorsService({ page, limit, specialties, isActive, fullName });
  }
);

const DoctorList = async ({ page, limit, fullName, isActive, specialties }: DoctorSearchParams) => {
  const { safeLimit, safePage } = parsePaginationParams(page, limit);
  console.log({specialties})
  // Ensure boolean conversion if needed
  
  const { data: { pagination, data }, status } = await getCachedDoctors(
    safePage,
    safeLimit,
    specialties ,
    isActive,
    fullName 
  );
  
  const { currentPage, totalItems, totalPages } = pagination;

  return (
    <div className='space-y-6'>
      <Header title='list of doctors' icon={<Stethoscope />} totalItems={totalItems} />
      <FilterComp />
      <Table doctors={data} />
      <PaginationComp url='admin/doctors' pageCount={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default DoctorList;