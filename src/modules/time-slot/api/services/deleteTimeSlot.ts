import { apiClient } from "@/src/shared/lib/api/api-client";
import { ApiResponse } from "@/src/shared/types";
import { TimeSlot } from "../../types";

export const deleteTimeSlotsOfDoctorService = async (timeslotId: string) => {
  return await apiClient.delete<ApiResponse<TimeSlot[]>>(`/available-time/${timeslotId}`);
};
