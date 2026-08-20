"use client";
import {
  addMonths,
  getDaysInMonth,
  getMonth,
  getYear,
  startOfMonth,
} from "date-fns";
import { useMemo, useState } from "react";

import { Dispatch, SetStateAction } from "react";
import { UseCalendarReturnType } from "../types";


// No 'extends' - just plain T, optional data
function useCalendar<T>(data?: T[]): UseCalendarReturnType<T>{
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDay, setSelectedDay] = useState<Date | null>(new Date());

  const year = getYear(currentMonth);
  const month = getMonth(currentMonth);
  const daysInMonth = getDaysInMonth(currentMonth);

  const eventsForMonth = useMemo(() => {
    if (!data) return [];

    return data.filter((event) => {
      return true;
    });
  }, [data, year, month]);

  const goToPreviousMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

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
    events: eventsForMonth
  };
}

export default useCalendar;
