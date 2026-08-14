import { apiClient } from "@/src/shared/lib/api/doctors/api-client";
import { Doctor } from "../../types";

export const createDoctorService = (doctor: Doctor) =>  apiClient.post('/doctor', doctor); 
