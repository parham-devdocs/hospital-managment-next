import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { PaginationProps } from "./types"
  

  
  const PaginationComp = ({pageCount,activePage,url}:PaginationProps) => {
    return (
<Pagination >
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href={`/admin/doctors?page=${activePage-1}`} />
    </PaginationItem>
  
  {Array.from({length:pageCount}).map((_,index)=>{
     return  <PaginationItem key={index} >
      <PaginationLink href={`/${url}?page=${index+1}`} isActive={index+1===activePage}>{index+1}</PaginationLink>
    </PaginationItem>
  })}
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href={`/${url}?page=${activePage+1}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    )
  }
  
  export default PaginationComp