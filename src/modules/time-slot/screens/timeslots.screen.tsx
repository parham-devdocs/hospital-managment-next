"use client"
import { TimeSlotsCalendar } from "../components/calendar";
import TimeSlotList from "../components/timeSlotsList";
import Header from "@/src/shared/components/header";
import { Calendar } from "lucide-react";



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
            <TimeSlotList  />
          </div>
        </div>
      </div>
    );
  
  }
  

export default TimeslotsScreen;
