


import { apiClient } from "@/src/shared/lib/api/api-client";
import { ApiResponse } from "@/src/shared/types";
import { TimeSlot } from "../../types";

export const getTimeSlotsOfDoctorService = async (doctorId: string) => {
  return await apiClient.get<ApiResponse<TimeSlot[]>>(`/available-time/${doctorId}`);
};
