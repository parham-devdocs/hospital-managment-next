import { STATUS_CONFIG } from "./constants";

export type AppointmentStatus = keyof typeof STATUS_CONFIG;
export interface EventsSidebarProps {
    date: string;
    doctorId: number;  // ← Now receives doctorId as prop
  }