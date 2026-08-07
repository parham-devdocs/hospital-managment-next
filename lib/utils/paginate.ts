


const paginate = (  page: number, 
    totalItems: number, 
    itemsPerPage: number 
) => {
    const currentPage = Math.max(1, page);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const skip = (currentPage - 1) * itemsPerPage;
    const end = skip + itemsPerPage 
    return {skip,end,totalPages}
}  

export default paginate