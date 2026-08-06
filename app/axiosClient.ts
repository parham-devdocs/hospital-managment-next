// axiosClient.ts
import axios from "axios";

const getBaseURL = () => {
  // Check if we're in development
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_API_BASE_URL_DEV || "http://localhost:3001";
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL_PROD || "http://localhost:3001";
};

const axiosClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,

});



export default axiosClient;