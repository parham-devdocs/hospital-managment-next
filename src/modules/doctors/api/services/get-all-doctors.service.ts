"use server";
import { apiClient } from "@/src/shared/lib/api/api-client";
import { DoctorResponse, GetDoctorQueriesType } from "../../types";

export const getDoctorsService = async ({
  page = 1,
  limit = 10,
  fullName,
  specialties,
  isActive,
}: GetDoctorQueriesType = {}) => {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (fullName) {
    params.append("fullName", fullName);
  }

  if (specialties && specialties.length > 0) {
    specialties.forEach((spec: string) => {
      params.append("specialties[]", spec);
    });
  }

  if (isActive !== undefined) {
    params.append("isActive", String(isActive));
  }

  // Return the promise directly (async function allows this)
  return await apiClient.get<{ data: DoctorResponse[]; total: number }>(
    `/doctor?${params.toString()}`
  );
};
