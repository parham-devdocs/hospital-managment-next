import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDoctorService } from "../services/create-doctor.service";
import { toast } from "sonner";

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDoctorService,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['doctors'] });
      toast.success('Doctor created successfully!');
    }
  });
};