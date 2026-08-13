// education/educationInfoForm.tsx
"use client";
import { Control, useFieldArray, useFormContext } from "react-hook-form";
import EducationEntry from "./educationEntry";
import { Plus } from "lucide-react";
import {FormData  } from "../../../validations/index";
interface EducationFormProps {
  control: Control<FormData>;
  errors?: any; // optional
}
const EducationInfoForm = ({errors,control}:EducationFormProps) => {
 
  
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    name: "educations",   
    control
  });

  const addEducation = () => {
    append({
      medicalSchool: "",
      graduationYear: "",
      country: "",
      degree: "",
      honors: [""],
    });
  };

  return (
    <div>
      <div className="text-center w-full mb-8">
        <h3 className="text-2xl font-bold text-blue-600">Educational Info</h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      {fields.map((field, index) => (
        <EducationEntry
          key={field.id}
          index={index}
          control={control}
          onRemove={() => remove(index)}
          canRemove={fields.length > 1}
          errors={errors}
        />
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100"
      >
        <Plus />
        Add Education
      </button>
    </div>
  );
};

export default EducationInfoForm;