// hooks/useAppointments.ts
import { useState, useEffect, useCallback } from 'react'
import { createClient } from "@/app/utils/supabase/client"
import { Appointment } from "@/app/shared/types"

type UseAppointmentsOptions = {
  doctorId: number
  status?: string
  date?: string // Changed to string (YYYY-MM-DD format)
  startDate?: string // Changed to string (YYYY-MM-DD format)
  endDate?: string 
  autoFetch?: boolean
}

export const useAppointments = ({ 
  doctorId, 
  status = 'in_progress',
  date,
  startDate,
  endDate,
  autoFetch = true 
}: UseAppointmentsOptions) => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [count, setCount] = useState(0)

  const supabase = createClient()

  const fetchAppointments = useCallback(async () => {
    if (!doctorId) return

    setLoading(true)
    setError(null)

    try {
      // Build the query with relationship
      let query = supabase
        .from("appointment")
        .select(`
          *,
          available_time (*)
        `, { count: 'exact' })
        .eq("doctor_id", doctorId)

      if (status) {
        query = query.eq("status", status)
      }

      // Filter by available_time.date
      if (date) {
        query = query.eq("available_time.date", date)
      }

      if (startDate && endDate) {
        query = query.gte("available_time.date", startDate).lte("available_time.date", endDate)
      }

      // Order by available_time.date and time
      query = query
        .order('date', { ascending: true, foreignTable: 'available_time' })
        .order('time', { ascending: true, foreignTable: 'available_time' })

      const { data, error, count: totalCount } = await query
console.log({data})
      if (error) throw error

      setAppointments(data as Appointment[] || [])
      setCount(totalCount || 0)
    } catch (err: any) {
      setError(err.message)
      console.error("Error fetching appointments:", err)
    } finally {
      setLoading(false)
    }
  }, [doctorId, status, date, startDate, endDate])

  // Auto-fetch on mount or when dependencies change
  useEffect(() => {
    if (autoFetch) {
      fetchAppointments()
    }
  }, [fetchAppointments, autoFetch])

  // Real-time subscription
  useEffect(() => {
    if (!doctorId) return

    const channel = supabase
      .channel('appointment-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'appointment',
          filter: `doctor_id=eq.${doctorId}`
        },
        () => {
          fetchAppointments()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [doctorId, fetchAppointments])

  return {
    appointments,
    count,
    loading,
    error,
    refetch: fetchAppointments
  }
}