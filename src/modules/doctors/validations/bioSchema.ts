

import z from "zod";

export const bioSchema =z.string().min(120,"bio must be at least 120 characters").optional()


export type Specialty = z.infer<typeof bioSchema>;