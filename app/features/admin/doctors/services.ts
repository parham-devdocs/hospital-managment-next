"use server"

import { createClient } from "@/app/utils/supabase/client";
import { Doctor } from "./types";
import paginate from "@/app/shared/utils/paginate";
export async function getDoctors(page: number) {
  const supabase = createClient();
  const itemsPerPage = 2;

  // Get total count first
  const { count, error: countError } = await supabase
    .from("doctor")
    .select("*", { count: 'exact', head: true });

  if (countError) {
    return { 
      data: null, 
      error: countError, 
      count: 0,
      totalPages: 0 
    };
  }

  // Calculate pagination
  const totalItems = count || 0;
  const { skip, end, totalPages } = paginate(page, totalItems, itemsPerPage);

  // If no items, return early
  if (totalItems === 0) {
    return { 
      data: [], 
      error: null, 
      count: 0,
      totalPages: 0 
    };
  }

  // Get paginated data
  const { data, error } = await supabase
    .from("doctor")
    .select(`
      *,
      profiles (*),
      specialty("specialty")
    `)
    .range(skip, end - 1); // Supabase range is inclusive, so end - 1

  if (error) {
    return { 
      data: null, 
      error, 
      count: totalItems,
      totalPages 
    };
  }

  return { 
    data: data as Doctor[] | null, 
    error: null, 
    count: totalItems,
    totalPages 
  };
}

export const deleteDoctor = async (id:string) => {
  const supabase = createClient();

    const { data, error } = await supabase
    .from("doctor")
    .delete().eq("id",id)
    if (error) {
      return {error}
    }
    if (data) {
      return {data ,response:"doctor deleted successfully"}
    }
  
}