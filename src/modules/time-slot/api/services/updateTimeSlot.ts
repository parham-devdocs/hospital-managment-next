import { apiClient } from "@/src/shared/lib/api/api-client";
import { TimeSlot } from "../../types";

export const updateTimeSlotsOfDoctorService = async (timeslotId: string,startTime:string) => {
  return await apiClient.patch(`/available-time/${timeslotId}`,startTime);
};
