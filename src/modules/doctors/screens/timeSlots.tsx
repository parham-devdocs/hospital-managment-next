"use client";

import * as React from "react";
import { format, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

// --- 1. Mock events (replace with real data) ---
const MOCK_EVENTS = [
  { date: new Date(2026, 7, 19), title: "Checkup", type: "appointment" },
  { date: new Date(2026, 7, 20), title: "Surgery", type: "surgery" },
  { date: new Date(2026, 7, 20), title: "Consultation", type: "consultation" },
  { date: new Date(2026, 7, 22), title: "Follow-up", type: "appointment" },
  { date: new Date(2026, 7, 25), title: "MRI Scan", type: "procedure" },
];

// --- 2. Helper to filter events for a given day ---
const getEventsForDay = (day: Date) => {
  return MOCK_EVENTS.filter((event) => isSameDay(event.date, day));
};

export function TimeSlotsScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      {/* The Calendar */}
      <div className="w-full max-w-4xl bg-white rounded-lg border shadow-lg p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full h-auto"
          classNames={{
            day: "h-20 w-full rounded-md text-base font-normal aria-selected:bg-primary aria-selected:text-white hover:bg-gray-50 transition-colors",
          }}
          components={{
            Day: ({ day: dayDate, ...props }) => {
              // dayDate is the Date object for this cell
              
              const events = getEventsForDay(dayDate.date);
              const isSelected = date && isSameDay(dayDate.date, date);

              return (
                <div
                  className={`flex flex-col items-center justify-start h-24 w-full cursor-pointer rounded-md transition-colors
                    ${isSelected ? "bg-primary text-white" : "hover:bg-gray-50"}
                  `}
                  onClick={() => setDate(dayDate.date)}
                >
                  {/* Day number */}
                  <span className="text-sm font-semibold">{format(dayDate.date, "d")}</span>

                  {/* Event indicators - dots */}
                  {events.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-0.5 mt-1 w-full px-0.5">
                      {events.slice(0, 3).map((event, idx) => (
                        <div
                          key={idx}
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor:
                              event.type === "surgery"
                                ? "#EF4444"
                                : event.type === "consultation"
                                ? "#3B82F6"
                                : "#10B981",
                          }}
                          title={event.title}
                        />
                      ))}
                      {events.length > 3 && (
                        <span className="text-[10px] font-bold text-gray-400 ml-0.5">
                          +{events.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Show title if only one event fits */}
                  {events.length === 1 && (
                    <span className="text-[10px] leading-tight text-gray-600 truncate w-full mt-0.5 px-0.5">
                      {events[0].title}
                    </span>
                  )}
                </div>
              );
            },
          }}
        />
      </div>

  
    </div>
  );
}