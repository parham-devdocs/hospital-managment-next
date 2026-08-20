"use client";
import Cell from "./cell";
import { isSameDay } from "date-fns";
import Controllers from "./controllers";
import { UseCalendarReturnType } from "../../types";

// ✅ Make the component generic: <T> goes right before the props destructuring
const CalendarGrid = <T extends unknown>({
  currentMonth,
  setCurrentMonth,
  setSelectedDay,
  selectedDay,
  days,
  year,
  events,
  month,
}: UseCalendarReturnType<T>) => {
  const colors = [
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
  ];

  return (
    <div className="w-full h-full p-4">
      <Controllers
        setCurrentMonth={setCurrentMonth}
        setSelectedDay={setSelectedDay}
        currentMonth={currentMonth}
      />
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: days }).map((_, index) => {
          const dayNumber = index + 1;
          const cellDate = new Date(year, month, dayNumber);
          const color = colors[index % 6];
          const isSelected = selectedDay
            ? isSameDay(cellDate, selectedDay)
            : false;
          const dayEvents = events?.filter((event) =>
            isSameDay((event as any).date, cellDate)
          );
          const eventCount = dayEvents?.length || 0;

          return (
            <Cell
              key={index}
              dayNumber={dayNumber}
              date={cellDate}
              color={color}
              isSelected={isSelected}
              onClick={() => {
                setSelectedDay(cellDate);
                console.log({ cellDate, selectedDay });
              }}
              events={eventCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
