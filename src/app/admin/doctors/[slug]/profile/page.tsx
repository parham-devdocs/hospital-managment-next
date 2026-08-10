
import { notFound } from "next/navigation";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: DoctorPageProps) {
  const { slug } = await params;


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Profile */}
      <div className="max-w-5xl mx-auto p-4 pb-8">
      </div>
    </div>
  );
}
