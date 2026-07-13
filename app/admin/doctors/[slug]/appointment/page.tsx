import CustomCalendar from "@/app/features/admin/doctors/appointments/customCalendar";
import EventsSidebar from "@/app/features/admin/doctors/appointments/eventsSidebar/components";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string }>;
}) {
  const { slug } = await params;
  const { date } = await searchParams;

  console.log("📅 Date from search params:", { date, doctorId: slug });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:m-10">
      {/* Left side - Events */}
      <div className="lg:col-span-3">
        <CustomCalendar />
      </div>
      <div className="lg:col-span-1">
        <EventsSidebar date={date ?? ""} doctorId={+slug} />
      </div>
  
     
    </div>
  );
}
