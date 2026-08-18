// BioForm.tsx
"use client";
import { Control, Controller } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea"; // ✅ use Textarea for bio
import { FormData } from "../../validations";
import TextArea from "@/src/shared/components/form/controllers/textArea";
import { FormTypeProps } from "../../types";

interface BioFormProps {
  form: Control<FormData>;
}

const BioForm = ({ form }: FormTypeProps) => {
    const {control}=form

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm">
      <div className="text-center w-full mb-4">
        <h3 className="text-2xl font-bold text-blue-600 tracking-wide">Bio</h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      <TextArea control={control} fieldLabel="Bio" fieldName="bio" placeHolder="Dr. Jane Doe is a board-certified cardiologist with over 10 years of ..."/>
    </div>
  );
};

export default BioForm;