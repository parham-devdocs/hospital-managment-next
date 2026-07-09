// utils/calendar-helpers.ts
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  format,
} from "date-fns";
import { colorMap } from "../data";
import { Appointment } from "@/app/shared/types";

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
  
  // Format the target date to string for comparison
  const targetDate = format(date, "yyyy-MM-dd")
  
  return appointments.filter((event) => {
    // Handle different possible structures
    let eventDate: Date | null = null

    // If event has available_time object with date
    if (event.available_time?.date) {
      eventDate = new Date(event.available_time.date)
    }
    // If event has direct date property
    else if (event.date) {
      eventDate = new Date(event.date)
    }
    // If event has available_time as string
    else if (typeof event.available_time.time === 'string') {
      eventDate = new Date(event.available_time.date)
    }

    
    
    if (!eventDate) return false
    
    const eventDateStr = format(eventDate, "yyyy-MM-dd")
    return eventDateStr === targetDate
  })
}

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
