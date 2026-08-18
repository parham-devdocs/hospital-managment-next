import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDoctorService } from "../services/create-doctor.service";
import { toast } from "sonner";
import { deleteDoctorService } from "../services/delete-doctor.service";

export const useDeleteDoctor = (doctorId:string) => {

  return useMutation({
    mutationFn: ()=>deleteDoctorService(doctorId),
    onSuccess: () => {
      
      console.log("successfully fetched")
      toast.success('Doctor Deletd successfully!');
    },
    onError:()=>{
      console.log("error occured")
    
    }
  });
};