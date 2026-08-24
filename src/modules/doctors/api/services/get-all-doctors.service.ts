"use server";
import { apiClient } from "@/src/shared/lib/api/api-client";
import { Doctor, DoctorResponse, GetDoctorQueriesType } from "../../types";
import { ApiResponse } from "@/src/shared/types";

export const getDoctorsService = async ({
  page = 1,
  limit = 10,
  fullName,
  isActive,
  specialty
}: GetDoctorQueriesType = {}) => {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (fullName) {
    params.append("fullName", fullName);
  }

  if (specialty) {
    params.append("specialty", specialty);

  }

  if (isActive !== undefined) {
    params.append("isActive", String(isActive));
  }

  // Return the promise directly (async function allows this)
  return await apiClient.get<ApiResponse<DoctorResponse[]>>(
    `/doctor?${params.toString()}`
  );
};
