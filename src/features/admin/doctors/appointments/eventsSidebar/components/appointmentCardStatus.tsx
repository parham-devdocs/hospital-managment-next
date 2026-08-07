
  const statusConfig = {
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
  };
type AppointmentStatusType="cancelled"|"completed"|"in_progress"



const AppointmentCardStatus = ({status}:{status:AppointmentStatusType}) => {
    const statusInfo = statusConfig[status as keyof typeof statusConfig] || statusConfig.scheduled;

  return (
<span
                className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${statusInfo.bg} ${statusInfo.text} capitalize whitespace-nowrap`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.dot}`} />
                {statusInfo.label}
              </span>  )

}

export default AppointmentCardStatus