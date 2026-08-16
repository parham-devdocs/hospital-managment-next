import { apiClient } from "@/src/shared/lib/api/api-client";
import { Doctor } from "../../types";


export const createDoctorService = (doctor: Doctor) =>{
 return apiClient.post("/doctor", doctor);
}
