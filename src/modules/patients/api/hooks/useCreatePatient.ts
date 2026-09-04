import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPatientService } from "../services/create-patient.service";

export const useCreatePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPatientService,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['patient'] });
      toast.success('Patient created successfully!');
    }
  });
};