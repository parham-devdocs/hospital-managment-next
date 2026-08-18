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
import { useCreateDoctor } from "../../api/hooks/create-doctor.query";
import BioForm from "./bio";
import { SpecialtyForm } from "./specialty/specialtyForm";

// CreateDoctorForm.tsx
export const defaultValues: FormData = {
  user: { // ✅ Now wrapped in "user"
    fullName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    age: 18,
    gender: "male" as const,

  },
  specialties:[{name:""}],
      bio:"",
  educations: [
    {
      medicalSchool: "",
      graduationYear:2000,
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
  // ✅ Hook called at top level
  const { mutate, isError, error } = useCreateDoctor();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutate(data); // ✅ Pass the form data to mutate
  };

  const onError = (errors: any) => {
    console.log("❌ Validation errors:", errors);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit, onError)}>
      <GeneralInfoForm form={form} />
      <SpecialtyForm form={form}/>
      <BioForm form={form}/>
      <EducationInfoForm form={form} />
      <WorkExperienceForm form={form} />
      <CertificationForm form={form} />
       
     <Button type="submit">Submit</Button>

      {/* Optional: show error */}
      {isError && <div className="text-red-500">Error: {error?.message}</div>}
    </form>
  );
};

export default CreateDoctorForm;