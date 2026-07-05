// hooks/useRegistration.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createClient } from "../../../utils/supabase/client";
import * as z from "zod";
import signInSchema from "./singInSchema";

type FormData = z.infer<typeof signInSchema>;

export const useLogin = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data)
    try {
      const { data: authData, error } = await createClient().auth.signInWithPassword({
        email: data.email,
        password: data.password
      })

      if (error) {
        toast.error("Login failed:", {
          description: error.message,
          position: "bottom-right",
        });
        return;
      }

      toast.success("Login successful!", {
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