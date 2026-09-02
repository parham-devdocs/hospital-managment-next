import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TimeSlot } from "../../types";
import { updateTimeSlotsOfDoctorService } from "../services/updateTimeSlot";

export function useUpdateTimeSlots(timeSlotId: string, data: TimeSlot) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: () => updateTimeSlotsOfDoctorService(timeSlotId, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['timeSlots'] });
    },
  });

  return mutation;
}