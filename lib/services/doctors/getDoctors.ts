"use server";

import { Doctor } from "@/src/features/admin/doctors/types";
import { PaginatedApiResponse } from "@/src/shared/types";
import axiosClient from "@/lib/utils/axiosClient";
import { AxiosError } from "axios";

export type GetDoctorsServiceQuery = {
  isActive?: boolean;
  page?: number;
  limit?: number;
  specialties?: string[];
  fullName?: string;
};

async function getDoctors({
  isActive,
  page,
  limit,
  fullName,
  specialties,
}: GetDoctorsServiceQuery) {
  // Build query parameters
  const params = new URLSearchParams();

  if (isActive !== undefined) {
    params.append("isActive", String(isActive));
  }

  if (page !== undefined) {
    params.append("page", String(page));
  }

  if (limit !== undefined) {
    params.append("limit", String(limit));
  }

  if (fullName) {
    params.append("fullName", fullName);
  }

  if (specialties && specialties.length > 0) {
    params.append("specialties", specialties.join(","));
  }

  const queryString = params.toString();
  const url = queryString ? `doctor?${queryString}` : "doctors";
  try {
    const response = await axiosClient.get<PaginatedApiResponse<Doctor>>(url);

    return {
      data: response.data.data,
      pagination: response.data.pagination,
      status: response.data.status,
      success: response.data.success,
      error: null,
    };
  } catch (error) {
    return { error: error as AxiosError, data: [] };
  }
}

export default getDoctors;
