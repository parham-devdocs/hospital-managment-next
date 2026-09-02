import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTimeSlotsOfDoctorService } from "../services/deleteTimeSlot";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export function useDeleteTimeSlots(timeSlotId: string) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: () => deleteTimeSlotsOfDoctorService(timeSlotId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timeSlots'] });
      toast("time slot deleted successfuly")
    }
  });

  return mutation;
}