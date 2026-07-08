

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { Clock } from 'lucide-react'
import {colorMap } from './data'
import { Appointment, PopoverProps } from './types'

const PopoverComp = ({date,appointments ,color}:PopoverProps) => {
  return (
    <Popover>
    <PopoverTrigger asChild className=" cursor-pointer">
      <div className="absolute inset-0 w-full h-full cursor-pointer" />
    </PopoverTrigger>
    <PopoverContent className="w-80 p-4 z-50" align="start">
      <div className="space-y-3">
        <h4 className="font-semibold text-base">
          {format(date, "EEEE, MMMM d, yyyy")}
        </h4>
        <p className="text-sm text-muted-foreground -mt-2">
          {appointments.length} appointemt{appointments.length > 1 ? 's' : ''}
        </p>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {appointments.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-3 p-3 rounded-xl border bg-card hover:shadow-md transition-shadow"
              style={{
                borderColor:color|| "#3b82f6",
              }}
            >
              <div
                className="w-1.5 h-12 rounded-full shrink-0"
                style={{ backgroundColor:  color|| "#3b82f6" }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">
                  {event.title}
                </p>
                {event.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                    {event.description}
                  </p>
                )}
                {event.date.getHours() !== 0 && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                    <Clock className="w-3 h-3" />
                    {format(event.date, "h:mm a")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PopoverContent>
  </Popover>  )
}

export default PopoverComp