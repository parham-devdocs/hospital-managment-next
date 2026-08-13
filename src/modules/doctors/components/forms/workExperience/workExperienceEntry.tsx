// workExperience/workExperienceEntry.tsx
"use client";
import { Control, Controller, useFieldArray, useFormContext } from "react-hook-form";
import { X, Plus } from "lucide-react";
import { FormData } from "../../../validations";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/src/shared/components/date-picker";

interface WorkExperienceEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  control?:Control<FormData>
  errors?:any
}

const WorkExperienceEntry = ({ index, onRemove, canRemove ,control}: WorkExperienceEntryProps) => {

  const {
    fields: responsibilityFields,
    append: appendResponsibility,
    remove: removeResponsibility,
  } = useFieldArray({
    name: `workExperiences.${index}.responsibilities`,
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
      {/* export interface WorkExperienceItem{
    hospital: string,
    startDate: Date,
    endDate: Date,
    location: string,
    position: string,
    responsibilities: string[]
  } */}

      <div className="space-y-4">
      <Controller
            name={`workExperiences.${index}.hospital`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`med-school-${index}`}>Hospital</FieldLabel>
                <Input
                  {...field}
                  id={`med-school-${index}`}
                  placeholder="e.g., Harvard"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date Obtained */}
            <Controller
            name={`workExperiences.${index}.startDate`}
            control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`cert-date-${index}`}>Start Date</FieldLabel>
                  <DatePicker
                    date={field.value}
                    setDate={(newDate) => field.onChange(newDate)}
                    placeholder="Select start date"
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
           <Controller
            name={`workExperiences.${index}.endDate`}
            control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`cert-date-${index}`}>End Date</FieldLabel>
                  <DatePicker
                    date={field.value}
                    setDate={(newDate) => field.onChange(newDate)}
                    placeholder="Select start date"
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
             <Controller
            name={`educations.${index}.medicalSchool`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`med-school-${index}`}>Medical School</FieldLabel>
                <Sele
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

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