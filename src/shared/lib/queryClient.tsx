import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";


 export const queryClient=   new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 3,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
          },
          mutations: {
            retry: 1,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
            onError: (error) => {
              let message = "Something went wrong. Please try again.";

              if (axios.isAxiosError(error)) {
                message = error.response?.data?.message || error.message;
              } else if (error instanceof Error) {
                message = error.message;
              }

              toast.error(message);
              console.error("Mutation error:", error);
            },
          },
        },
      })
