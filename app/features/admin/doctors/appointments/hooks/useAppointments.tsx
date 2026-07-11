// hooks/useAppointments.ts
import { useState, useEffect, useCallback } from 'react';
import { createClient } from "@/app/utils/supabase/client";
import { Appointment } from '../../types';

type UseAppointmentsOptions = {
  doctorId: number;
  status?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  autoFetch?: boolean;
};

export const useAppointments = ({
  doctorId,
  status = 'in_progress',
  date,
  startDate,
  endDate,
  autoFetch = true,
}: UseAppointmentsOptions) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true); // ⭐ ALWAYS start as true
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const [hasFetched, setHasFetched] = useState(false); // ⭐ Track if fetch has run

  const supabase = createClient();

  const fetchAppointments = useCallback(async () => {
    // Handle missing doctorId
    if (!doctorId) {
      console.warn('⚠️ No doctorId provided');
      setAppointments([]);
      setCount(0);
      setLoading(false);
      setHasFetched(true);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('🔵 Fetching appointments for:', { doctorId, status, date, startDate, endDate });

      let query = supabase
        .from("appointment")
        .select(`
          *,
          available_time (*),
          doctor:doctor_id (
            profile:profile_id (
              fullName
            ),
            specialty:specialty_id (
              name
            )
          ),
          patient:patient_id (
            profile:profile_id (
              fullName
            )
          )
        `, { count: 'exact' })
        .eq("doctor_id", doctorId);

      if (status) {
        query = query.eq("status", status);
      }

      if (date) {
        console.log('📅 Filtering by date:', date);
        query = query.eq("available_time.date", date);
      }

      if (startDate && endDate) {
        console.log('📅 Filtering by date range:', startDate, 'to', endDate);
        query = query
          .gte("available_time.date", startDate)
          .lte("available_time.date", endDate);
      }

      query = query
        .order('date', { ascending: true, foreignTable: 'available_time' })
        .order('time', { ascending: true, foreignTable: 'available_time' });

      const { data, error, count: totalCount } = await query;
if (date && data && data[0].available_time===null) {
  return null
}
      if (error) {
        throw new Error(error.message);
      }

      console.log('📊 Found appointments:', data?.length || 0);
      
      setAppointments(data as Appointment[] || []);
      setCount(totalCount || 0);
      setHasFetched(true);
      
    } catch (err: any) {
      console.error('❌ Error fetching appointments:', err);
      setError(err.message || 'Failed to fetch appointments');
      setAppointments([]);
      setCount(0);
      setHasFetched(true);
    } finally {
      setLoading(false);
      console.log('🔄 Loading set to false');
    }
  }, [doctorId, status, date, startDate, endDate]);

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
    hasFetched, // ⭐ Export this
    refetch: fetchAppointments,
  };
};