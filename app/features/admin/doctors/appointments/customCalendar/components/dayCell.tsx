// dayCell.tsx
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DayCellProps } from "../../types";
import EventIndicators from "./eventIndicators";
import PopoverComp from "./popover";


const DayCell = ({
  day,
  events,
  isSelected,
  isToday,
  isWeekend,
  dayColor,
  onSelect,
}: DayCellProps) => {
  // ✅ Handle null or invalid days
  if (!day || !(day instanceof Date) || isNaN(day.getTime())) {
    return <div className="aspect-square" />;
  }

  // ✅ Handle empty events
  const safeEvents = Array.isArray(events) ? events : [];

  return (
    <div className="relative aspect-square"         onClick={() => onSelect(day)}>
      <button
        className={cn(
          "w-full h-full rounded-full transition-all duration-200 cursor-pointer",
          "flex flex-col items-center justify-center gap-0.5",
          "hover:scale-105 hover:shadow-md",
          isWeekend && "text-red-400",
          isToday && !isSelected && "ring-2 ring-primary/50",
          isSelected && "border-primary bg-transparent text-white shadow-lg scale-105",
          !isSelected && "hover:bg-primary/10"
        )}
      >
        <span
          className={cn("text-base font-semibold", isSelected && "text-white")}
        >
          {format(day, "d")}
        </span>
        <EventIndicators events={safeEvents} color={dayColor} />
      </button>
      <PopoverComp date={day} appointments={safeEvents} color={dayColor} />
    </div>
  );
};

export default DayCell;
