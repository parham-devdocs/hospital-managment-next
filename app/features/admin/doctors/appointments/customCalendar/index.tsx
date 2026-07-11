"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useCalendar } from "./hooks/useCalendar";
import { useAppointments } from "./hooks/useAppointments";
import { CalendarContainer } from "./components/CalendarContainer";

export default function CustomCalendar() {

  
  const {
    currentDate,
    goToNextMonth,
    goToPreviousMonth,
    goToToday,
    selectedDate,
    setSelectedDate,
  } = useCalendar();

  // ✅ Handle date selection with URL update


  const { appointments, error, loading } = useAppointments({
    doctorId: 16,
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
      <CalendarContainer currentDate={currentDate} appointments={appointments} selectedDate={selectedDate} onDateSelect={setSelectedDate} onNavigate={{next:goToNextMonth,today:goToToday,previous:goToPreviousMonth}}/>
</CardContent>
    </Card>
  )
}