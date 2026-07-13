
import DoctorProfile from "@/app/features/admin/doctors/profile";


type DoctorPageProps = {
  params: Promise<{ id: string }>;
};

export default  function page({ params }: DoctorPageProps) {
  const id="10"

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Main Profile */}
      <div className="max-w-5xl mx-auto p-4 pb-8">
        <DoctorProfile />
      </div>

      
    </div>
  );
}

