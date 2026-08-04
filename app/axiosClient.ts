import axios from "axios";

const axiosClient = axios.create({
  baseURL:  process.env.NODE_ENV==="development" ? process.env.API_BASE_URL_DEV : process.env.API_BASE_URL_PROD,
  timeout: 5000,
  adapter:"fetch"
});

export default axiosClient