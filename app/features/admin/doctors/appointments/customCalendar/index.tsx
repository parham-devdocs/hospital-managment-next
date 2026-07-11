// CustomCalendar.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useCalendar } from "./hooks/useCalendar";
import { useAppointments } from "./hooks/useAppointments";
import {
  getCalendarDays,
  getDayColor,
  getEventsForDay,
} from "../utils/calendarHelpers";
import { useMemo, useCallback } from "react";
import { format, isSameDay, isToday, isWeekend } from "date-fns";
import CalendarHeader from "./components/calendarHeader";
import WeekdaysHeader from "./components/weekdaysHeader";
import DayCell from "./components/dayCell";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function CustomCalendar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const {
    currentDate,
    goToNextMonth,
    goToPreviousMonth,
    goToToday,
    selectedDate,
    setSelectedDate,
  } = useCalendar();

  // ✅ Handle date selection with URL update
  const handleDateSelect =(day: Date) => {
    if (!day) return;
    
    // Set selected date
    setSelectedDate(day);
    
    // Format date for URL
    const formattedDate = format(day, 'yyyy-MM-dd');
    
    // Update URL with date parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set('date', formattedDate);
    
    // Push to URL bar without page reload
    router.push(`/admin/doctors/16/appointment?${params.toString()}`, { scroll: false })
    
    console.log('📅 Selected date:', formattedDate);

  }

  // ✅ Memoize calendar days
  const { calendarDays } = useMemo(() => {
    return getCalendarDays(currentDate);
  }, [currentDate]);

  const { appointments, error, loading } = useAppointments({
    doctorId: 16,
  });

  const renderDayCell =(day: Date | null, index: number) => {
      if (!day) {
        return <div key={`empty-${index}`} className="aspect-square" />;
      }
      
      const dayEvents = getEventsForDay(day, appointments);
      const dayColor = getDayColor(day);
      const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
      const isTodayDate = isToday(day);
      const isWeekendFn = isWeekend(day);

      return (
        <DayCell
          key={day.toISOString()}
          day={day}
          events={dayEvents}
          isSelected={isSelected}
          isToday={isTodayDate}
          isWeekend={isWeekendFn}
          dayColor={dayColor}
          onSelect={handleDateSelect} // ✅ Pass the handler properly
        />
      );
  }

  if (loading) {
    return (
      <Card className="mx-auto w-full shadow-lg">
        <CardContent className="p-6 flex items-center justify-center min-h-[400px]">
          <div>Loading appointments...</div>
        </CardContent>
      </Card>
    );
  }

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
        <CalendarHeader
          currentDate={currentDate}
          goToNextMonth={goToNextMonth}
          goToPreviousMonth={goToPreviousMonth}
          goToToday={goToToday}
        />

        <WeekdaysHeader />

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => renderDayCell(day, index))}
        </div>
      </CardContent>
    </Card>
  );
}