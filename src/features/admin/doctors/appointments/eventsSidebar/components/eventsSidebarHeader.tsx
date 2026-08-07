import { CalendarDays } from 'lucide-react';
import React from 'react';

type EventsSidebarHeaderProps = {
  date: string;
  count: number;
};

const EventsSidebarHeader = ({ date, count }: EventsSidebarHeaderProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short', // "Mon"
    month: 'short',   // "Jan"
    day: 'numeric',   // "13"
    year: 'numeric',  // "2026"
  });

  return (
    <div className="flex items-center justify-between px-1 py-3 mb-3 bg-gradient-to-r from-blue-50/50 to-white rounded-xl border border-blue-100/50 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 bg-blue-100/70 rounded-lg">
          <CalendarDays className="w-4 h-4 text-blue-600" strokeWidth={2} />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 tracking-tight">
          {formattedDate}
        </h3>
      </div>
      <span className="flex items-center justify-center min-w-[2rem] h-6 px-2.5 text-xs font-medium text-white bg-blue-600 rounded-full shadow-sm shadow-blue-200/50">
        {count}
      </span>
    </div>
  );
};

export default EventsSidebarHeader;