import { z } from 'zod';
import GeneralInfoSchema from './generalInfoSchema';
import { medicalInfoSchema } from './medicalInfoSchem';


// Main schema
export const patientSchema = z.object({
user:GeneralInfoSchema,
...medicalInfoSchema.shape,

  });

// Type inference
export type FormData = z.infer<typeof patientSchema>;
