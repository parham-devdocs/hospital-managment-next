import z from "zod";


export const medicalInfoSchema = z.object({
    allergies: z.array(z.string()),
    height: z.number().positive("Height must be a positive number"),
    medical_condition_summary: z.string().min(1, "Medical condition summary is required"),
    bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
    weight: z.number().positive("Weight must be a positive number"),
    emergency_phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid emergency phone number format"),
    illness: z.string().min(1, "Illness is required"),
  });