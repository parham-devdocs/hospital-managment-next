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
  

  
  const PaginationComp = ({pageCount,currentPage,url}:PaginationProps) => {
    return (
<Pagination >
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href={`${url}?page=${currentPage-1}`} />
    </PaginationItem>
  
  {Array.from({length:pageCount}).map((_,index)=>{
     return  <PaginationItem key={index} >
      <PaginationLink href={`/${url}?page=${index+1}`} isActive={index+1===currentPage}>{index+1}</PaginationLink>
    </PaginationItem>
  })}
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href={`/${url}?page=${currentPage+1}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    )
  }
  
  export default PaginationComp