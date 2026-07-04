"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Header from "./header"
import { createClient } from "../../../utils/supabase/client"

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters.")
      .max(50, "Full name must be at most 50 characters.")
      .regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid name."),
    email: z.string().email("Please enter a valid email address."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number, and one special character."
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters."),
    age: z
      .number()
      .min(1, "Age must be at least 1.")
      .max(120, "Age must be at most 120."),
    gender: z
      .string()
      .min(1, "Please select your gender."),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters.")
      .max(200, "Address must be at most 200 characters."),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
      gender: "",
      address: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const { data: authData, error } = await createClient().auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
            age: data.age,
            gender: data.gender,
            address: data.address,
          },
        },
      })
      if (error) {
        toast.error("Registration failed:", {
          description: error.message,
          position: "bottom-right",
        })
        return
      }

      toast.success("Registration successful!", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
      })
      
      form.reset()
    } catch (error) {
      toast.error("An error occurred:", {
        description: "Please try again later.",
        position: "bottom-right",
      })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-none bg-transparent flex flex-col">
      <Header />
      <CardContent className="flex-1 px-0 pt-6 overflow-y-auto">
        <form id="registration-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4 px-1">
            {/* Full Name */}
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    htmlFor="fullName" 
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="fullName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Dr. Jane Doe"
                    autoComplete="name"
                    className="border-primary/20 focus-visible:ring-primary/30 h-11"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    htmlFor="email" 
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="patient@healthcare.com"
                    autoComplete="email"
                    className="border-primary/20 focus-visible:ring-primary/30 h-11"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    htmlFor="password" 
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    className="border-primary/20 focus-visible:ring-primary/30 h-11"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />

            {/* Confirm Password */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    htmlFor="confirmPassword" 
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="confirmPassword"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="border-primary/20 focus-visible:ring-primary/30 h-11"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />

            {/* Age & Gender */}
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="age"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel 
                      htmlFor="age" 
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Age
                    </FieldLabel>
                    <Input
                      {...field}
                      id="age"
                      type="number"
                      aria-invalid={fieldState.invalid}
                      placeholder="35"
                      autoComplete="off"
                      min={1}
                      className="border-primary/20 focus-visible:ring-primary/30 h-11"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="gender"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel 
                      htmlFor="gender" 
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Gender
                    </FieldLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger 
                        id="gender"
                        className="border-primary/20 focus-visible:ring-primary/30 h-11"
                        aria-invalid={fieldState.invalid}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="non-binary">Non-Binary</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Address */}
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel 
                    htmlFor="address" 
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Address
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="address"
                      placeholder="123 Medical Center Dr, Suite 200, City, State, ZIP"
                      rows={3}
                      className="min-h-24 resize-none border-primary/20 focus-visible:ring-primary/30"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums text-[10px] text-muted-foreground">
                        {field.value.length}/200 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription className="text-[10px] text-muted-foreground/70 mt-1">
                    Street address, city, state, and ZIP code.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-xs mt-1" />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-t border-primary/5 bg-gradient-to-l from-primary/5 to-transparent pt-4 px-1">
        <div className="w-full flex flex-col sm:flex-row justify-between gap-3">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => form.reset()}
            className="border-primary/20 hover:bg-primary/5 w-full sm:w-auto"
          >
            Reset Form
          </Button>
          <Button 
            type="submit" 
            form="registration-form"
            className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
          >
            Create Account
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}