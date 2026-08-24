import DoctorList from '@/src/modules/doctors/screens/doctorList';
import { DoctorSearchParams } from '@/src/shared/types';



const doctorList = async ({
  searchParams,
}: {
  searchParams: Promise<DoctorSearchParams>
}) => {
  const {page,limit,specialty,fullName,isActive}=await  searchParams
  

  return (
    <div>
      <DoctorList 
    page={page}
    limit={limit}
    isActive={isActive}
fullName={fullName}
specialty={specialty}
      />
    </div>
  );
};

export default doctorList;