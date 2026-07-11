// features/calendar/components/DayCell.tsx
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Appointment } from "../../../types";
import EventIndicators from "./eventIndicators";
import PopoverComp from "./popover";
import Color from "color";

interface DayCellProps {
  day: Date;
  events: Appointment[];
  isSelected: boolean;
  isToday: boolean;
  isWeekend: boolean;
  dayColor: string;
  onSelect: (date: Date) => void;
}

const DayCell = ({
  day,
  events,
  isSelected,
  isToday,
  isWeekend,
  dayColor,
  onSelect,
}: DayCellProps) => {
  const hasEvents = events.length > 0;
  
  // ✅ Color variations
  const lightColor = Color(dayColor).lighten(0.6).hex();
  const hoverColor = Color(dayColor).lighten(0.3).hex();
  const borderColor = Color(dayColor).darken(0.1).hex();
  const selectedBgColor = Color(dayColor).lighten(0.5).hex();
const selectedTextColor=Color(dayColor).lighten(.05).hex()
  return (
    <div className="aspect-square p-0.5 relative ">
      <button
        onClick={() => onSelect(day)}
        style={{
          backgroundColor: isSelected ? selectedBgColor : lightColor,
          borderColor: isSelected ? borderColor : 'transparent',
        }}
        className={cn(
          "w-full h-full rounded-md transition-all duration-200 cursor-pointer",
          "flex flex-col items-center justify-center gap-0.5",
          "border-2",
          // Base styles
          "hover:scale-105 hover:shadow-md",
          // Hover (when not selected)
          !isSelected && [
            `hover:bg-[${hoverColor}]`,
          ],
          // Selected state
          isSelected && [
            "shadow-lg shadow-blue-500/25",
            "scale-105"
          ],
          // Today state
          isToday && !isSelected && [
            "ring-2 ring-blue-400/40 ring-offset-2",
          ],
          // Weekend
          isWeekend && !isSelected && "text-red-400",
          // Selected + Weekend
          isSelected && isWeekend && "text-white",
          // Selected + Today
          isSelected && isToday && "text-white"
        )}
      >
        {/* Day Number */}
        <span
          className={cn(
            "text-sm font-semibold transition-all",
            isSelected && " font-bold scale-110",
            isToday && !isSelected && "text-blue-600",
            isWeekend && !isSelected && "text-red-400",
            !isSelected && !isToday && !isWeekend && "text-gray-700"
          )}
          style={{color:isSelected ? selectedTextColor : "black"}}
        >
          {format(day, "d")}
        </span>

        {/* Event Indicators */}
        <EventIndicators
          events={events}
          color={dayColor}
        />

        {/* Today Dot */}
        {isToday && !isSelected && (
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        )}

        {/* Selected Checkmark */}
        {isSelected && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center animate-in fade-in zoom-in duration-200">
            <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        {/* Selection glow */}
        {isSelected && (
          <div className="absolute inset-0 rounded-full -z-10 bg-blue-500/10 blur-md scale-110" />
        )}
      </button>

      {/* Popover */}
      {hasEvents && <PopoverComp date={day} appointments={events} color={dayColor} />}
    </div>
  );
};

export default DayCell;