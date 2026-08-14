// generalInfoForm.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormTypeProps } from "../../types";

export function GeneralInfoForm({ form }: FormTypeProps) {
  const { control } = form;

  return (
    <Card className="border border-gray-200 rounded-lg p-5 mb-4 bg-white shadow-sm">
      <CardContent className="p-0">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          General Information
        </h3>

        <FieldGroup>
          {/* Row 1: Full Name, Email, Password – 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Full Name */}
            <Controller
              name="user.fullName"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input
                    {...field}
                    id="fullName"
                    placeholder="John Doe"
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="user.email" // ✅ fixed
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="user.password" // ✅ fixed
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Min 8 characters"
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          {/* Row 2: Address – full width */}
          <Controller
            name="user.address" // ✅ fixed
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  {...field}
                  id="address"
                  placeholder="123 Main St"
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Row 3: Phone Number, Age, Gender – 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Phone Number */}
            <Controller
              name="user.phoneNumber" // ✅ fixed
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id="phoneNumber"
                    placeholder="1234567890"
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Age – convert to number */}
            <Controller
              name="user.age" // ✅ fixed
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="age">Age</FieldLabel>
                  <Input
                    {...field}
                    id="age"
                    type="number"
                    placeholder="25"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    aria-invalid={fieldState.invalid}
                    className="w-full"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* Gender – shadcn Select */}
            <Controller
              name="user.gender" // ✅ fixed
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="gender">Gender</FieldLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger id="gender" aria-invalid={fieldState.invalid} className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}