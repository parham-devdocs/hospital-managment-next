// validations/generalInfoSchema.ts
import z from "zod";

export const generalInfoSchema = z.object({
  // ✅ Email - matches DTO: IsEmail + regex pattern
  email: z
    .email("Please provide a valid email address")
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email format"
    ),

  // ✅ Password - matches DTO: MinLength(8), MaxLength(256)
  password: z.string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(256, "Password is too long"),

  // ✅ Full Name - matches DTO: MaxLength(100), required
  fullName: z.string()
    .min(1, "Full name is required")
    .max(100, "Full name must be at most 100 characters"),

  // ✅ Address - matches DTO: MaxLength(255), required
  address: z.string()
    .min(1, "Address is required")
    .max(255, "Address must be at most 255 characters"),

  // ✅ Phone Number - matches DTO: E.164 format
  phoneNumber: z.string()
    .min(1, "Phone number is required")
    .regex(
      /^\+[1-9]\d{1,14}$/,
      "Phone number must be in E.164 format (e.g., +1234567890)"
    ),

  // ✅ Age - matches DTO: Min(1), Max(120), required
  age: z.number()
    .min(1, "Age must be at least 1")
    .max(120, "Age must be at most 120"),

  // ✅ Gender - matches DTO: IsEnum(Gender)
  gender: z.enum(["male", "female"],"gender is required"),
});

export type GeneralInfo = z.infer<typeof generalInfoSchema>;