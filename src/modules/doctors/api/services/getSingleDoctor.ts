"use server";
import { apiClient } from "@/src/shared/lib/api/api-client";
import { Doctor } from "../../types";
import { ApiResponse } from "@/src/shared/types";

export const getSingleDoctorService = async (doctorId: string) => {
  return await apiClient.get<ApiResponse<Doctor>>(`/doctor/${doctorId}`);
};
