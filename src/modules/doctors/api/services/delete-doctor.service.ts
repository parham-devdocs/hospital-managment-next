import { apiClient } from "@/src/shared/lib/api/api-client";
import { Doctor } from "../../types";


export const deleteDoctorService = (doctorId: string) =>{
    console.log("request reached the service")
 return apiClient.delete(`/doctor/${doctorId}`,);
}
