// app/admin/doctors/[slug]/appointment/@right/components/EventsSidebar.tsx
'use client';

import { CalendarDays } from 'lucide-react';
import AppointmentCard from './appointmentCard';
import { useAppointments } from '../hooks/useAppointments';

interface EventsSidebarProps {
  date: string;
  doctorId: number;  // ← Now receives doctorId as prop
}

export default function EventsSidebar({ date, doctorId }: EventsSidebarProps) {
  const { appointments, count } = useAppointments({ 
    doctorId, 
    date 
  });
console.log({appointments})
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100/80 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-blue-600" />
          <h3 className="font-semibold text-sm text-gray-900">
            Appointments for {new Date(date).toLocaleDateString()}
          </h3>
        </div>
        <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
          {appointments.length}
        </span>
      </div>

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