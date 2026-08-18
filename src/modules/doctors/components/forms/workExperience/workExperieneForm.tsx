// workExperience/workExperienceForm.tsx
"use client";
import { Control, useFieldArray, useForm, useFormContext } from "react-hook-form";
import WorkExperienceEntry from "./workExperienceEntry";
import { Plus } from "lucide-react";
import { FormData } from "../../../validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { workExperienceSchema } from "../../../validations/workExperienceSchema";
import { defaultValues } from "../../forms/index";
import { FormTypeProps } from "../../../types";
interface WorkExperienceFormProps {
  control: Control<FormData>;
  errors?: any; // optional
}
const WorkExperienceForm = ({form}:FormTypeProps) => {

  const {control}=form
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    name: "workExperiences",
    control
  });

  const addWorkExperience = () => {
    append({
      hospital: "",
      startDate: new Date(),
      endDate: new Date(),
      location: "",
      position: "",
      responsibilities: [""],
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm">
      <div className="text-center w-full mb-4">
        <h3 className="text-2xl font-bold text-blue-600 tracking-wide">
          Work Experience
        </h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      {fields.map((field, index) => (
        <WorkExperienceEntry
        control={control}
          key={field.id}
          index={index}
          onRemove={() => remove(index)}
          canRemove={fields.length > 1}
        />
      ))}

      <button
        type="button"
        onClick={addWorkExperience}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Plus />
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperienceForm;