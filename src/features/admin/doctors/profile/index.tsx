
import { BasicInfo } from "./header/components/basicInfo";
import Avatar from "./header/components/avatar";
import Tab from "./tabs";
import { Doctor } from "../types";

function DoctorProfile({ doctorInfo }: { doctorInfo: Doctor }) {
  console.log(doctorInfo)
  return (
    <div className="animate-fadeIn space-y-10">
      {/* Main Card */}
      <div className="bg-white  rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="p-6 pb-0">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar
              avatar_url={doctorInfo.avatar_url}
              fullName={doctorInfo.fullName}
            />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <BasicInfo
                  phoneNumber={doctorInfo.phoneNumber}
                  specialties={doctorInfo.specialties}
                  workExperienceCount={doctorInfo.workExperienceCount}
                  educationCount={doctorInfo.educationCount}
                  certificationCount={doctorInfo.certificationCount}
                  createdAt={doctorInfo.createdAt}
                  isActive={doctorInfo.isActive}
                  gender={doctorInfo.gender}
                  address={doctorInfo.address}
                  fullName={doctorInfo.fullName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tab />
    </div>
  );
}

export default DoctorProfile;
