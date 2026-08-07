

export interface Profile {
    id: string;
    address: string;
    age: number;
    avatar_url?: string;
    createdAt: string; // ISO date string
    email: string;
    fullName: string;
    gender: string;
    phoneNumber: string;
    updated_at: string; // ISO date string
  }
  export interface Specialty{
    id:string
    name:string
    createdAt: Date,
    updatedAt: Date,
    deleteAt: null|Date
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
 // types/doctor.ts

export type DoctorCertification = {
  name: string;
  issuingOrganization: string;
  dateObtained: string | Date;
  expiryDate: string | Date;
  certificationNumber: string[]; // Note: This is an array in your DTO
};

export type DoctorEducation = {
  medicalSchool: string;
  graduationYear: number;
  country: string;
  degree: string;
  honors: string[];
};

export type DoctorWorkExperience = {
  hospital: string;
  startDate: string | Date;
  endDate: string | Date;
  location: string;
  position: string;
  responsibilities: string[];
};

export interface Doctor  extends Profile {
  doctorId: string; 
  isActive: boolean;
  specialties: Specialty[] 
  certificationCount: number;
  educationCount: number;
  bio?:string
  workExperienceCount: number;
  certifications?: DoctorCertification[];
  educations?: DoctorEducation[]; 
  workExperiences?: DoctorWorkExperience[]; 
  updatedAt: string | Date;
};



// For paginated response
export type PaginatedDoctorResponse = {
  success: boolean;
  status: number;
  data: Doctor[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
};
 
  export interface Column {
    key: string;
    label: string;
    className?: string;
}

