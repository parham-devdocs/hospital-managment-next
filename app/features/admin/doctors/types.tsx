

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
    specialty:string
  }
  
  export interface Doctor {
    id: number;
    profile_id: string;
    specialty_id: string
    years_experience: number;
    created_at: string; // ISO date string
    profiles: Profile;
    specialty:Specialty
  }