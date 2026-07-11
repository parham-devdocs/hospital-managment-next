// CustomCalendar.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import DayCell from "./dayCell";
import { useCalendar } from "../hooks/useCalendar";
import { useAppointments } from "../hooks/useAppointments";
import {
  getCalendarDays,
  getDayColor,
  getEventsForDay,
} from "../utils/calendarHelpers";
import { useMemo, useCallback } from "react";
import { isSameDay, isToday, isWeekend } from "date-fns";
import CalendarHeader from "./calendarHeader";
import WeekdaysHeader from "./weekdaysHeader";

export default function CustomCalendar() {
  const {
    currentDate,
    goToNextMonth,
    goToPreviousMonth,
    goToToday,
    selectedDate,
    setSelectedDate,
  } = useCalendar();

  // ✅ Memoize calendar days
  const { calendarDays } = useMemo(() => {
    return getCalendarDays(currentDate);
  }, [currentDate]);

  // ✅ Hard-code to today's date for testing
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const { appointments, error, loading } = useAppointments({
    doctorId: 16,
  });
console.log(appointments)
  const renderDayCell = useCallback(
    (day: Date | null, index: number) => {
      // Handle null days
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
          onSelect={setSelectedDate}
        />
      );
    },
    [appointments, selectedDate, setSelectedDate]
  );

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
