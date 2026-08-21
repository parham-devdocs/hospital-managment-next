"use client";


import { Doctor } from "../../types";
import WorkExperienceComp from "./workExperience";
import EducationComp from "./educationComp";
import GeneralInfo from "@/src/shared/components/profile/generalInfo";
import CertificationComp from "./cetrificaion";

export default function DoctorProfile({ data }: { data: Doctor }) {
  return (
    <div className=" w-full mx-auto p-6 bg-white shadow-xl rounded-2xl border border-primary-100 my-8 space-y-5">
      <GeneralInfo generalInfo={data.user} />

<<<<<<< HEAD
=======
      {/* Educations */}
>>>>>>> 15278f38c7cc53b315ee58594d9fc5415167ecd9
      {data.educations.length > 0 && (
        <EducationComp educations={data.educations} />
      )}

<<<<<<< HEAD
=======
      {/* Work Experiences */}
>>>>>>> 15278f38c7cc53b315ee58594d9fc5415167ecd9
      {data.workExperiences.length > 0 && (
        <WorkExperienceComp workExperiences={data.workExperiences} />
      )}

<<<<<<< HEAD
=======
      {/* Certifications */}
>>>>>>> 15278f38c7cc53b315ee58594d9fc5415167ecd9
      {data.certifications.length > 0 && (
        <CertificationComp certifications={data.certifications} />
      )}
    </div>
  );
}
