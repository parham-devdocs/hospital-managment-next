// features/calendar/components/CalendarContainer.tsx
import { useMemo } from "react";
import { getCalendarDays } from "../../utils/calendarHelpers";
import CalendarHeader from "./calendarHeader";
import { Appointment } from "../../../types";
import { CalendarGrid } from "./calendarGrid";
import CalendarWeekdays from "./calendarWeekdays";

interface CalendarContainerProps {
  currentDate: Date;
  selectedDate: Date | null;
  appointments: Appointment[];
  onDateSelect: (date: Date) => void;
  onNavigate: {
    next: () => void;
    previous: () => void;
    today: () => void;
  };
}

export const CalendarContainer = ({
  currentDate,
  selectedDate,
  appointments,
  onDateSelect,
  onNavigate,
}: CalendarContainerProps) => {
  const { calendarDays } = useMemo(() => {
    return getCalendarDays(currentDate);
  }, [currentDate]);

  return (
    <div className="space-y-4">
      <CalendarHeader
      goToNextMonth={onNavigate.next}
      goToPreviousMonth={onNavigate.previous}
      goToToday={onNavigate.today}
        currentDate={currentDate}
      />
      <CalendarWeekdays />
      <CalendarGrid
        days={calendarDays}
        appointments={appointments}
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
      />
    </div>
  );
};