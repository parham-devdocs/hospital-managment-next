import { apiClient } from "@/src/shared/lib/api/doctors/api-client";
import { Doctor } from "../../types";

type GetDoctorQueries = {
  page?: number;
  limit?: number;
  fullName?: string;
  specialties?: string[];
  isActive?: boolean;
};

export const getDoctorService = ({
  page = 1,
  limit = 10,
  fullName,
  specialties,
  isActive,
}: GetDoctorQueries = {}) => {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (fullName) {
    params.append("fullName", fullName);
  }

  if (specialties && specialties.length > 0) {
    specialties.forEach((spec) => {
      params.append("specialties[]", spec);
    });
  }

  if (isActive !== undefined) {
    params.append("isActive", String(isActive));
  }

  // Return the promise directly – no try-catch, no async/await
  return apiClient.get<{ data: Doctor[]; total: number }>(
    `/doctor?${params.toString()}`
  );
};