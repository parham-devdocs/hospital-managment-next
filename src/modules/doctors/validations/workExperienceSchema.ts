import z from "zod";


// Define the honor schema
const responsibilitySchema = z.string().min(1, "Honor description is required");

// Define the education schema with medicalSchool included
export const workExperienceSchema = z.object({
  hospital: z.string().min(1, "Hospital is required"),
  startDate: z.date().min(1, "Graduation Year is required"),
  endDate: z.date().min(1, "Country is required"),
  location: z.string().min(1, "Degree is required"),
  position:z.string().min(1,"position is required"),
  responsibilities: z.array(responsibilitySchema).min(1, "At least one honor is required"),
});



// Infer the type from the schema
export type workExperienceFormData = z.infer<typeof workExperienceSchema>;