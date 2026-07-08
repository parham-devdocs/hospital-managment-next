

import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import {type CalendarHeader } from './types'

const CalendarHeader = ({goToToday , currentDate,goToPreviousMonth,goToNextMonth}:CalendarHeader) => {
  return (
    <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-4">
      <h2 className="text-xl font-bold">
        {format(currentDate, "MMMM yyyy")}
      </h2>
      <Button
        variant="outline"
        size="sm"
        onClick={goToToday}
        className="text-xs"
      >
        Today
      </Button>
    </div>
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={goToPreviousMonth}
        className="h-8 w-8"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={goToNextMonth}
        className="h-8 w-8"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  </div>  )
}

export default CalendarHeader