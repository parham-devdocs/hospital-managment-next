"use client";
import Cell from "./cell";
import Controllers from "./controllers";
import { TimeSlot } from "../../types";
import { UseCalendarReturnType } from "@/src/shared/types";
import { useDayTimeSlots } from "../../store/dayTimeSlots";

const CalendarGrid = ({
  currentMonth,
  setCurrentMonth,
  setSelectedDay,
  selectedDay,
  days,
  year,
  events = [], // default to empty array
  month,
}: UseCalendarReturnType<TimeSlot>) => {
  const {setSlots}=useDayTimeSlots()
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
            ? selectedDay.getFullYear() === year &&
              selectedDay.getMonth() === month &&
              selectedDay.getDate() === dayNumber
            : false;

          // Filter events for this day
          const dayEvents = events.filter((event) => {
            const eventDate = new Date(event.startingTime);
            if (!eventDate) return false;
            return (
              eventDate.getFullYear() === year &&
              eventDate.getMonth() === month &&
              eventDate.getDate() === dayNumber
            );
          });
          const eventCount = dayEvents.length;
          return (
            <Cell
              key={index}
              dayNumber={dayNumber}
              date={cellDate}
              color={color}
              isSelected={isSelected}
              onClick={() => {
                setSelectedDay(cellDate);
                setSlots(dayEvents)

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