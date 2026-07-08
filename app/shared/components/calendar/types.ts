export interface Appointment {
  id: string;
  title: string;
  date: Date;
  time?: string; // Optional time string like "14:30" or "2:30 PM"
  description?: string;
  color?: string;
  status: "in_progress" | "completed" | "cancelled";
  patient?: {
    id: string;
    name: string;
    avatar_url: string;
  };
  doctor?: {
    id: string;
    name: string;
    avatar_url: string;
  };
}

export interface CalendarHeader {
  goToToday: () => void;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  currentDate: Date; // Optional: if you need the current date
}
export interface PopoverProps {
  date: Date;
  appointments: Appointment[];
  color:string
}
