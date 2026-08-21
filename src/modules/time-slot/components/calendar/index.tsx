"use client";
import Cell from "./cell";
import Controllers from "./controllers";
import { TimeSlot } from "../../types";
import { UseCalendarReturnType } from "@/src/shared/types";

const CalendarGrid = ({
  currentMonth,
  setCurrentMonth,
  setSelectedDay,
  selectedDay,
  days,
  year,
  events,
  month,
}: UseCalendarReturnType<TimeSlot>) => {
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
          const getEventDate = (event: any): Date | null => {
            if (!event) return null;
            const raw = event.startingTime ?? event.date ?? null;
            if (!raw) return null;
            
            // ✅ If it's already a Date, return it
            if (raw instanceof Date) return raw;
            
            // ✅ If it's a string, parse it
            if (typeof raw === "string") {
              const d = new Date(raw);
              return isNaN(d.getTime()) ? null : d;
            }
            
            return null;
          };
          function addTwoNumbers(l1: number[] , l2:number[] ): [] {
            const reverseFistList=l1?.reverse()
            const reverseList2=l2?.reverse()
            const mergedList=[]
          for (let index = 0; index <reverseFistList?.length; index++) {
            const first = reverseFistList[index];
            const second=reverseList2[index]
            mergedList.push(first+second)
            
          }
            
        };
          const dayEvents = events?.filter((event) => {
            const eventDate = getEventDate(event);
            if (!eventDate) return false;
            return (
              eventDate.getFullYear() === year &&
              eventDate.getMonth() === month &&
              eventDate.getDate() === dayNumber
            );
          });

          const eventCount = dayEvents?.length;
          console.log({ eventCount });
          return (
            <Cell
              key={index}
              dayNumber={dayNumber}
              date={cellDate}
              color={color}
              isSelected={isSelected}
              onClick={() => {
                setSelectedDay(cellDate);
                console.log("Selected day:", cellDate);
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
