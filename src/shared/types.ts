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
export interface PaginatedApiResponse<T>{

data:T[]
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