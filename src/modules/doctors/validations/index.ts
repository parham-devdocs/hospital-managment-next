// validations/formSchema.ts
import z from "zod";
import { educationSchema } from "./educationSchema";
import { generalInfoSchema } from "./generalInfoSchema"; // ✅ Make sure this imports the schema
import { certificationSchema } from "./certificationInfoSchema";
import { workExperienceSchema } from "./workExperienceSchema";
import { bioSchema } from "./bioSchema";
import { specialtySchema } from "./specialtySchema";

// ✅ Option 1: Using z.object directly (Recommended)
export const formSchema = z.object({
  user: generalInfoSchema, // ✅ TS can infer this properly
  educations: z.array(educationSchema).min(1, "At least one education is required"),
  workExperiences: z.array(workExperienceSchema).min(1, "At least one work experience is required"),
  certifications: z.array(certificationSchema).min(1, "At least one certification is required"),
bio:bioSchema,
specialties:z.array(specialtySchema).min(1,"")
});

export type FormData = z.infer<typeof formSchema>;
