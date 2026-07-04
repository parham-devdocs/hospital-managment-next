// hooks/useRegistration.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createClient } from "../../../utils/supabase/client";
import * as z from "zod";
import formSchema from "./signupSchema";

type FormData = z.infer<typeof formSchema>;

export const useRegistration = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
      gender: "",
      address: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { data: authData, error } = await createClient().auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
            age: data.age,
            gender: data.gender,
            address: data.address,
          },
        },
      });

      if (error) {
        toast.error("Registration failed:", {
          description: error.message,
          position: "bottom-right",
        });
        return;
      }

      toast.success("Registration successful!", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
      });

      form.reset();
    } catch (error) {
      toast.error("An error occurred:", {
        description: "Please try again later.",
        position: "bottom-right",
      });
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
  };
};