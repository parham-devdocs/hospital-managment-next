// utils/supabase/queries.ts
import { createClient } from "@/app/utils/supabase/client";
import {Appointment  } from "../../types";
export async function getAppointmentsForDoctorAndDate(
  doctorId: number,
  date?: string,
  status: string = "in_progress"
) {
  const supabase = createClient(); // for server, use createServerClient

  let query = supabase
    .from("appointment")
    .select(
      `
      *,
      available_time(*),    
      doctor:doctor_id (
        profile:profile_id ( fullName ),
        specialty:specialty_id ( name )
      ),
      patient:patient_id (
        profile:profile_id ( fullName )
      )
    `,
      { count: "exact" }
    )
    .eq("doctor_id", doctorId)
    .eq("status", status);

  // ✅ This filter works with the outer join:
  //   it returns only appointments that have an available_time
  //   entry matching the given date.
  if (date) {
    query = query.eq("available_time.date", date);
  }

  query = query
    .order("date", { ascending: true, foreignTable: "available_time" })
    .order("time", { ascending: true, foreignTable: "available_time" });

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return {
    appointments:query , // ✅ cast and default
    count: count || 0,
  };
}