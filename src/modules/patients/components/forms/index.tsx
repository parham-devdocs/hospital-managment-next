// CreatePatientForm.tsx
"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormData, patientSchema } from "../../validations";
import { useCreatePatient } from "../../api/hooks/useCreatePatient";
import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import MedicalInfo from "./MediaclInfo";

export type CurrentFormState = "GeneralInfo" | "MedicalInfo";

// Default values from your original data
export const defaultValues: FormData = {
  // General Info
  user: {
    address: "123 Main Street, Springfield, IL 62701",
    age: 45,
    fullName: "John Doe1",
    gender: "Male",
    email: "jfffffffoe@example.com",
    phoneNumber: "+91244589874",
  },
  // Medical Info
  allergies: [],
  height: 175.5,
  medical_condition_summary: "Type 2 diabetes, mild hypertension",
  bloodType: "A+",
  weight: 80.2,
  emergency_phone: "+1-555-123-4567",
  illness: "Lower back pain",
};

const CreatePatientForm = () => {
  const [currentFormSection, setCurrentFormSection] = useState<CurrentFormState>("GeneralInfo");
  const router = useRouter();
  const { mutate, isError, error, isPending } = useCreatePatient();

  const methods = useForm<FormData>({
    resolver: zodResolver(patientSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit, trigger, formState: { isValid, isSubmitting } } = methods;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/doctors");
      }
    });
  };

  const onError = (errors: any) => {
    console.log("❌ Validation errors:", errors);
  };

  const handleNext = async () => {
    // Validate only the current section fields
    const fieldsToValidate = currentFormSection === "GeneralInfo" 
      ? ['user.fullName', 'user.age', 'user.gender', 'user.email', 'user.phoneNumber', 'user.address']
      : ['illness', 'emergency_phone', 'weight', 'height', 'bloodType', 'medical_condition_summary', 'allergies'];
    
    const isStepValid = await trigger(fieldsToValidate as any);
    
    if (isStepValid) {
      setCurrentFormSection(currentFormSection === "GeneralInfo" ? "MedicalInfo" : "GeneralInfo");
    }
  };

  const handlePrevious = () => {
    setCurrentFormSection(currentFormSection === "MedicalInfo" ? "GeneralInfo" : "GeneralInfo");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="max-w-4xl mx-auto p-6">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${currentFormSection === "GeneralInfo" ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentFormSection === "GeneralInfo" ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  1
                </span>
                <span className="ml-2 font-medium">Personal Info</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className={`flex items-center ${currentFormSection === "MedicalInfo" ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentFormSection === "MedicalInfo" ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  2
                </span>
                <span className="ml-2 font-medium">Medical Info</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <div className="bg-white rounded-lg shadow">
          {currentFormSection === "GeneralInfo" && <GeneralInfo />}
          {currentFormSection === "MedicalInfo" && <MedicalInfo />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <div>
            {currentFormSection === "MedicalInfo" && (
              <Button
                type="button"
                onClick={handlePrevious}
                variant="outline"
                className="px-6"
              >
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex space-x-4">
            {currentFormSection === "GeneralInfo" ? (
              <Button
                type="button"
                onClick={handleNext}
                className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next
              </Button>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={handleNext}
                  variant="outline"
                  className="px-6"
                >
                  Review
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || isPending || !isValid}
                  className="px-6 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                >
                  {isSubmitting || isPending ? 'Creating...' : 'Create Patient'}
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Error Message */}
        {isError && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md">
            Error: {error?.message || 'Something went wrong'}
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default CreatePatientForm;