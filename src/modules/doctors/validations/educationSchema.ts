// src/modules/doctors/validations/educationEntry.ts
import { z } from "zod";

// Define the honor schema
const honorSchema = z.string().min(1, "Honor description is required");

// Define the education schema with medicalSchool included
export const educationSchema = z.object({
  medicalSchool: z.string().min(1, "Medical School is required"),
  graduationYear: z.number().min(1, "Graduation Year is required"),
  country: z.string().min(1, "Country is required"),
  degree: z.string().min(1, "Degree is required"),
  honors: z.array(honorSchema).min(1, "At least one honor is required"),
});



// Infer the type from the schema
export type educationFormData = z.infer<typeof educationSchema>;