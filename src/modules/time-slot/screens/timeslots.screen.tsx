"use client"
import { useParams } from "next/navigation";
import { TimeSlotsCalendar } from "../components/calendar";
import TimeSlotList from "../components/timeSlotsList";
import { TimeSlot } from "../types";
import Header from "@/src/shared/components/header";
import { Calendar } from "lucide-react";
import { useTimeSlots } from "../api/hooks/getTimeSlots";



const TimeslotsScreen = () => {

  // 👇 Still fetching but we won't use the data

    return (
      <div className="space-y-6">
        <Header title="Doctor Available Times" icon={<Calendar />} />
        <div className="flex gap-12 lg:flex-row flex-col">
          <div className="flex-[2]">
            <TimeSlotsCalendar />
          </div>
          <div className="flex-[1]">
            <TimeSlotList  selectedDate={new Date()} />
          </div>
        </div>
      </div>
    );
  
  }
  

export default TimeslotsScreen;
