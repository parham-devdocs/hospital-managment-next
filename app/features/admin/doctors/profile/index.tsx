import { Briefcase, Star, Users } from "lucide-react";
import { BasicInfo } from "./header/components/basicInfo";
import QuickStats from "./header/components/quickStats";
import Avatar from "./header/components/avatar";
import Tab from "./header/components/tabs";
const fakeDoctorBasicInfo = {
  fullName: "Dr. Sarah Johnson",
  specialty: {
    name: "Cardiologist",
    id: "1"
  },
  rating: 4.9,
  totalPatients: 2847,
  location: "New York, NY",
  experience: 12,
  phone:"+9124687022"
};
// Sample doctor data
const getDoctorData = (id: string) => ({
  id: parseInt(id),
  fullName: "Dr. Sarah Johnson",
  specialty: "Cardiologist",
  location: "New York, NY",
  experience: 12,
  rating: 4.9,
  totalPatients: 2847,
  phone: "+1 (555) 123-4567",
  email: "sarah.johnson@healthcare.com",
  bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology, heart failure management, and cardiac imaging. Dr. Johnson is committed to providing personalized, compassionate care to each of her patients.",
  avatar_url: null,
  education: [
    "MD, Harvard Medical School, 2010",
    "Residency in Internal Medicine, Johns Hopkins, 2013",
    "Fellowship in Cardiology, Mayo Clinic, 2016"
  ],
  certifications: [
    "American Board of Internal Medicine",
    "Board Certified in Cardiovascular Disease",
    "Advanced Cardiac Life Support (ACLS)",
    "Fellow of the American College of Cardiology"
  ],
  languages: ["English", "Spanish", "French"],
  availability: [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 3:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ],
  stats: [
    { label: "Experience", value: "12 Years", icon: <Briefcase size={18} className="text-blue-600" /> },
    { label: "Patients", value: "2.8K+", icon: <Users size={18} className="text-blue-600" /> },
    { label: "Rating", value: "4.9★", icon: <Star size={18} className="text-yellow-400" /> }
  ],
  services: [
    "Cardiac Consultation",
    "Heart Disease Prevention",
    "Cardiac Imaging",
    "Heart Failure Management",
    "Hypertension Treatment",
    "Cardiac Rehabilitation"
  ]
});

function DoctorProfile(id:string) {
  const doctor = getDoctorData(id)

  
    return (
      <div className="animate-fadeIn space-y-10">
        {/* Main Card */}
        <div className="bg-white  rounded-2xl shadow-sm overflow-hidden border border-gray-100">
  
          {/* Header */}
          <div className="p-6 pb-0">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar
                avatar_url={doctor.avatar_url}
                fullName={doctor.fullName as string}
              />
  
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <BasicInfo
                    phone={fakeDoctorBasicInfo.phone}
                    specialty={fakeDoctorBasicInfo.specialty}
                    address={fakeDoctorBasicInfo.location}
                    fullName={fakeDoctorBasicInfo.fullName}
                    experience={fakeDoctorBasicInfo.experience}
                    rating={fakeDoctorBasicInfo.rating}
                    totalPatients={fakeDoctorBasicInfo.totalPatients}
                  />
                </div>
  
                <QuickStats stat={doctor.stats} />
              </div>
            </div>
          </div>
  
         
  
        </div>
        <Tab/>
      </div>
    );
  }


  export default DoctorProfile