import DoctorProfile from "@/app/features/admin/doctors/profile";
import getDoctorById from "@/app/services/doctors/getSingleDoctor";
import { notFound } from "next/navigation";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: DoctorPageProps) {
  const { slug } = await params;
  const response = await getDoctorById(slug);
console.log(response.data)
  // Handle error states
  if (!response.success || response.error) {
    if (response.status === 404) {
      notFound(); 
    }
    
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Failed to Load Doctor
          </h2>
          <p className="text-gray-600 mb-4">
            {response.error?.message || "Unable to fetch doctor information. Please try again later."}
          </p>
         
        </div>
      </div>
    );
  }

  // Ensure data exists
  if (!response.data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Profile */}
      <div className="max-w-5xl mx-auto p-4 pb-8">
        <DoctorProfile doctorInfo={response.data}  />
      </div>
    </div>
  );
}