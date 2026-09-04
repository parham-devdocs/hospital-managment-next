import { apiClient } from "@/src/shared/lib/api/api-client";
import { Patient } from "../../types";


export const createPatientService = (patient:Patient) =>{
 return apiClient.post("/patient",patient);
}
