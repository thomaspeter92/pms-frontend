import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { useAuthStore } from "../auth/authStore";

const axiosParams = {
  baseURL:
    import.meta.env.VITE_NODE_ENV === "dev"
      ? "http://localhost:3000/api"
      : "http://ec2-3-35-208-149.ap-northeast-2.compute.amazonaws.com/api",
};

const axiosInstance: AxiosInstance = axios.create(axiosParams);

// return data to avoid data.data access
axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    if (res?.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    // log out users if the are unauthorised (persisting tokens)
    if (error.status === 401) {
      useAuthStore.getState().logout();
    }
  }
);

// Attach token if present
axiosInstance.interceptors.request.use((config) => {
  console.log();
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

type APIErrorResponse = {
  status: "error";
  message: string;
};

export type APIError = AxiosError<APIErrorResponse>;

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
