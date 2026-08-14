import { UseFormReturn } from "react-hook-form";
import { FormData } from "./validations";

export interface EducationItem {
    medicalSchool:string
    graduationYear: string;
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
    phoneNumber:string
    age:number
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