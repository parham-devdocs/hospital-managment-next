import { Dispatch, SetStateAction } from "react";

export type TimeSlotStatus= "Available"|"Reserved"
  
  
  export interface TimeSlot{
    id: string,
              startingTime: Date,
              endingTime: Date,
              doctorId: string,
              appointmentId: null|string,
              status: TimeSlotStatus,
              createdAt: Date,
              updatedAt: Date,
    
  }


