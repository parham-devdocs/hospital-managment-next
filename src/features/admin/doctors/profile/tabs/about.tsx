// src/features/admin/doctors/profile/tabs/about.tsx
import { Doctor } from "../../types";

const About = ({ doctorData }: { doctorData?: Doctor }) => {
  // Check if doctorData exists
  console.log(doctorData)
  if (!doctorData) {
    return (
      <div className="animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6 leading-10 text-gray-500">
        No doctor information available
      </div>
    );
  }

  return (
    <div className="animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6 leading-10">
      {doctorData.bio || "No bio available"}
    </div>
  );
};

export default About;