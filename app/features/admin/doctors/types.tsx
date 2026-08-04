

export interface Profile {
    id: string;
    address: string;
    age: number;
    avatar_url: string;
    created_at: string; // ISO date string
    email: string;
    fullName: string;
    gender: string;
    phone: string;
    updated_at: string; // ISO date string
  }
  export interface Specialty{
    id:string
    name:string
  }
  export interface Appointment {
    id: string;
    title: string;
  
    description?: string;
    status: "in_progress" | "completed" | "cancelled";
    patient?: Patient
    doctor?: Doctor
    available_time:AvailableTime
  }

  export interface Patient{
    profile:Profile
    profile_id: string;
    medical_condition_summary:string
    illness:string
    created_at: string; 

  }

  export interface AvailableTime{
    time:string
    date:string
  
  }
 
  export type Doctor = {
    id: string
    fullName: string
    email: string
    phoneNumber: string
    gender: string 
    avatarUrl: string | null
    isActive: boolean
    specialties: string[]
    certificationCount: number
    educationCount: number
    workExperienceCount: number
    createdAt: string | Date
    updatedAt: string | Date
  }
  export interface Column {
    key: string;
    label: string;
    className?: string;
}

export interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}