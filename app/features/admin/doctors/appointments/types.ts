import { Appointment } from "../../../../shared/types";

export interface CalendarHeader {
  goToToday: () => void;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  currentDate: Date; // Optional: if you need the current date
}
export interface PopoverProps {
  date: Date;
  appointments: Appointment[];
  color: string;
}
