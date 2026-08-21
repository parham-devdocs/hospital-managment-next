import { Dispatch, SetStateAction } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface PageProps{
  params: Promise < {
    slug: string[]
  } > ;
  searchParams: Promise < {
    [key: string]: string | string[] | undefined
  } > ;
}

export interface Pagination{
  currentPage: number, perPage: number, totalItems: number, totalPages: number

}
export interface ApiResponse<T>{

data:T
pagination: Pagination
status:number 

success:boolean
}



export interface SelectionProps {
  control: Control<FormData>; 
  name: any
  selectItems: { value: string; label: string }[];
  placeholder?: string;
}


export interface DoctorSearchParams {
  page?: string;
  limit?:string;
  specialties?:string[];
  fullName?:string;
  isActive?:boolean
 

}



export type UseCalendarReturnType<T> = {
  // State values
  selectedDay: Date | null;       
  currentMonth: Date;          
  events: T[];                   

  setSelectedDay: Dispatch<SetStateAction<Date | null>>;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;

  year: number;
  month: number;
  days: number;

  goToNextMonth: () => void;
  goToPreviousMonth: () => void;
};