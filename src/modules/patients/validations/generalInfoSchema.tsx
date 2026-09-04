import z from "zod";

// User schema
const generalInfoSchema = z.object({
    address: z.string().min(1, "Address is required"),
    age: z.number().int().positive().min(0, "Age must be a positive number"),
    fullName: z.string().min(1, "Full name is required"),
    gender: z.enum(["Male", "Female"]),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
  });


  export default generalInfoSchema