import React from "react";
import { Control, Controller } from "react-hook-form";
import { FormData } from "../../../validations";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import Selection from "@/src/shared/components/select";
import { doctorSpecialties } from "@/src/app/data"; // import the list

interface SpecialtyEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  control: Control<FormData>; // ✅ make required, not optional
}

const SpecialtyEntry = ({
  index,
  onRemove,
  canRemove,
  control,
}: SpecialtyEntryProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-medium text-gray-700">
          Specialty #{index + 1}
        </h4>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>
        )}
      </div>

      {/* ✅ Correct field name: specialties array, 'name' property */}
      <Controller
        name={`specialties.${index}.name`} // ✅ fixed path
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={`specialty-${index}`}>Specialty Name</FieldLabel>
            <Selection
              name={`specialties.${index}.name`} // ✅ same path
              control={control as any}
              placeholder="Select a specialty..."
              selectItems={doctorSpecialties} // ✅ use the list
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
};

export default SpecialtyEntry;