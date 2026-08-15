// education/educationInfoForm.tsx
"use client";
import { Control, useFieldArray, useFormContext } from "react-hook-form";
import EducationEntry from "./educationEntry";
import { Plus } from "lucide-react";
import {FormData  } from "../../../validations/index";
import { FormTypeProps } from "../../../types";
interface EducationFormProps {
  control: Control<FormData>;
  errors?: any; // optional
}
const EducationInfoForm = ({form}:FormTypeProps) => {
 const {control}=form
  
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
      graduationYear: 2000,
      country: "",
      degree: "",
      honors: [""],
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm">
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