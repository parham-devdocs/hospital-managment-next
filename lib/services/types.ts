export type GeneralApiResponse<T> = {
    success: boolean;
    status: number;
    data: T
  }