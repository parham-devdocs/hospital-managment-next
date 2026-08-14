// validations/generalInfoSchema.ts
import z from "zod";

export const generalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email:z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  age: z.number().min(18, "Must be at least 18 years old"),
  gender: z.enum(["male", "female"]),
});

export type GeneralInfo = z.infer<typeof generalInfoSchema>;