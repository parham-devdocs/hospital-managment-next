import { ReactNode } from "react";


export interface Avatar{
    avatar_url?:string | null
    fullName:string
}


  export interface QuickStat{
    label: string, value: string, icon: ReactNode
  }
  