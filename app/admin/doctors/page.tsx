import Header from "@/app/shared/components/header";
import DoctorsTable from "../../features/admin/doctors";
import { BriefcaseMedical } from "lucide-react";
const page = () => {
  return (
    <div className=' w-full h-3/4 px-10 py-4 space-y-3.5'> 
    <Header title="List Of Doctors" icon={<BriefcaseMedical/> }/>
    <DoctorsTable/>
    </div>


)
}

export default page