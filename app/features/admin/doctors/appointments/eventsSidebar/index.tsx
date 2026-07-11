// app/admin/doctors/[slug]/appointment/@right/components/EventsSidebar.tsx
'use client';

import { CalendarDays } from 'lucide-react';
import AppointmentCard from './appointmentCard';
import { useAppointments } from '../hooks/useAppointments';
import EventsSidebarHeader from './eventsSidebarHeader';



export default function EventsSidebar({ date, doctorId }: EventsSidebarProps) {
  const { appointments, count } = useAppointments({ 
    doctorId, 
    date 
  });
console.log({appointments})
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100/80 p-4">
      {/* Header */}
<EventsSidebarHeader date={date} count={count}/>
      {/* Appointments List */}
      <div className="space-y-3 max-h-[1000px] overflow-y-auto pr-1 custom-scroll">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              id={appointment.id}
              title={appointment.title}
              status={"cancelled"}
              description={appointment.description}
              doctor={appointment.doctor}
              patient={appointment.patient}
              color={'#3B82F6'}
              available_time={appointment.available_time}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <CalendarDays className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No appointments </p>
          </div>
        )}
      </div>
    </div>
  );
}