import { CalendarDays } from "lucide-react";
import { EventsSidebarProps } from "../types";
import EventsSidebarHeader from "./eventsSidebarHeader";

// Mock data for testing
const MOCK_APPOINTMENTS = [
  {
    id: "1",
    title: "Annual Checkup",
    status: "confirmed",
    description: "Routine annual physical examination",
    doctor: {
      id: "doc1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
    },
    patient: {
      id: "pat1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
    },
    available_time: {
      start: "2026-08-05T09:00:00Z",
      end: "2026-08-05T09:30:00Z",
    },
  },
  {
    id: "2",
    title: "Follow-up Consultation",
    status: "pending",
    description: "Post-surgery follow-up",
    doctor: {
      id: "doc2",
      name: "Dr. Michael Chen",
      specialty: "Orthopedics",
    },
    patient: {
      id: "pat2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
    },
    available_time: {
      start: "2026-08-05T10:30:00Z",
      end: "2026-08-05T11:00:00Z",
    },
  },
  {
    id: "3",
    title: "Dental Cleaning",
    status: "completed",
    description: "Regular dental cleaning and checkup",
    doctor: {
      id: "doc3",
      name: "Dr. Emily Rodriguez",
      specialty: "Dentistry",
    },
    patient: {
      id: "pat3",
      name: "Robert Wilson",
      email: "robert@example.com",
      phone: "+1 (555) 456-7890",
    },
    available_time: {
      start: "2026-08-05T14:00:00Z",
      end: "2026-08-05T14:45:00Z",
    },
  },
  {
    id: "4",
    title: "Eye Examination",
    status: "cancelled",
    description: "Annual eye exam and prescription update",
    doctor: {
      id: "doc4",
      name: "Dr. Lisa Park",
      specialty: "Ophthalmology",
    },
    patient: {
      id: "pat4",
      name: "Maria Garcia",
      email: "maria@example.com",
      phone: "+1 (555) 789-0123",
    },
    available_time: {
      start: "2026-08-05T15:30:00Z",
      end: "2026-08-05T16:15:00Z",
    },
  },
  {
    id: "5",
    title: "Skin Consultation",
    status: "confirmed",
    description: "Dermatology consultation for skin condition",
    doctor: {
      id: "doc5",
      name: "Dr. James Anderson",
      specialty: "Dermatology",
    },
    patient: {
      id: "pat5",
      name: "David Thompson",
      email: "david@example.com",
      phone: "+1 (555) 234-5678",
    },
    available_time: {
      start: "2026-08-05T16:45:00Z",
      end: "2026-08-05T17:30:00Z",
    },
  },
];

// Alternative: Empty mock data for testing no appointments state

export default async function EventsSidebar({ date, doctorId }: EventsSidebarProps) {
  // Use mock data instead of API call
  // Uncomment the line below to test empty state
  // const appointments = MOCK_APPOINTMENTS_EMPTY;
  const appointments = MOCK_APPOINTMENTS;
  const count = appointments.length;

  // Simulate async loading (optional)
  // await new Promise(resolve => setTimeout(resolve, 100));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100/80 p-4">
      {/* Header */}
      <EventsSidebarHeader date={date} count={count} />
      
      {/* Appointments List */}
      <div className="space-y-3 max-h-[1000px] overflow-y-auto pr-1 custom-scroll">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            // <AppointmentCard
            //   key={appointment.id}
            //   id={appointment.id}
            //   title={appointment.title}
            //   status={appointment.status}
            //   description={appointment.description}
            //   doctor={appointment.doctor.name}
            //   patient={appointment.patient.name}
            //   available_time={appointment.available_time}
            // />
            <p key={ appointment.id}>{appointment.doctor.name}</p>
          ))
        ) : (
          <div className="text-center py-10">
            <CalendarDays className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">No appointments for this date</p>
          </div>
        )}
      </div>
    </div>
  );
}