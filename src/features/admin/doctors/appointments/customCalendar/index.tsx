// features/admin/doctors/appointments/customCalendar/index.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useCalendar } from "./hooks/useCalendar";
import { useAppointments } from "./hooks/useAppointments";
import { CalendarContainer } from "./components/CalendarContainer";

export default function CustomCalendar() {
  const searchParams = useSearchParams();
  const dateFromUrl = searchParams.get('date') || undefined;

  const {
    currentDate,
    goToNextMonth,
    goToPreviousMonth,
    goToToday,
    selectedDate,
    setSelectedDate,
  } = useCalendar();

  const { count, error, appointments } = useAppointments({
    doctorId: 16,
    date: dateFromUrl, // ✅ Pass date from URL
  });

  if (error) {
    return (
      <Card className="mx-auto w-full shadow-lg">
        <CardContent className="p-6">
          <div className="text-red-500">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto w-full shadow-lg">
      <CardContent className="p-6">
        <CalendarContainer
          currentDate={currentDate}
          appointments={appointments}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          onNavigate={{
            next: goToNextMonth,
            today: goToToday,
            previous: goToPreviousMonth,
          }}
        />
      </CardContent>
    </Card>
  );
}