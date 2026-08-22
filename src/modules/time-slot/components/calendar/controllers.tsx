

import { Button } from '@/components/ui/button';
import { addMonths, format } from 'date-fns';
import React from 'react'
interface ControllersProps {
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
    setSelectedDay: React.Dispatch<React.SetStateAction<Date | null>>;
    currentMonth: Date;
  }
const Controllers = ({setCurrentMonth,setSelectedDay,currentMonth}:ControllersProps) => {
    
    const goToNextMonth = () => {
        setCurrentMonth((prev) => addMonths(prev, 1));
        setSelectedDay(null); // clear selection
      };
    
      const goToPrevMonth = () => {
        setCurrentMonth((prev) => addMonths(prev, -1));
        setSelectedDay(null); // clear selection
      };
  return (
<div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-bold">
    {format(currentMonth, "MMMM yyyy")}
  </h2>
  <div className="flex gap-2">
  <Button
  onClick={goToPrevMonth}
  className="
    px-4 py-2 rounded-lg 
    border border-gray-300 
    hover:text-primary
  
    hover:bg-gray-50 hover:border-gray-400 
    transition-colors duration-200
    flex items-center gap-1
    cursor-pointer
  "
>
  ← Previous
</Button>
<Button
  onClick={goToNextMonth}
  className="
    px-4 py-2 rounded-lg 
    border border-gray-300 
    hover:bg-gray-50 hover:border-gray-400 
        hover:text-primary
 cursor-pointer
    transition-colors duration-200
    flex items-center gap-1
  "
>
  Next →
</Button>
  </div>
</div>  )
}

export default Controllers