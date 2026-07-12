import EventsSidebar from "@/app/features/admin/doctors/appointments/eventsSidebar/components/EventSidebar";

export default async function RightPanelWithDate({
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
    <div>
      {date && (
        <h3 className="text-lg font-semibold mb-4">
          📋 Events for{" "}
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
      )}

      <EventsSidebar date={date? date :""} doctorId={+slug} />
    </div>
  );
}