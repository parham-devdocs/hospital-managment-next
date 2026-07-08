// utils/calendar-helpers.ts
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  format,
} from "date-fns";
import { colorMap } from "../data";
import { Appointment } from "../types";

const getDayColor = (date: Date) => {
  const dateKey = format(date, "yyyy-MM-dd");
  // Simple hash function to get a consistent index
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = dateKey.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colorMap.length;
  return colorMap[index];
};

const getEventsForDay = (date: Date, appointments: Appointment[]) => {
  return appointments.filter(
    (event) => format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
  );
};

export { getDayColor, getEventsForDay };
export const getCalendarDays = (currentDate: Date) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayOfWeek = getDay(monthStart);

  const calendarDays: (Date | null)[] = [];

  // Pad with nulls for days before the 1st
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push(null);
  }

  calendarDays.push(...daysInMonth);

  return calendarDays;
};
