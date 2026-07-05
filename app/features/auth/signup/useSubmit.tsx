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
      const supabase = createClient();
      
      // 1. Sign up the user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
            age: data.age,
            gender: data.gender,
            address: data.address,
            role: "patient"
          },
        },
      });

      if (signUpError) {
        toast.error("Registration failed:", {
          description: signUpError.message,
          position: "top-right",
          duration: 5000,
        });
        return;
      }

      if (!authData.user) {
        toast.error("Registration failed:", {
          description: "No user data returned",
          position: "top-right",
          duration: 5000,
        });
        return;
      }

      // 2. Insert into profiles table using the user's ID
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id, // ✅ IMPORTANT: Link to auth.users
          first_name: data.fullName, // ✅ Match your column names
          last_name: '', // or split fullName
          email: data.email,
          phone: '', // Add phone field to your form if needed
          avatar_url: null,
          // Add any other fields your profiles table has
        })
        .select()
        .single();

      if (profileError) {
        console.error('Profile insertion error:', profileError);
        toast.error("Profile creation failed:", {
          description: profileError.message,
          position: "top-right",
          duration: 5000,
        });
        
        // Optional: Delete the auth user if profile creation fails
        // await supabase.auth.admin.deleteUser(authData.user.id);
        return;
      }

      // 3. Success!
      toast.success("Registration successful!", {
        description: `Welcome ${data.fullName}! Please check your email to verify your account.`,
        position: "bottom-right",
        duration: 5000,
      });

      form.reset();

    } catch (error) {
      console.error('Registration error:', error);
      toast.error("An error occurred:", {
        description: error instanceof Error ? error.message : "Please try again later.",
        position: "bottom-right",
        duration: 5000,
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