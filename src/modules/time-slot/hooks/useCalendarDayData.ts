import { useMemo } from "react";
import { TimeSlot } from "../types";

interface DayData {
  dayNumber: number;
  date: Date;
  color: string;
  isSelected: boolean;
  eventCount: number;
  dayEvents: TimeSlot[];
}

interface useCalendarDaysProps {
  year: number;
  month: number;
  days: number;
  events: TimeSlot[];
  selectedDay: Date | null;
}
const useCalendarDayData = ({
  year,
  days,
  month,
  events,
  selectedDay,
}: useCalendarDaysProps): DayData[] => {
  const colors = [
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
  ];

  return useMemo(() => {
    return Array.from({ length: days }).map((_, index) => {
      const dayNumber = index + 1;
      const date = new Date(year, month, dayNumber);
      const isSelected = selectedDay
        ? selectedDay.getFullYear() === year &&
          selectedDay.getMonth() === month &&
          selectedDay.getDate() === dayNumber
        : false;

      const dayEvents = events.filter((event) => {
        const eventDate = new Date(event.startingTime);
        if (!eventDate) return false;
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() === month &&
          eventDate.getDate() === dayNumber
        );
      });

      return {
        dayNumber,
        date,
        color: colors[index % 6],
        isSelected,
        dayEvents,
        eventCount: dayEvents.length,
      };
    });
  }, [year, month, days, events, selectedDay]);
};

export default useCalendarDayData;
