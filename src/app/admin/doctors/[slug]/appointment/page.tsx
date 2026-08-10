import AppointmentScreen from "@/src/modules/appointments/screens/appointments.screen";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string }>;
}) {
  const { slug } = await params;
  const { date } = await searchParams;


  return (
    <div>
      <AppointmentScreen slug={slug} date={date as string}/>
    </div>
  );
}
