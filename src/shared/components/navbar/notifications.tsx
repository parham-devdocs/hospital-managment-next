import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Badge, Bell } from 'lucide-react'
import React, { useMemo, useState } from 'react'
import { cn } from '../../lib/cn'
import Link from 'next/link'

type NotificationType = { 
  type: "critical" | "warning" | "success" | "info", 
  title: string, 
  timestamp: Date, 
  message: string, 
  id: string 
}

const NotificationsComp = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: '1',
      type: "success",
      title: 'System Error',
      message: 'Database connection failed',
      timestamp: new Date()
    }
  ])
  const [unreadCount,setUnreadCount]=useState(1)
  const [notificationCount, setNotificationCount] = useState<number>(0)



  // Function to handle clicking on a specific notification
  function onNotificationClick(notification: NotificationType) {

 
    
    // Decrement unread count

  }



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -right-0.5 -top-0.5 m-5 h-5 rounded-full px-1.5 flex items-center justify-center text-[10px] font-bold bg-red-500 text-white hover:bg-red-600">
              
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <Link
            className="h-auto p-0 text-xs text-primary"
            href={"/notifications"}
          >
            View all
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No new notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start gap-1 p-3 cursor-pointer"
                onClick={() => onNotificationClick(notification)}
              >
                <div className="flex items-center gap-2 w-full">
                  <div className={cn(
                    "h-2 w-2 rounded-full ",
                    notification.type === "critical" && "bg-red-500",
                    notification.type === "warning" && "bg-yellow-500",
                    notification.type === "success" && "bg-green-500",
                    notification.type === "info" && "bg-blue-500"
                  )} />
                  <span className="text-sm font-medium flex-1 truncate">
                    {notification.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                    {notification.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground pl-4 line-clamp-2">
                  {notification.message}
                </p>
              </DropdownMenuItem>
            ))
          )}
        </div>
        {notifications.length > 5 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-center text-primary text-sm"
              onClick={()=>{console.log("")}}
            >
              View all {notifications.length} notifications
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationsComp