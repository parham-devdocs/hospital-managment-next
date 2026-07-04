import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import React from 'react'

export interface EventItem {
  date: Date
  note: string
}

export interface EventProps {
  open?: boolean  // Made optional with default
  events: EventItem[]
  className?: string
  emptyMessage?: string
}

const Event = ({ 
  open = true,  // Default to true
  events, 
  className,
  emptyMessage = "No events today" 
}: EventProps) => {
  // Format date helper
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Check if there are events
  const hasEvents = events && events.length > 0

  return (
    <SidebarGroup className={cn(
      "transition-all duration-200",
      !open && "hidden",
      className
    )}>
      <SidebarGroupLabel className="flex items-center justify-between">
        <span>Today's Events</span>
        {hasEvents && (
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {events.length}
          </span>
        )}
      </SidebarGroupLabel>
      
      <SidebarMenu>
        {hasEvents ? (
          events.map((event, index) => (
            <SidebarMenuItem key={index}>
              <div className="group relative rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent">
                <div className="flex items-start gap-2">
                  {/* Date indicator dot */}
                  <div className="mt-0.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">
                      {formatDate(event.date)}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                      {event.note}
                    </div>
                  </div>
                </div>
              </div>
            </SidebarMenuItem>
          ))
        ) : (
          <SidebarMenuItem>
            <div className="px-3 py-4 text-center text-sm text-muted-foreground">
              <span className="block text-2xl mb-1">📅</span>
              {emptyMessage}
            </div>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default Event