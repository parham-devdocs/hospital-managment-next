// app/shared/hooks/useGet.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import axiosClient from "../utils/axiosClient";

interface UseGetOptions {
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

interface UseGetResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
  refetch: () => void;
}

function useGet<T>(
  url: string,
  options: UseGetOptions = {}
): UseGetResponse<T> {
  const { enabled = true, onSuccess, onError } = options;

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.get(url);
      console.log({response})
      setData(response.data.data);
      onSuccess?.(response.data);
    } catch (err) {
      setError(err);
      onError?.(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, onSuccess, onError]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled, fetchData]);
  return { data, isLoading, error, refetch: fetchData };
}

export default useGet;
