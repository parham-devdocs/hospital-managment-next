import z from "zod";

export const generalInfoSchema = {
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  age: z
    .number()
    .min(18, "Must be at least 18 years old")
    .max(120, "Invalid age"),
  gender: z.enum(["male", "female"]),
}

// Infer the type from the schema
export type generalInfoFormData = z.infer<typeof generalInfoSchema>;
