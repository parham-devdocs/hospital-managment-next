import { PopoverContent } from '@/components/ui/popover';
import { format, isToday } from 'date-fns';
import React from 'react';

interface PopoverContentProps {
  eventCount: number;
  color: string;
  title: string;
  date: Date;
}

const PopoverContentForNumberOfEvenst = ({ 
  eventCount, color, title, date 
}: PopoverContentProps) => {
  // Format the date – show "Today" if it's today
  const dateDisplay = isToday(date) ? 'Today' : format(date, 'MMM do, yyyy');
  // You can also get the day name: format(date, 'EEEE')

  return (
    <PopoverContent className={`w-full ${color} rounded-xl shadow-lg border border-gray-100/50`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-${color}`}>
          <span className="text-2xl">📅</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-sm">
            {title} on this day
          </h3>
          {/* Display the formatted date */}
          <p className="text-xs text-gray-500 mt-0.5">{dateDisplay}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-lg font-bold text-gray-900">{eventCount}</span>
            <span className="text-sm text-gray-600">
              {eventCount === 1 ? title : `${title}'s`}
            </span>
          </div>
        </div>
      </div>
    </PopoverContent>
  );
};

export default PopoverContentForNumberOfEvenst;