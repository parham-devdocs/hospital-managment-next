"use server";

import { Doctor } from "@/src/features/admin/doctors/types";
import axiosClient from "@/lib/utils/axiosClient";
import { AxiosError } from "axios";
import { GeneralApiResponse } from "../types";
import { AvailableTimeSlot } from "@/src/features/admin/doctors/profile/tabs/types";
export type GetDoctorByIdResponse = {
  success: boolean;
  status: number;
  data: Doctor;
};

async function getAvailableTimeSlotsForDoctor(id: string) {
  try {
    const response = await axiosClient.get<GeneralApiResponse<AvailableTimeSlot[]>>(
      `/available-time/${id}`
    );
    return {
      data: response.data.data,
      status: response.data.status,
      success: response.data.success,
      error: null,
    };
    
  } catch (error) {
    const axiosError = error as AxiosError;

    // Handle different error scenarios
    if (axiosError.response?.status === 404) {
      return {
        data: null,
        status: 404,
        success: false,
        error: {
          message: "Doctor not found",
          status: 404,
        },
      };
    }

    if (axiosError.response?.status === 500) {
      return {
        data: null,
        status: 500,
        success: false,
        error: {
          message: "Internal server error",
          status: 500,
        },
      };
    }

    return {
      data: null,
      status: axiosError.response?.status || 500,
      success: false,
      error: {
        message: axiosError.message || "Failed to fetch doctor",
        status: axiosError.response?.status || 500,
      },
    };
  }
}

export default getAvailableTimeSlotsForDoctor
