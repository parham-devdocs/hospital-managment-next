"use client";

import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { queryClient } from "../shared/lib/queryClient";

export function Providers({ children }: { children: React.ReactNode }) {

  const [QueryClient] = useState(
    () =>queryClient);

  return (
    <QueryClientProvider client={QueryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}