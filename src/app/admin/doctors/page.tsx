import DoctorList from '@/src/modules/doctors/screens/doctorList';
import { DoctorSearchParams } from '@/src/shared/types';



const doctorList = async ({
  searchParams,
}: {
  searchParams: Promise<DoctorSearchParams>
}) => {
  const {page,limit,specialties,fullName,isActive}=await  searchParams
  console.log('Received searchParams:',await  searchParams);
  return (
    <div>
      <DoctorList 
    page={page}
    limit={limit}
    isActive={isActive}
fullName={fullName}
specialties={specialties}
      />
    </div>
  );
};

export default doctorList;