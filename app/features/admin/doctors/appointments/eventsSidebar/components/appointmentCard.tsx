import Footer from "./footer";
import { Appointment } from "../../../types";
import AppointmentCardStatus from "./appointmentCardStatus";
import DoctorInfo from "./doctorInfo";
import PatientInfo from "./patientInfo";
import Time from "./time";

const AppointmentCard = ({
  id,
  title,
  status,
  patient,
  available_time,
  doctor,
}: Appointment) => {
  return (
    <div className="group w-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/80 transition-all duration-200 hover:-translate-y-1">
      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Header: Title + Status */}
        <div className="flex justify-between items-start gap-3">
          <h4 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">
            {title || "Appointment"}
          </h4>
          <AppointmentCardStatus status={status} />
        </div>

        {/* Doctor Info */}
        <DoctorInfo
          fullName={doctor?.profile.fullName}
          specialty={doctor?.specialty.name}
          avatar_url={doctor?.profile.avatar_url}
        />

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        {/* Patient Info */}
        <PatientInfo
          fullName={patient?.profile.fullName}
          avatar_url={patient?.profile.avatar_url}
        />

        {/* Divider */}
        <div className="border-t border-gray-100/80" />

        <Time time={available_time.time} />
      </div>

      {/* Footer Actions */}
      <Footer id={id} />
    </div>
  );
};

export default AppointmentCard;
