"use client"
import { Clock } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ClockComp = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      };
    // Real-time clock for admin awareness
    useEffect(() => {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
  return (
<div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground font-mono"
      suppressHydrationWarning 

>
              <Clock className="h-3 w-3" />
              {formatTime(currentTime)}
            </div>  )
}

export default ClockComp