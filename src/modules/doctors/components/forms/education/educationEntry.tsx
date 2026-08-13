// education/educationEntry.tsx
"use client";
import { Control, useFieldArray, useFormContext } from "react-hook-form";
import Input from "@/src/shared/components/form/controllers/general";
import { X, Plus } from "lucide-react";
import {FormData} from "../../../validations/index";
interface EducationEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  errors: any;
  control:Control<FormData>;
}

const EducationEntry = ({ index, onRemove, canRemove, errors,control }: EducationEntryProps) => {

  const { fields, append, remove } = useFieldArray({
    name: `education.${index}.honors`,
  });

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Education #{index + 1}</h4>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-red-500 hover:text-red-700">
            <X size={20} />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <Input control={control} fieldLabel="Medical School" fieldName={`educations.${index}.medicalSchool`} placeHolder="e.g., Harvard" />
        <Input control={control} fieldLabel="Graduation Year" fieldName={`educations.${index}.graduationYear`} placeHolder="e.g., 2020" />
        <Input control={control} fieldLabel="Country" fieldName={`educations.${index}.country`} placeHolder="e.g., United States" />
        <Input control={control} fieldLabel="Degree" fieldName={`educations.${index}.degree`} placeHolder="e.g., MD, PhD" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Honors</label>
          {fields.map((honorField, honorIndex) => (
            <div key={honorField.id} className="flex items-center gap-2 mb-2">
              <Input
              fieldLabel="honor"
                control={control}
                fieldName={`educations.${index}.honors.${honorIndex}`}
                placeHolder="e.g., Cum Laude"
              />
              <button
                type="button"
                onClick={() => remove(honorIndex)}
                className="text-red-500 hover:text-red-700"
                disabled={fields.length === 1}
              >
                <X size={16} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append("")}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <Plus size={16} /> Add Honor
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationEntry;