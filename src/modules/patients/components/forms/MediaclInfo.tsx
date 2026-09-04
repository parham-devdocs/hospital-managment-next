// components/MedicalInfo.tsx
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import SimpleInput from '@/src/shared/components/form/controllers/simpleInput';
import { FormData } from '../../validations';

interface MedicalInfoProps {
  isEditing?: boolean;
}

const MedicalInfo = ({ isEditing = false }: MedicalInfoProps) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();

  const height = watch('height');
  const weight = watch('weight');
  const bmi = height && weight ? (weight / ((height / 100) ** 2)).toFixed(1) : null;

  return (
    <div className="w-full h-full p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
        
        {bmi && (
          <div className="mb-4 p-3 bg-blue-50 rounded">
            <p className="text-sm">BMI: <span className="font-semibold">{bmi}</span></p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="illness"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Illness"
                placeholder="Enter current illness"
                error={errors.illness?.message}
                required
                disabled={isEditing}
              />
            )}
          />

          <Controller
            name="emergency_phone"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="tel"
                label="Emergency Phone"
                placeholder="Enter emergency phone number"
                error={errors.emergency_phone?.message}
                required
              />
            )}
          />

          <Controller
            name="weight"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="number"
                step="0.1"
                label="Weight (kg)"
                placeholder="Enter weight in kg"
                error={errors.weight?.message}
                required
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <Controller
            name="height"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="number"
                step="0.1"
                label="Height (cm)"
                placeholder="Enter height in cm"
                error={errors.height?.message}
                required
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <Controller
            name="bloodType"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Blood Type"
                placeholder="Select blood type"
                error={errors.bloodType?.message}
                required
              />
            )}
          />

          <Controller
            name="medical_condition_summary"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Medical Condition Summary"
                placeholder="Enter medical condition summary"
                error={errors.medical_condition_summary?.message}
                required
              />
            )}
          />

          <Controller
            name="allergies"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Allergies"
                placeholder="Enter allergies (comma separated)"
                error={errors.allergies?.message}
                onChange={(e) => {
                  const value = e.target.value;
                  field.onChange(value ? value.split(',').map(item => item.trim()) : []);
                }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;