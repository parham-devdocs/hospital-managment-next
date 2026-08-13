// education/educationEntry.tsx
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
import { Card, CardContent } from "@/components/ui/card";

interface EducationEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  control: Control<FormData>;
}

const EducationEntry = ({
  index,
  onRemove,
  canRemove,
  control,
}: EducationEntryProps) => {
  const { fields, append, remove } = useFieldArray<FormData, "educations", never>({
    control,
    name: `educations.${index}.honors` as any
  });

  return (
    <Card className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800">
            Education #{index + 1}
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
          {/* Medical School */}
          <Controller
            name={`educations.${index}.medicalSchool`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`med-school-${index}`}>Medical School</FieldLabel>
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

          {/* Graduation Year */}
          <Controller
            name={`educations.${index}.graduationYear`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`grad-year-${index}`}>Graduation Year</FieldLabel>
                <Input
                  {...field}
                  id={`grad-year-${index}`}
                  placeholder="e.g., 2020"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Country */}
          <Controller
            name={`educations.${index}.country`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`country-${index}`}>Country</FieldLabel>
                <Input
                  {...field}
                  id={`country-${index}`}
                  placeholder="e.g., United States"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Degree */}
          <Controller
            name={`educations.${index}.degree`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`degree-${index}`}>Degree</FieldLabel>
                <Input
                  {...field}
                  id={`degree-${index}`}
                  placeholder="e.g., MD, PhD"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Honors (nested array) */}
          <div>
            <FieldLabel>Honors</FieldLabel>
            {fields.map((honorField, honorIndex) => (
              <div key={honorIndex} className="flex items-center gap-2 mt-2">
                <Controller
                  name={`educations.${index}.honors.${honorIndex}`}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="flex-1">
                      <Input
                        {...field}
                        placeholder="e.g., Cum Laude"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
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
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-2"
            >
              <Plus size={16} /> Add Honor
            </button>
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default EducationEntry;