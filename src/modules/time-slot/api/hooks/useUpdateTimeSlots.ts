import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TimeSlot } from "../../types";
import { updateTimeSlotsOfDoctorService } from "../services/updateTimeSlot";
import { toast } from "sonner";

export function useUpdateTimeSlots(timeSlotId: string, startTime:string) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: () => updateTimeSlotsOfDoctorService(timeSlotId,startTime),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['timeSlots'] });
        toast("time slot deleted successfuly")
      }
  });

  return mutation;
}