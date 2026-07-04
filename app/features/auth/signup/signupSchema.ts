import z from "zod";

const formSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters.")
      .max(50, "Full name must be at most 50 characters.")
      .regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid name."),
    email: z.email("Please enter a valid email address."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number, and one special character."
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters."),
    age: z
      .number()
      .min(1, "Age must be at least 1.")
      .max(120, "Age must be at most 120."),
    gender: z.string().min(1, "Please select your gender."),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters.")
      .max(200, "Address must be at most 200 characters."),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

  export default formSchema