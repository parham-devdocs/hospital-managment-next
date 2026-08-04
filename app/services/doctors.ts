"use server"

import { AxiosError } from "axios"
import axiosClient from "../axiosClient"
import { Doctor } from "../features/admin/doctors/types"

export type GetDoctorsServiceQuery = {
  isActive?: boolean
  page?: number
  limit?: number
  specialties?: string[]
  fullName?: string
}

async function getDoctors({ 
  isActive, 
  page, 
  limit, 
  fullName, 
  specialties 
}: GetDoctorsServiceQuery) {
  // Build query parameters
  const params = new URLSearchParams()
  
  if (isActive !== undefined) {
    params.append('isActive', String(isActive))
  }
  
  if (page !== undefined) {
    params.append('page', String(page))
  }
  
  if (limit !== undefined) {
    params.append('limit', String(limit))
  }
  
  if (fullName) {
    params.append('fullName', fullName)
  }
  
  if (specialties && specialties.length > 0) {
    params.append('specialties', specialties.join(','))
  }
  
  const queryString = params.toString()
  const url = queryString ? `doctor?${queryString}` : 'doctors'
  try {
    const response = await axiosClient.get(url)
  
    return {data:response.data as Doctor[],error:null}

  } catch (error) {
    return {error:error as AxiosError,data:[]}
  }

}

export default getDoctors