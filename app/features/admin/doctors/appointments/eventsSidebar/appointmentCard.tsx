import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Stethoscope, Calendar, Pencil, XCircle, User } from "lucide-react";
import { Appointment } from "../../types";
import AppointmentCardStatus from "./appointmentCardStatus";

type AppointmentCardProps = Appointment & {
  color?: string; // optional, will be used for status color coding
  onEdit?: (id: number) => void;
  onCancel?: (id: number) => void;
};

const AppointmentCard = ({
  id,
  title,
  status,
  patient,
  doctor,
  available_time,
  onEdit,
  onCancel,
}: AppointmentCardProps) => {
  // Status color mapping
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

  const statusInfo = statusConfig[status as keyof typeof statusConfig] || statusConfig.scheduled;

  const formattedDate = available_time?.date
    ? new Date(available_time.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "";

  const formattedTime = available_time?.time || "";

  return (
    <div className="group w-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/80 transition-all duration-200 hover:-translate-y-1">
      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Header: Title + Status */}
        <div className="flex justify-between items-start gap-3">
          <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">
            {title || "Appointment"}
          </h4>
       <AppointmentCardStatus status={status}/>
        </div>

        {/* Doctor Info */}
        <div className="flex items-center gap-3.5 p-2.5 bg-gray-50/70 rounded-xl">
          <div className="w-11 h-11 rounded-full bg-blue-100/70 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-blue-100/50">
            <Avatar className="w-full h-full">
              <AvatarImage src={doctor?.profile?.avatar_url} alt="Doctor" />
              <AvatarFallback className="bg-blue-100 text-blue-700 text-sm font-medium">
                {doctor?.profile?.fullName?.charAt(0) || "D"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">
              Dr. {doctor?.profile?.fullName || "Unknown"}
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1.5">
              <Stethoscope className="w-3 h-3" />
              <span>{doctor?.specialty?.name || "General"}</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        {/* Patient Info */}
        <div className="flex items-center gap-3.5 p-2.5 bg-gray-50/70 rounded-xl">
          <div className="w-11 h-11 rounded-full bg-green-100/70 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-green-100/50">
            <Avatar className="w-full h-full">
              <AvatarImage src={patient?.profile?.avatar_url} alt="Patient" />
              <AvatarFallback className="bg-green-100 text-green-700 text-sm font-medium">
                {patient?.profile?.fullName?.charAt(0) || "P"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {patient?.profile?.fullName || "Unknown Patient"}
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1.5">
              <User className="w-3 h-3" />
              <span>Patient</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        {/* Date & Time */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gray-100/80 rounded-lg">
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
            </div>
            <span className="font-medium">{formattedDate || "No date"}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gray-100/80 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
            </div>
            <span className="font-medium">{formattedTime || "No time"}</span>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
        <button
          onClick={() => onEdit?.(id)}
          className="flex-1 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm shadow-blue-200/50"
        >
          <Pencil className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={() => onCancel?.(id)}
          className="flex-1 px-4 py-2.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200/80 rounded-xl hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
        >
          <XCircle className="w-4 h-4" />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;