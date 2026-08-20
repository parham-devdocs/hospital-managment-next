"use client";
import React from "react";
import { isToday, format } from "date-fns";
import PopoverContentForNumberOfEvenst from "./popoverContent";
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover";

const Cell = ({
  color, // Background color (optional, from parent)
  events=0, // Array of events or count
  dayNumber, // The day number to display (or empty string for padding)
  date, // Full Date object (for today detection)
  isSelected, // Boolean for selected day
  onClick, // Click handler
}:{color:string,events:number,dayNumber:number,date:Date,isSelected:boolean,onClick:()=>void}) => {
  // Determine if this day is today
  const isCurrentDay = date && isToday(date);

  // Default background if not provided
  const bgColor = color || (isCurrentDay ? "bg-blue-500" : "bg-white");

  // Event indicator: show a small dot if events exist
  const hasEvents =  events > 0;

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={`
        relative w-full h-full aspect-square 
        rounded-lg 
        ${bgColor} 
        ${
          isCurrentDay
            ? "text-white font-bold shadow-lg ring-2 ring-blue-300"
            : "text-gray-800"
        }
       
        border border-gray-200
        flex flex-col items-center justify-center
        cursor-pointer
        select-none
      `}
          onClick={onClick}
        >
          <span className="text-lg font-medium">{dayNumber}</span>

          {hasEvents  && (
            <div className={`absolute bottom-1 w-2 h-2 bg-purple-600 rounded-full`} />
          )}

          {isSelected && (
            <div className="absolute inset-0 rounded-lg ring-2 ring-blue-600 ring-offset-2" />
          )}
        </div>
      </PopoverTrigger>
      {hasEvents && <PopoverContentForNumberOfEvenst date={date} title="doctor available times" eventCount={events} color={color}/>}
    </Popover>
  );
};

export default Cell;
