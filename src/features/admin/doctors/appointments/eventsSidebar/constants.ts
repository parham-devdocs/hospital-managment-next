// src/features/events-sidebar/constants/statuses.ts
export const STATUS_CONFIG = {
    in_progress: {
      label: "In Progress",
      bg: "bg-amber-100",
      text: "text-amber-800",
      dot: "bg-amber-500",
    },
    completed: {
      label: "Completed",
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      dot: "bg-emerald-500",
    },
    cancelled: {
      label: "Cancelled",
      bg: "bg-rose-100",
      text: "text-rose-800",
      dot: "bg-rose-500",
    },
    scheduled: {
      label: "Scheduled",
      bg: "bg-blue-100",
      text: "text-blue-800",
      dot: "bg-blue-500",
    },
  } as const;
  
