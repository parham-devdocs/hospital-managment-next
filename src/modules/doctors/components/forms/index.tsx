// CreateDoctorForm.tsx
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, formSchema } from "../../validations";
import { GeneralInfoForm } from "./generalInfoForm";
import { Button } from "@/components/ui/button";
import EducationInfoForm from "./education/educationInfoForm";
import CertificationForm from "./certification/certificationForm";
import WorkExperienceForm from "./workExperience/workExperieneForm";

export const defaultValues: FormData = {
  fullName: "",
  email: "",
  password: "",
  address: "",
  phoneNumber: "",
  age: 18,
  gender: "male" as const,
  educations: [
    {
      medicalSchool: "",
      graduationYear: "",
      country: "",
      degree: "",
      honors: [""],
    },
  ],
  workExperiences: [
    {
      hospital: "",
      startDate: new Date(),
      endDate: new Date(),
      location: "",
      position: "",
      responsibilities: [""],
    },
  ],
  certifications: [
    {
      name: "",
      issuingOrganization: "",
      dateObtained: new Date(),
      expiryDate: new Date(),
      certificationNumber: "",
    },
  ],
};

const CreateDoctorForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("✅ Submitted:", data);
  };
  
  const onError = (errors: any) => {
    console.log("❌ Validation errors:", errors);
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit,onError)}>
      {/* Pass the form methods as a prop */}
      <GeneralInfoForm form={form} />
      <EducationInfoForm form={form} />
      <WorkExperienceForm form={form} />
      <CertificationForm form={form} />

      <Button type="submit" onClick={()=>onSubmit} >Submit</Button>
    </form>
  );
};

export default CreateDoctorForm;