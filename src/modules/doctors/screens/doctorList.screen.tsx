import Header from '@/src/shared/components/header'
import { Stethoscope } from 'lucide-react'
import Table from "../components/table";
import PaginationComp from '@/src/shared/components/pagination/pagination';
import { DoctorSearchParams } from '@/src/shared/types';
import { parsePaginationParams } from '@/src/shared/lib/pagination';
import { getDoctorsService } from '../api/services/get-all-doctors.service';
import FilterComp from '../components/filter';



const DoctorList = async ({ page, limit, fullName, isActive, specialty}: DoctorSearchParams) => {
  const { safeLimit, safePage } = parsePaginationParams(page, limit);
  // Ensure boolean conversion if needed
  
  const { data: { pagination, data }, status } = await  getDoctorsService({ page:safePage, limit:safeLimit, specialty, isActive, fullName });
  
  
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