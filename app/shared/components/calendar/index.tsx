"use client"
import { format, isSameDay, isToday} from "date-fns"
import { Card, CardContent } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import PopoverComp from "./popover"
import { appointments } from "./data"
import WeekdaysHeader from "./weekdaysHeader"
import CalendarHeader from "./calendarHeader"
import { useCalendar } from "./hooks/useCalendar"
import { getCalendarDays, getDayColor, getEventsForDay } from "./utils/calendarHelpers"

export default function CustomCalendar() {

const {selectedDate,setSelectedDate,currentDate,goToNextMonth,goToPreviousMonth,goToToday}=useCalendar()
 const calendarDays=getCalendarDays(currentDate)

  const renderDayCell = (day: Date | null, index: number) => {
    if (!day) {
      return <div key={`empty-${index}`} className="aspect-square " />
    }

    const dayEvents = getEventsForDay(day,appointments)
    const hasEvent = dayEvents.length > 0
    const isSelected = selectedDate ? isSameDay(day, selectedDate) : false
    const isToday_date = isToday(day)
    const isWeekend = day.getDay() === 0 || day.getDay() === 6
    const dayColor = getDayColor(day)

    return (
      <div key={day.toISOString()} className="relative aspect-square">
        {/* Day button */}
        <button
          onClick={() => setSelectedDate(day)}
          className={cn(
            "w-full h-full rounded-full transition-all duration-200 cursor-pointer",
            "flex flex-col items-center justify-center gap-0.5",
            "hover:scale-105 hover:shadow-md",
            isWeekend && "text-red-400",
            isToday_date && !isSelected && "ring-2 ring-primary/50",
            isSelected && "bg-primary text-white shadow-lg scale-105",
            !isSelected && "hover:bg-primary/10"
          )}
        >
          <span className={cn(
            "text-base font-semibold",
            isSelected && "text-white"
          )}>
            {format(day, "d")}
          </span>
          
          {hasEvent && (
            <div className="flex gap-0.5 pointer-events-none">
              {dayEvents.slice(0, 3).map((event, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: dayColor }}
                />
              ))}
              {dayEvents.length > 3 && (
                <span className="text-[8px] font-medium text-muted-foreground">
                  +{dayEvents.length - 3}
                </span>
              )}
            </div>
          )}
        </button>

        {/* Events Popover - pass the day color */}
        {hasEvent && (
          <PopoverComp date={day} appointments={dayEvents} color={dayColor} />
        )}
      </div>
    )
  }

  return (
    <Card className="mx-auto w-[700px] shadow-lg">
      <CardContent className="p-6">
        {/* Header */}
        <CalendarHeader 
          currentDate={currentDate} 
          goToNextMonth={goToNextMonth} 
          goToPreviousMonth={goToPreviousMonth} 
          goToToday={goToToday}
        />

        {/* Weekday headers */}
        <WeekdaysHeader />

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => renderDayCell(day, index))}
        </div>
      </CardContent>
    </Card>
  )
}