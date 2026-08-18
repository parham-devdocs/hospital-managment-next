import DoctorList from '@/src/modules/doctors/screens/doctorList';
import { DoctorSearchParams } from '@/src/shared/types';



const doctorList = async ({
  searchParams,
}: {
  searchParams: Promise<DoctorSearchParams>
}) => {
  const {page,limit,specialties,fullName,isActive}=await  searchParams
  console.log('Received searchParams:',await  searchParams);
  let specialtiesArray: string[] | undefined;
  if (specialties && typeof specialties==="string") {
    try {
      const parsed = JSON.parse(specialties);
      if (Array.isArray(parsed)) {
        specialtiesArray = parsed;
      }
    } catch {
      // If not valid JSON, treat as single value? Or ignore.
    }
  }

  return (
    <div>
      <DoctorList 
    page={page}
    limit={limit}
    isActive={isActive}
fullName={fullName}
specialties={specialtiesArray}
      />
    </div>
  );
};

export default doctorList;