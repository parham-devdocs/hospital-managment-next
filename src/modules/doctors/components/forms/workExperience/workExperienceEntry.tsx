// workExperience/workExperienceEntry.tsx
"use client";
import { Control, Controller, useFieldArray } from "react-hook-form";
import { X, Plus } from "lucide-react";
import { FormData } from "../../../validations";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/src/shared/components/date-picker";
import Selection from "@/src/shared/components/select";
import { countries } from "@/src/app/data";
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperienceEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  control?: Control<FormData>;
}

const WorkExperienceEntry = ({
  index,
  onRemove,
  canRemove,
  control,
}: WorkExperienceEntryProps) => {
  const {
    fields: responsibilityFields,
    append: appendResponsibility,
    remove: removeResponsibility,
  } = useFieldArray({
    control,
    name: `workExperiences.${index}.responsibilities` as any,
  });

  return (
    <Card className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        {/* Header */}
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

        <FieldGroup>
          {/* Row 1: Hospital, Position, Location – 3 equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hospital */}
            <Controller
              name={`workExperiences.${index}.hospital`}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`hospital-${index}`}>Hospital / Organization</FieldLabel>
                  <Input
                    {...field}
                    id={`hospital-${index}`}
                    placeholder="e.g., Mayo Clinic"
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Position */}
            <Controller
              name={`workExperiences.${index}.position`}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`position-${index}`}>Position</FieldLabel>
                  <Input
                    {...field}
                    id={`position-${index}`}
                    placeholder="e.g., Resident"
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Location – using Selection with label */}
            <Controller
              name={`workExperiences.${index}.location`}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`location-${index}`}>Location</FieldLabel>
                  <Selection
                    name={`workExperiences.${index}.location`}
                    control={control as any}
                    placeholder="location"
                    selectItems={countries}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          {/* Row 2: Start Date & End Date – 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Controller
              name={`workExperiences.${index}.startDate`}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`start-date-${index}`}>Start Date</FieldLabel>
                  <DatePicker
                    date={field.value}
                    setDate={(newDate) => field.onChange(newDate)}
                    placeholder="Select start date"
                    className={fieldState.invalid ? "border-red-500 w-full" : "w-full"}
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
                  <FieldLabel htmlFor={`end-date-${index}`}>End Date</FieldLabel>
                  <DatePicker
                    date={field.value}
                    setDate={(newDate) => field.onChange(newDate)}
                    placeholder="Select end date"
                    className={fieldState.invalid ? "border-red-500 w-full" : "w-full"}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          {/* Row 3: Responsibilities – full width with nested array */}
          <div>
            <FieldLabel>Responsibilities</FieldLabel>
            {responsibilityFields.map((respField, respIndex) => (
              <div key={respField.id} className="flex items-center gap-2 mt-2">
                <Controller
                  name={`workExperiences.${index}.responsibilities.${respIndex}`}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="flex-1">
                      <Input
                        {...field}
                        placeholder="e.g., Patient care, research"
                        aria-invalid={fieldState.invalid}
                        className="w-full"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <button
                  type="button"
                  onClick={() => removeResponsibility(respIndex)}
                  className="text-red-500 hover:text-red-700 shrink-0 cursor-pointer"
                  disabled={responsibilityFields.length === 1}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendResponsibility("")}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-2 cursor-pointer"
            >
              <Plus size={16} /> Add Responsibility
            </button>
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default WorkExperienceEntry;