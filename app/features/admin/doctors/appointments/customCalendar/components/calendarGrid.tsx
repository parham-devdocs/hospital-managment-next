import { useCallback, useMemo } from "react";
import { isSameDay, isToday, isWeekend, format } from "date-fns";
import DayCell from "./dayCell";
import { getDayColor, getEventsForDay } from "../../utils/calendarHelpers";
import { Appointment } from "../../../types";
import { useRouter, usePathname } from "next/navigation";

interface CalendarGridProps {
  days: (Date | null)[];
  appointments: Appointment[];
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export const CalendarGrid = ({
  days,
  appointments,
  selectedDate,
  onDateSelect,
}: CalendarGridProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Memoize day data to avoid recalculation
  const dayData = useMemo(() => {
    return days.map((day) => {
      if (!day) return null;
      
      return {
        day,
        events: getEventsForDay(day, appointments),
        color: getDayColor(day),
        isSelected: selectedDate ? isSameDay(day, selectedDate) : false,
        isToday: isToday(day),
        isWeekend: isWeekend(day),
      };
    });
  }, [days, appointments, selectedDate]);

  const pushRoute = useCallback((day: Date) => {
    const formattedDate = format(day, 'yyyy-MM-dd');
    const cleanPath = pathname.replace(/\/$/, '');
    const newPath = `${pathname}/?date=${formattedDate}`;
    
    const finalPath = newPath === cleanPath ? `${cleanPath}/${formattedDate}` : newPath;
    
    router.replace(finalPath, { scroll: false });
    
    onDateSelect(day);
  }, [pathname, router, onDateSelect]);


  return (
    <div className="grid grid-cols-7 gap-2">
      {dayData.map((data, index) => {
        if (!data) {
          return <div key={`empty-${index}`} className="aspect-square" />;
        }

        return (
          <DayCell
            key={data.day.toISOString()}
            day={data.day}
            events={data.events}
            isSelected={data.isSelected}
            isToday={data.isToday}
            isWeekend={data.isWeekend}
            dayColor={data.color}
            onSelect={()=>{pushRoute(data.day)}}
          />
        );
      })}
    </div>
  );
};