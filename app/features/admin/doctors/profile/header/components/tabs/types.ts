import { LucideIcon } from "lucide-react";
import { ReactElement } from "react";

export type ScheduleItem = {
    day: string;
    hours: string;
  };
  
 export type ScheduleProps = {
    availability: ScheduleItem[];
    primaryColor?: string;
  };

  export type Service = {
    id: number;
    name: string;
    description: string;
    duration: string;
    price: string;
  };

 export  type ServicesProps = {
    services: Service[];
    primaryColor?: string;
  };

  export type TabList="about"|"services"|"schedule"

  export type tabHeaderType={
    activeTab:TabList
    onChange:(tab:TabList)=>void
  }

  export type Tab = {
    id: "about" | "services" | "schedule";
    label: string;
    icon: ReactElement
  };