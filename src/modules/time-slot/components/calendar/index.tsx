"use client";

import { useParams } from "next/navigation";
import useCalendar from "@/src/shared/hooks/useCalendar";
import CalendarGrid from "@/src/modules/time-slot/components/calendar/calendar";
import { Loader2, AlertCircle, CalendarOff } from "lucide-react";
import { useTimeSlots } from "../../api/hooks/getTimeSlots";
import { TimeSlot } from "../../types";

export function TimeSlotsCalendar() {
  const params = useParams<{ slug: string }>();
  const doctorId = params?.slug;

  // 👇 Still fetching but we won't use the data
  const { data, status, isLoading, error } = useTimeSlots(doctorId);

  const {
    selectedDay,
    setCurrentMonth,
    setSelectedDay,
    days,
    goToNextMonth,
    goToPreviousMonth,
    month,
    currentMonth,
    events,
    year,
  } = useCalendar<TimeSlot>(data); // 👈 Pass mockEvents here

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <p className="text-gray-500">Loading available time slots...</p>
      </div>
    );
  }

  if (status === "error" || error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <p className="text-lg font-medium text-red-600">
          Failed to load time slots
        </p>
        <p className="text-sm text-gray-500 max-w-md text-center">
          {error?.message ||
            "Something went wrong while fetching available slots."}
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <CalendarOff className="w-12 h-12 text-gray-400" />
        <p className="text-lg font-medium text-gray-700">
          No Available Time Slots
        </p>
        <p className="text-sm text-gray-500 max-w-md text-center">
          This doctor doesn't have any available time slots at the moment.
          Please check back later or contact the clinic directly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6">
     

      <div className="w-full max-w-4xl bg-white rounded-lg border shadow-lg p-4">
        <CalendarGrid
          selectedDay={selectedDay}
          setCurrentMonth={setCurrentMonth}
          setSelectedDay={setSelectedDay}
          days={days}
          goToNextMonth={goToNextMonth}
          goToPreviousMonth={goToPreviousMonth}
          month={month}
          currentMonth={currentMonth}
          events={events || []}
          year={year}
        />
      </div>
    </div>
  );
}
