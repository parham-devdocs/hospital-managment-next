import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  format,
  isToday,
  isWeekend,
} from "date-fns";
import { colorMap } from "../data";
import { Appointment } from "../../types";

// ✅ FIXED: Proper calendar days generation
export const getCalendarDays = (currentDate: Date) => {
  // Safety check
  if (
    !currentDate ||
    !(currentDate instanceof Date) ||
    isNaN(currentDate.getTime())
  ) {
    currentDate = new Date();
  }

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayOfWeek = getDay(monthStart);
  const calendarDays: (Date | null)[] = [];

  // Pad days before month start
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // Add all days in the month
  calendarDays.push(...daysInMonth);

  // Pad days after month end to complete the grid (42 cells = 6 rows × 7 columns)
  const remainingCells = 42 - calendarDays.length;
  for (let i = 0; i < remainingCells; i++) {
    calendarDays.push(null);
  }

  return { calendarDays, monthEnd, monthStart };
};

export const getDayColor = (date: Date) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return colorMap[0] || "#000000";
  }

  const dateKey = format(date, "yyyy-MM-dd");
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = dateKey.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colorMap.length;
  return colorMap[index];
};

export const getEventsForDay = (date: Date, appointments: Appointment[]) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return [];
  }

  if (!appointments || !Array.isArray(appointments)) {
    return [];
  }

  const targetDate = format(date, "yyyy-MM-dd");

  return appointments.filter((event) => {
    if (!event) return false;

    let eventDate: Date | null = null;

    if (event.available_time?.date) {
      eventDate = new Date(event.available_time.date);
    } else if (event.available_time?.date) {
      eventDate = new Date(event.available_time.date);
    } else if (typeof event.available_time?.time === "string") {
      eventDate = new Date(event.available_time.date);
    }

    if (!eventDate || isNaN(eventDate.getTime())) return false;

    const eventDateStr = format(eventDate, "yyyy-MM-dd");
    return eventDateStr === targetDate;
  });
};
