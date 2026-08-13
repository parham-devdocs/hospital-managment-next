// certification/certificationEntry.tsx
"use client";
import { Control, Controller } from "react-hook-form";
import { X } from "lucide-react";
import { FormData } from "../../../validations";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/src/shared/components/date-picker";

interface CertificationEntryProps {
  index: number;
  onRemove: () => void;
  canRemove: boolean;
  control: Control<FormData>;
}

const CertificationEntry = ({
  index,
  onRemove,
  canRemove,
  control,
}: CertificationEntryProps) => {
  return (
    <Card className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800">
            Certification #{index + 1}
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
          {/* Certification Name */}
          <Controller
            name={`certifications.${index}.name`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`cert-name-${index}`}>Certification Name</FieldLabel>
                <Input
                  {...field}
                  id={`cert-name-${index}`}
                  placeholder="e.g., ACLS"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Issuing Organization */}
          <Controller
            name={`certifications.${index}.issuingOrganization`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`cert-org-${index}`}>Issuing Organization</FieldLabel>
                <Input
                  {...field}
                  id={`cert-org-${index}`}
                  placeholder="e.g., American Heart Association"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Certification Number */}
          <Controller
            name={`certifications.${index}.certificationNumber`}
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`cert-number-${index}`}>Certification Number</FieldLabel>
                <Input
                  {...field}
                  id={`cert-number-${index}`}
                  placeholder="e.g., 12345-67890"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Dates – side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date Obtained */}
            <Controller
              name={`certifications.${index}.dateObtained`}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`cert-date-${index}`}>Date Obtained</FieldLabel>
                  <DatePicker
                    date={field.value}
                    setDate={(newDate) => field.onChange(newDate)}
                    placeholder="Select date obtained"
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Expiry Date */}
            <Controller
              name={`certifications.${index}.expiryDate`}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`cert-expiry-${index}`}>Expiry Date</FieldLabel>
                  <DatePicker
                    date={field.value}
                    setDate={(newDate) => field.onChange(newDate)}
                    placeholder="Select expiry date"
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

export default CertificationEntry;