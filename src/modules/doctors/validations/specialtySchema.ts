import z from "zod";

export const specialtySchema = z.object({
  name: z.string().min(1, "Specialty name is required"),
});

export type Specialty = z.infer<typeof specialtySchema>;