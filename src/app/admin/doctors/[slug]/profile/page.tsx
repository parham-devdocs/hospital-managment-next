import getDoctorById from "@/lib/services/doctors/getSingleDoctor";
import DoctorProfile from "@/src/features/admin/doctors/profile";
import { notFound } from "next/navigation";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: DoctorPageProps) {
  const { slug } = await params;
  const response = await getDoctorById(slug);
  // Handle error states
  if (!response.success || response.error) {
    if (response.status === 404) {
      notFound();
    }
  }

  // Ensure data exists
  if (!response.data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Profile */}
      <div className="max-w-5xl mx-auto p-4 pb-8">
        <DoctorProfile doctorInfo={response.data} />
      </div>
    </div>
  );
}
