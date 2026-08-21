"use client";
import {
  addMonths,
  getDaysInMonth,
  getMonth,
  getYear,
  startOfMonth,
} from "date-fns";
import { useState } from "react";
import { UseCalendarReturnType } from "../types";

function useCalendar<T>(data?: T[]): UseCalendarReturnType<T> {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDay, setSelectedDay] = useState<Date | null>(new Date());

  const year = getYear(currentMonth);
  const month = getMonth(currentMonth);
  const daysInMonth = getDaysInMonth(currentMonth);

  // 🔍 LOG 1: Incoming data
  console.log("📥 useCalendar received data:", data);


  const goToPreviousMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // 🔍 LOG 2: Final return values
  console.log("🔁 useCalendar return values:", {
    selectedDay,
    year,
    month,
    days: daysInMonth,
    currentMonth,
    events: data||[],
  });

  return {
    selectedDay,
    setSelectedDay,
    year,
    month,
    days: daysInMonth,
    goToNextMonth,
    goToPreviousMonth,
    currentMonth,
    setCurrentMonth,
    events: data || []
  };
}

export default useCalendar;