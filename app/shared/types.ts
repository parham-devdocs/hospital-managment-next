
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