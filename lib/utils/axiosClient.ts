// src/lib/api/client.ts
import axios from "axios";

// Cache configuration
interface CacheEntry {
  data: any;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class ApiCache {
  private cache = new Map<string, CacheEntry>();
  private defaultTTL = 5 * 60 * 1000; // 5 minutes default

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > entry.ttl;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  set(key: string, data: any, ttl?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL,
    });
  }

  clear(): void {
    this.cache.clear();
  }

  remove(key: string): void {
    this.cache.delete(key);
  }

  // Clear expired entries
  clean(): void {
    for (const [key, entry] of this.cache) {
      if (Date.now() - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

const apiCache = new ApiCache();

const getBaseURL = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_API_BASE_URL_DEV || "http://localhost:3001";
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL_PROD || "http://localhost:3001";
};

const axiosClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Check cache
axiosClient.interceptors.request.use((config) => {
  // Skip cache for non-GET requests or if explicitly disabled
  if (config.method?.toLowerCase() !== "get" || config.headers?.["x-skip-cache"]) {
    return config;
  }

  // Generate cache key from url and params
  const cacheKey = `${config.url}${config.params ? JSON.stringify(config.params) : ""}`;
  
  // Check if we have cached data
  const cachedData = apiCache.get(cacheKey);
  if (cachedData) {
    // Add cached data to config for response interceptor to use
    (config as any)._cachedData = cachedData;
    (config as any)._cacheKey = cacheKey;
  }

  return config;
});

// Response interceptor - Cache GET responses
axiosClient.interceptors.response.use(
  (response) => {
    // Only cache GET requests
    if (response.config.method?.toLowerCase() === "get") {
      const cacheKey = (response.config as any)._cacheKey || 
        `${response.config.url}${response.config.params ? JSON.stringify(response.config.params) : ""}`;
      
      // Get TTL from config or use default
      const ttl = response.config.headers?.["x-cache-ttl"] 
        ? parseInt(response.config.headers["x-cache-ttl"]) 
        : 5 * 60 * 1000; // 5 minutes default

      apiCache.set(cacheKey, response.data, ttl);
    }

    // If we had cached data and it matches, use it
    const cachedData = (response.config as any)._cachedData;
    if (cachedData) {
      // Response already has data, but we want to use cached version
      // This is handled in the request interceptor
    }

    return response;
  },
  (error) => {
    // Handle errors
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Cache utilities
export const cacheUtils = {
  clear: () => apiCache.clear(),
  remove: (key: string) => apiCache.remove(key),
  clean: () => apiCache.clean(),
  getCache: () => apiCache,
};

// Helper to get cache key from config
export const getCacheKey = (url: string, params?: any) => {
  return `${url}${params ? JSON.stringify(params) : ""}`;
};

export default axiosClient;