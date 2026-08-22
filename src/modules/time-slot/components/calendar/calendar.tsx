"use client";
import Cell from "./cell";
import Controllers from "./controllers";
import { TimeSlot } from "../../types";
import { UseCalendarReturnType } from "@/src/shared/types";
import { useDayTimeSlots } from "../../store/dayTimeSlots";
import useCalendarDays from "../../hooks/useCalendarDays";

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
  const daysData=useCalendarDays({selectedDay,days,month,year,events})

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
        {daysData.map((d, index) => {
          return (
            <Cell
              key={index}
              dayNumber={d.dayNumber}
              date={d.date}
              color={d.color}
              isSelected={d.isSelected}
              onClick={() => {
                setSelectedDay(d.date);
                setSlots(d.dayEvents)

              }}
              events={d.eventCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;