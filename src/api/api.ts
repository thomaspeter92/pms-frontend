import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useAuthStore } from "../auth/authStore";

const axiosParams = {
  baseURL:
    import.meta.env.VITE_NODE_ENV === "dev"
      ? "http://localhost:3000/api"
      : "http://ec2-3-35-208-149.ap-northeast-2.compute.amazonaws.com/api",
};

const axiosInstance: AxiosInstance = axios.create(axiosParams);

// return data to avoid data.data access
axiosInstance.interceptors.response.use((config) => {
  if (config?.data) {
    return config.data;
  }
  return config;
});

// Attach token if present
axiosInstance.interceptors.request.use((config) => {
  if (useAuthStore.getState().token) {
    config.headers.Authorization = `Bearer ${useAuthStore.getState().token}`;
  }
  return config;
});

export type ApiResponse<T> = {
  statusCode: number;
  status: "success" | "error";
  data: T;
};

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<ApiResponse<T>> => axios.get(url, config),
    delete: <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ): Promise<ApiResponse<T>> => axios.delete(url, config),
    post: <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ): Promise<ApiResponse<T>> => axios.post(url, body, config),
    // patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    //   axios.patch(url, body, config),
    put: <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ): Promise<ApiResponse<T>> => axios.put(url, body, config),
  };
};
export default api(axiosInstance);
