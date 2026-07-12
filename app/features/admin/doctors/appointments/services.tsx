"use server"

import { createClient } from "@/app/utils/supabase/client";
import { Appointment } from "../types";
export async function getAppointmentsOfDoctor(doctorId:number) {
  const supabase = createClient();

  // Get total count first
  const { data, error } = await supabase
  .from("appointment")
  .select("*")
  .eq("doctorId", doctorId)
  .eq("status", "scheduled")




  return { 
    data: data as Appointment[] | null
  };
}