import z from "zod";
import {educationSchema  } from "./educationSchema";
import {generalInfoSchema  } from "./generalInfoSchema";
import { certificationSchema } from "./certificationInfoSchema";
import { workExperienceSchema } from "./workExperienceSchema";
export const formSchema = z.object({

    educations: z.array(educationSchema).min(1, "At least one education is required"),
    workExperiences: z.array(workExperienceSchema).min(1, "At least one work experience is required"),
    certifications: z.array(certificationSchema).min(1,"at least one certification is required"), 
    ...generalInfoSchema
  });

  export type FormData = z.infer<typeof formSchema>;
