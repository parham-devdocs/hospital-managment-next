// app/admin/doctors/[slug]/appointment/@right/[date]/page.tsx
import EventsSidebar from '@/app/features/admin/doctors/appointments/eventsSidebar';
import { format } from 'date-fns';

export default async function RightPanelWithDate({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const doctorId = resolvedParams.slug;
  
  // Get today's date
  const today = new Date();
  const dateString = format(today, 'yyyy-MM-dd');
 

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">
        📋 Events for {dateString}
      </h3>
      <EventsSidebar date={dateString} doctorId={+doctorId} />
    </div>
  );
}