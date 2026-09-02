import { getSingleDoctorService } from "@/src/modules/doctors/api/services/getSingleDoctor";
import DoctorProfileScreen from "@/src/modules/doctors/screens/doctorProfile.screen";


type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: DoctorPageProps) {
  const { slug } = await params;

  const doctorInfo=await getSingleDoctorService(slug)
  return (
    <div className="">
      {/* Main Profile */}
      <div className=" mx-auto p-4 pb-8">
        <DoctorProfileScreen doctorInfo={doctorInfo.data.data}/>
      </div>
    </div>
  );
}
