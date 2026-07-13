import { ReactNode } from "react";
import { Specialty } from "../../types";


export interface Avatar{
    avatar_url?:string | null
    fullName:string
}

export interface BasicInfoProps {

      fullName: string;
      specialty: Specialty;
      rating: number;
      totalPatients: number;
      experience: number;
      address:string
      phone:string
    
  }

  export interface QuickStat{
    label: string, value: string, icon: ReactNode
  }
  