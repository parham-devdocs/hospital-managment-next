"use client";
import { Control, useFieldArray, useFormContext } from "react-hook-form";
import CertificationEntry from "./certificationEntry";
import { Plus } from "lucide-react";
import { FormData } from "../../../validations";
import { FormTypeProps } from "../../../types";


const CertificationForm = ({form}:FormTypeProps) => {
const {control}=form
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    name: "certifications",
    control
  });

  const addCertification = () => {
    append({
      name: "",
      issuingOrganization: "",
      dateObtained: new Date(),
      expiryDate: new Date(),
      certificationNumber: "",
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm">
      <div className="text-center w-full mb-4">
        <h3 className="text-2xl font-bold text-blue-600 tracking-wide">
          Certifications
        </h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      {fields.map((field, index) => (
        <CertificationEntry
        control={control}
          key={field.id}
          index={index}
          onRemove={() => remove(index)}
          canRemove={fields.length > 1}
        />
      ))}

      <button
        type="button"
        onClick={addCertification}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Plus />
        Add Certification
      </button>
    </div>
  );
};

export default CertificationForm;