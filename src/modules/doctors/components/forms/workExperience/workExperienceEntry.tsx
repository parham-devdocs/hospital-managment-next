// workExperience/workExperienceEntry.tsx
"use client";
import { Control, useFieldArray, useFormContext } from "react-hook-form";
import Input from "@/src/shared/components/form/controllers/general";
import { X, Plus } from "lucide-react";
import { FormData } from "../../../validations";

interface WorkExperienceEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  control?:Control<FormData>
  errors?:any
}

const WorkExperienceEntry = ({ index, onRemove, canRemove ,errors}: WorkExperienceEntryProps) => {
    const { register } = useFormContext(); // ✅ gets control from context

  const {
    fields: responsibilityFields,
    append: appendResponsibility,
    remove: removeResponsibility,
  } = useFieldArray({
    name: `workExperience.${index}.responsibilities`,
  });

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          Experience #{index + 1}
        </h4>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <Input
          {...register(`workExperiences.${index}.hospital`)}
          fieldLabel="Hospital / Organization"
          fieldName={`workExperiences.${index}.hospital`}
          placeHolder="e.g., Mayo Clinic"
        />
        <Input
          {...register(`workExperiences.${index}.position`)}
          fieldLabel="Position"
          fieldName={`workExperiences.${index}.position`}
          placeHolder="e.g., Resident"
        />
        <Input
          {...register(`workExperiences.${index}.location`)}
          fieldLabel="Location"
          fieldName={`workExperiences.${index}.location`}
          placeHolder="e.g., Rochester, MN"
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            {...register(`workExperiences.${index}.startDate`)}
            fieldLabel="Start Date"
            fieldName={`workExperiences.${index}.startDate`}
            inputType="date"
          />
          <Input
            {...register(`workExperiences.${index}.endDate`)}
            fieldLabel="End Date"
            fieldName={`workExperiences.${index}.endDate`}
            inputType="date"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Responsibilities
          </label>
          {responsibilityFields.map((respField, respIndex) => (
            <div key={respField.id} className="flex items-center gap-2 mb-2">
              <Input
              fieldLabel="responsibility"
                fieldName={`workExperiences.${index}.responsibilities.${respIndex}`}
                placeHolder="e.g., Patient care, research"
              />
              <button
                type="button"
                onClick={() => removeResponsibility(respIndex)}
                className="text-red-500 hover:text-red-700"
                disabled={responsibilityFields.length === 1}
              >
                <X size={16} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendResponsibility("")}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <Plus size={16} /> Add Responsibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceEntry;