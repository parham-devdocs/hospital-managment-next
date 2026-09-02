import { useQuery } from "@tanstack/react-query";
import { getTimeSlotsOfDoctorService } from "../services/getTimeSlots";

export function useTimeSlots(doctorId: string | undefined) {
  const query = useQuery({
    queryKey: ["timeSlots", doctorId],
    queryFn: () => {
      if (!doctorId) {
        throw new Error("doctorId is required");
      }
      return getTimeSlotsOfDoctorService(doctorId);
    },
    enabled: !!doctorId,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

 
  return {
    data: query.data?.data?.data ,
    isLoading: query.isLoading,
    status: query.status,
    error: query.error,
    refetch: query.refetch
  };
}