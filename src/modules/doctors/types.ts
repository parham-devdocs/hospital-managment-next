import { UseFormReturn } from "react-hook-form";
import { FormData } from "./validations";

export interface EducationItem {
    medicalSchool:string
    graduationYear: number;
    country: string;
    degree: string;
    honors: string[];
  }
  export interface WorkExperienceItem{
    hospital: string,
    startDate: Date,
    endDate: Date,
    location: string,
    position: string,
    responsibilities: string[]
  }


  export interface CertificationItem{
    name: string,
    issuingOrganization: string,
    dateObtained: Date,
    expiryDate: Date,
    certificationNumber:string
  }
  export interface GeneralInfo{
    fullName:string
    email:string
    password:string
    address:string
    age:number
    phoneNumber:string
    avatarUrl?:string
    isActive?:boolean
    gender:"male"|"female"
  }

  export interface Doctor{
workExperiences:WorkExperienceItem[]
certifications:CertificationItem[]
educations:EducationItem[]
user:GeneralInfo

  }

  export interface FormTypeProps {
    form: UseFormReturn<FormData>; // 👈 use the same type as parent
  }


// mockDoctors.ts
export interface DoctorResponse {
  doctorId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: 'male' | 'female' | 'other';
  avatarUrl: string | null;
  isActive: boolean;
  specialties: string[];
  certificationCount: number;
  educationCount: number;
  workExperienceCount: number;
}


export type GetDoctorQueriesType = {
  page?: number;
  limit?: number;
  fullName?: string;
  specialty?: string;
  isActive?: boolean;
};
export interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

