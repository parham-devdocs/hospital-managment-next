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

      {/* Educations */}
      {data.educations.length > 0 && (
        <EducationComp educations={data.educations} />
      )}

      {/* Work Experiences */}
      {data.workExperiences.length > 0 && (
        <WorkExperienceComp workExperiences={data.workExperiences} />
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <CertificationComp certifications={data.certifications} />
      )}
    </div>
  );
}
