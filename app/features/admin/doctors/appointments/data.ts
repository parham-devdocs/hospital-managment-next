import { Appointment } from "@/app/shared/types";

export const appointments: Appointment[] = [
  {
    id: "1",
    title: "Morning Checkup",
    date: new Date(2026, 6, 2, 9, 0),
    time: "9:00 AM",
    description: "Regular health checkup",
    status: "completed",
    patient: {
      id: "p1",
      name: "John Smith",
      avatar_url: "",
    },
    doctor: {
      id: "d1",
      name: "Dr. Sarah Johnson",
      avatar_url: "",
      specialty:{name:""}
    },
    availableTime:{time:"",date:""}
  }
];

export const statusColorMap: Record<string, string> = {
  in_progress: "#3b82f6", // blue
  completed: "#22c55e", // green
  cancelled: "#ef4444", // red
};

export const colorMap: string[] = [
  "#3b82f6",
  "#22c55e",
  "#ef4444",
  "#f59e0b",
  "#8b5cf6",
  "#eab308",
  "#ec4899",
];

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
