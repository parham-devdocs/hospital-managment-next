import { Doctor, Profile } from "../../types";
import { STATUS_CONFIG } from "./constants";

export type AppointmentStatus = keyof typeof STATUS_CONFIG;
export interface EventsSidebarProps {
    date: string;
    doctorId: number;  // ← Now receives doctorId as prop
  }

  export type PatientInfo = Partial<Pick<Profile, 'fullName' | 'avatar_url'>>

  export type DoctorInfo=Partial<Pick<Profile, "fullName" | "avatar_url">> & {specialty?:string}