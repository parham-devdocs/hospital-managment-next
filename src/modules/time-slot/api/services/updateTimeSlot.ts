import { apiClient } from "@/src/shared/lib/api/api-client";
import { TimeSlot } from "../../types";

export const updateTimeSlotsOfDoctorService = async (timeslotId: string,data:TimeSlot) => {
  return await apiClient.put(`/available-time/${timeslotId}`,data);
};
