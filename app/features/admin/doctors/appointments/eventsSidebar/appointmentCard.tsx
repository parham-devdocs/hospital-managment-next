import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Stethoscope, Calendar, Pencil, XCircle } from 'lucide-react'
import { format } from "date-fns"
import { Appointment } from "@/app/shared/types"

const AppointmentCard = ({ time, title, patient, date, doctor }: Appointment & {color:string}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100/80 ">
      

      {/* Body */}
      <div className="p-5 space-y-4">
        {/* Status */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">{title}</span>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 capitalize">
            Scheduled
          </span>
        </div>

        {/* Doctor */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-blue-100/50">
            <Avatar className="w-full h-full">
              <AvatarImage src={doctor?.avatar_url} alt="Doctor" />
              <AvatarFallback className="bg-blue-50 text-blue-700 text-sm font-medium">
                {doctor?.name?.charAt(0) || "D"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">Dr. {doctor?.name}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1.5">
              <Stethoscope className="w-3 h-3" />
              <span>{doctor?.specialty?.name || "General"}</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        {/* Patient */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-green-100/50">
            <Avatar className="w-full h-full">
              <AvatarImage src={patient?.avatar_url} alt="Patient" />
              <AvatarFallback className="bg-green-50 text-green-700 text-xs font-medium">
                {patient?.name?.charAt(0) || "P"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">{patient?.name}</p>
            <p className="text-xs text-gray-500">Patient</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2.5 text-sm text-gray-600">
            <div className="p-1.5 bg-gray-50 rounded-lg">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <span className="font-medium">{format(new Date(date), "MMM dd, yyyy")}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-gray-600">
            <div className="p-1.5 bg-gray-50 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <span className="font-medium">{time}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-2 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60">
        <button className="flex-1 px-3 py-2 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5">
          <Pencil className="w-3.5 h-3.5" />
          Edit
        </button>
        <button className="flex-1 px-3 py-2 text-xs font-medium border border-gray-200 bg-white text-gray-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
          <XCircle className="w-3.5 h-3.5" />
          Cancel
        </button>
      </div>
    </div>
  )
}

export default AppointmentCard