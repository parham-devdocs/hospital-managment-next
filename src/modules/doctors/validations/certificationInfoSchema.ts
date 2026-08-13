// src/modules/doctors/validations/certification.ts
import { z } from "zod";

export const certificationSchema = z.object({
  name: z.string().min(1, "Certification name is required"),
  issuingOrganization: z.string().min(1, "Issuing organization is required"),
  dateObtained: z.date({ error: "Date obtained is required" }),
  expiryDate: z.date({ error: "Expiry date is required" }),
  certificationNumber: z.string().min(1, "Certification number is required"),
})
  // Optional: ensure expiry is after obtained
  .refine(
    (data) => data.expiryDate > data.dateObtained,
    { message: "Expiry date must be after date obtained", path: ["expiryDate"] }
  );


// Infer types
export type CertificationFormData = z.infer<typeof certificationSchema>;
