// hooks/useAppointments.ts
import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Appointment } from "../../../types";

type UseAppointmentsOptions = {
  doctorId: number;
  status?: string;
  date?: string;
  autoFetch?: boolean;
};

export const useAppointments = ({
  doctorId,
  status = "in_progress",
  date,
  autoFetch = true,
}: UseAppointmentsOptions) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const supabase = createClient();

  const fetchAppointments = useCallback(async () => {
    if (!doctorId) {
      setAppointments([]); // ✅ Clear appointments
      setCount(0);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("🔵 Fetching appointments for:", { doctorId, status, date });

      let query = supabase
        .from("appointment")
        .select(
          `
          *,
          available_time (*),
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
        .eq("doctor_id", doctorId);

      if (status) {
        query = query.eq("status", status);
      }

      if (date) {
        console.log("📅 Filtering by date:", date);
        query = query.eq("available_time.date", date);
      }

      query = query
        .order("date", { ascending: true, foreignTable: "available_time" })
        .order("time", { ascending: true, foreignTable: "available_time" });

      const { data, error, count: totalCount } = await query;

      if (error) {
        throw new Error(error.message);
      }

      console.log("📊 Found appointments:", data?.length || 0);

      // ✅ Always set appointments - even if empty array
      setAppointments((data as Appointment[]) || []);
      setCount(totalCount || 0);
    } catch (err: any) {
      console.error("❌ Error fetching appointments:", err);
      setError(err.message || "Failed to fetch appointments");
      setAppointments([]); // ✅ Clear on error
      setCount(0);
    } finally {
      setLoading(false);
      console.log("🔄 Loading set to false");
    }
  }, [doctorId, status, date]);

  useEffect(() => {
    if (autoFetch) {
      fetchAppointments();
    }
  }, [fetchAppointments, autoFetch]);

  return {
    appointments,
    count,
    loading,
    error,
    refetch: fetchAppointments,
  };
};
