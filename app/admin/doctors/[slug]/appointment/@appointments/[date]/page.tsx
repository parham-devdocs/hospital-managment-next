// app/admin/doctors/[slug]/appointment/@right/[date]/page.tsx
import EventsSidebar from '@/app/features/admin/doctors/appointments/eventsSidebar';
import { Suspense } from 'react';


export default async function RightPanelWithDate({
  params,
}: {
  params: Promise<{ slug: string; date: string }>;
}) {
  const resolvedParams = await params;
  const doctorId = resolvedParams.slug;
  const date = resolvedParams.date; // "2026-07-15" from URL path

  console.log('📅 Dynamic route - date from URL path:', { date, doctorId });

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        📋 Events for {new Date(date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </h3>
        <EventsSidebar date={date} doctorId={+doctorId} />
    </div>
  );
}