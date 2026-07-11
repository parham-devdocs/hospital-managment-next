// types.ts
import { Appointment } from "@/app/shared/types";

export interface DayCellProps {
  day: Date | null; // ✅ Allow null
  events: Appointment[];
  isSelected: boolean;
  isToday: boolean;
  isWeekend: boolean;
  dayColor: string;
  onSelect: (date: Date) => void;
}

export interface PopoverProps {
  date: Date;
  appointments: Appointment[];
  color: string;
}
export interface CalendarNavigationProps {
  /** Current displayed date */
  currentDate: Date;
  /** Navigate to previous month */
  goToPreviousMonth: () => void;
  /** Navigate to next month */
  goToNextMonth: () => void;
  /** Navigate to today */
  goToToday: () => void;
}