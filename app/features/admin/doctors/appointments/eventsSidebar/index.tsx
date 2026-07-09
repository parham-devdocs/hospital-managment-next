import React from 'react'

import { CalendarDays } from 'lucide-react';
import { appointments } from '../data';
import AppointmentCard from './appointmentCard';

const EventsSidebar = () => {
  // Get today's appointments (or you can pass selected date as prop)
  const today = new Date()
  const todayAppointments = appointments.filter(
    (appointment) => {
      const appointmentDate = new Date(appointment.date)
      return (
        appointmentDate.getDate() === today.getDate() &&
        appointmentDate.getMonth() === today.getMonth() &&
        appointmentDate.getFullYear() === today.getFullYear()
      )
    }
  )

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100/80 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-blue-600" />
          <h3 className="font-semibold text-sm text-gray-900"></h3>
        </div>
        <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
          {todayAppointments.length}
        </span>
      </div>

      {/* Appointments List */}
      <div className="space-y-3 max-h-[1000px]  overflow-y-auto pr-1 custom-scroll">
        {todayAppointments.length > 0 ? (
          todayAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              id={appointment.id}
              time={appointment.time}
              title={appointment.title}
              status={appointment.status}
              date={appointment.date}
              description={appointment.description}
              doctor={appointment.doctor}
              patient={appointment.patient}
              color={ '#3B82F6'}
              available_time={appointment.available_time}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <CalendarDays className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No appointments today</p>
            <p className="text-xs text-gray-300 mt-1">Enjoy your day off! 🎉</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default EventsSidebar