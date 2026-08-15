// SpecialtyForm.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray } from "react-hook-form";
import Selection from "@/src/shared/components/select";
import { FormTypeProps } from "../../../types";
import { Plus, ChevronDown, ChevronRight } from "lucide-react";
import SpecialtyEntry from "./specialtyEntry";
import { useState } from "react";

export function SpecialtyForm({ form }: FormTypeProps) {
  const { control } = form;
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // ✅ Track which is expanded

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    name: "specialties",
    control
  });

  const addSpecialty = () => {
    append({
      name: ""
    });
    // ✅ Auto-expand the newly added specialty
    setExpandedIndex(fields.length);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm">
      <div className="text-center w-full mb-4">
        <h3 className="text-2xl font-bold text-blue-600 tracking-wide">
          Specialties
        </h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      {fields.map((field, index) => (
        <SpecialtyEntry
          key={field.id}
          control={control}
          index={index}
          onRemove={() => remove(index)}
          canRemove={fields.length > 1}
        />
      ))}

      <button
        type="button"
        onClick={addSpecialty}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Plus />
        Add Specialty
      </button>
    </div>
  );
}