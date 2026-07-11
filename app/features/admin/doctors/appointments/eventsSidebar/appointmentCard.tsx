import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Calendar, Pencil, XCircle, User } from "lucide-react";
import { Appointment } from "../../types";
import AppointmentCardStatus from "./appointmentCardStatus";
import DoctorInfo from "./doctorInfo";
import PatientInfo from "./patientInfo";

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
  available_time,
  doctor,
  onEdit,
  onCancel,
}: AppointmentCardProps) => {
  


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
      <DoctorInfo fullName={doctor?.profile.fullName} specialty={doctor?.specialty.name} avatar_url={doctor?.profile.avatar_url}/>

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        {/* Patient Info */}
 <PatientInfo fullName={patient?.profile.fullName} avatar_url={patient?.profile.avatar_url}/>

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