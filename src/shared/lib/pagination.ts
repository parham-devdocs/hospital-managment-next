// utils/pagination.ts
export const parsePaginationParams = (
    page?: unknown,
    limit?: unknown,
    defaultLimit: number = 10
  ): { safePage: number; safeLimit: number } => {
    const parsedPage = Number(page);
    const parsedLimit = Number(limit);
  
    const safePage = isNaN(parsedPage) || parsedPage < 1 ? 1 : Math.floor(parsedPage);
    const safeLimit = isNaN(parsedLimit) || parsedLimit < 1 ? defaultLimit : Math.floor(parsedLimit);
  
    return {  safePage,  safeLimit };
  };