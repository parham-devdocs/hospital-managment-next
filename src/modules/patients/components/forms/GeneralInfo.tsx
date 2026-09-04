// components/GeneralInfo.tsx
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import SimpleInput from '@/src/shared/components/form/controllers/simpleInput';
import { FormData } from '../../validations';

interface GeneralInfoProps {
  isEditing?: boolean;
}

const GeneralInfo = ({ isEditing = false }: GeneralInfoProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="w-full h-full p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="user.fullName"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Full Name"
                placeholder="Enter your full name"
                error={errors.user?.fullName?.message}
                required
                disabled={isEditing}
              />
            )}
          />

          <Controller
            name="user.age"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="number"
                label="Age"
                placeholder="Enter your age"
                error={errors.user?.age?.message}
                required
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <Controller
            name="user.gender"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Gender"
                placeholder="Select gender"
                error={errors.user?.gender?.message}
                required
              />
            )}
          />

          <Controller
            name="user.email"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="email"
                label="Email"
                placeholder="Enter your email"
                error={errors.user?.email?.message}
                required
              />
            )}
          />

          <Controller
            name="user.phoneNumber"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Phone Number"
                placeholder="Enter phone number"
                error={errors.user?.phoneNumber?.message}
                required
              />
            )}
          />

          <Controller
            name="user.address"
            control={control}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="Address"
                placeholder="Enter your address"
                error={errors.user?.address?.message}
                required
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;